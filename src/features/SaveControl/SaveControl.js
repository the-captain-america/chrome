import React, { useEffect, useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@common/Icon';
import { Loader } from './Loader';
import { saveState, clearState } from '@utils/storage';
import { Container, Control } from './SaveControl.styled';
// import { createTrackingItem, trackingSelector } from '@state/tracking'
// import { useSelector, useDispatch } from 'react-redux'
import { delay } from '@utils/delay';
import { SAVE_ACTIONS } from './constants';
import { Button } from '@common/Button';

// --- Default options including active state and optional active labels/icons ---
const defaultOptions = {
  SAVE: {
    id: 'abc',
    action: 'SAVE',
    label: 'Save',
    variant: 'green',
    icon: {
      default: 'SAVE',
      loading: null,
    },
    loadingText: 'Saving...',
    disabled: false,
    active: false,
  },
  CLEAR: {
    id: 'def',
    action: 'CLEAR',
    label: 'Clear',
    variant: 'red',
    icon: {
      default: 'TRASH',
      loading: null,
    },
    loadingText: 'Clearing...',
    disabled: false,
    active: false,
  },
  DELETE: {
    id: 'ghi',
    action: 'DELETE',
    label: 'Delete',
    variant: 'red',
    icon: {
      default: 'DELETE',
      loading: null,
    },
    loadingText: 'Deleting...',
    disabled: false,
    active: false,
  },
  EDIT: {
    id: 'jkl',
    action: 'EDIT',
    label: 'Edit',
    variant: 'blue',
    icon: {
      default: 'EDIT',
      loading: null,
    },
    loadingText: 'Editing...',
    disabled: false,
    active: false,
  },
  COLLAPSE: {
    id: 'mno',
    action: 'COLLAPSE',
    label: 'Collapse',
    activeLabel: 'Expand', // When active, the label changes to "Expand"
    variant: 'purple',
    icon: {
      default: 'DOUBLE_ARROW', // Inactive state icon
      active: 'EXPAND', // Active state icon
      loading: null,
    },
    loadingText: 'Collapsing...',
    disabled: false,
    active: false,
  },
};

const SaveControl = ({
  name,
  callback = () => {},
  data = {},
  options = [],
  saveTo = 'JSON',
  disabled = false,
}) => {
  // Loading state per action (e.g. SAVE, CLEAR, etc.)
  const [loadingStates, setLoadingStates] = useState({});
  // Active state per action; keys are option.action, values are booleans.
  const [activeStates, setActiveStates] = useState({});

  // Memoize transformed options so that they don't change on every render.
  const buttonOptions = useMemo(() => {
    if (
      Array.isArray(options) &&
      options.length > 0 &&
      typeof options[0] === 'string'
    ) {
      return options
        .map((opt) => defaultOptions[opt.toUpperCase()])
        .filter(Boolean);
    }
    return options;
  }, [options]);

  // Initialize activeStates from the buttonOptions when they change.
  useEffect(() => {
    const initialActive = {};
    buttonOptions.forEach((option) => {
      if (typeof option.active === 'boolean') {
        initialActive[option.action] = option.active;
      }
    });
    // Only update if different (shallow comparison here).
    setActiveStates((prev) => {
      const isDifferent = Object.keys(initialActive).some(
        (key) => initialActive[key] !== prev[key]
      );
      return isDifferent ? initialActive : prev;
    });
  }, [buttonOptions]);

  // Define per‑action handlers.
  const onSave = useCallback(() => {
    if (!name || !name.length) {
      console.warn('No name provided to <SaveControl />');
      return;
    }
    setLoadingStates((prev) => ({ ...prev, SAVE: true }));
    const payload = data ? { ...data, feature: name } : { feature: name };
    if (saveTo && saveTo.toUpperCase() === 'JSON') {
      saveState(payload, name);
      // dispatch(
      //   createTrackingItem({
      //     timestamp: Date.now(),
      //     value: payload.value || 'N/A',
      //     label: payload.label || 'N/A',
      //     feature: payload.feature || 'N/A',
      //     ...payload,
      //   }),
      // )
      callback({ action: SAVE_ACTIONS.SAVE, name, payload });
    } else if (saveTo === 'localStorage') {
      saveState(payload, name);
      callback({ action: SAVE_ACTIONS.SAVE, name, payload });
    } else if (saveTo === 'local') {
      callback({ action: SAVE_ACTIONS.SAVE, name, payload });
    }
    delay(600).then(() => {
      setLoadingStates((prev) => ({ ...prev, SAVE: false }));
    });
  }, [callback, data, name, saveTo]);

  const onClear = useCallback(
    (e) => {
      e.preventDefault();
      setLoadingStates((prev) => ({ ...prev, CLEAR: true }));
      callback({ action: SAVE_ACTIONS.CLEAR, name, payload: {} });
      clearState(name);
      delay(1000).then(() => {
        setLoadingStates((prev) => ({ ...prev, CLEAR: false }));
      });
    },
    [callback, name]
  );

  const onEdit = useCallback(
    (e) => {
      e.preventDefault();
      callback({ action: SAVE_ACTIONS.EDIT, name, payload: null });
    },
    [callback, name]
  );

  // Generic action handler for actions like COLLAPSE or DELETE.
  const handleGenericAction = useCallback(
    (action, e) => {
      if (e && e.preventDefault) e.preventDefault();
      callback({ action, name, payload: null });
    },
    [callback, name]
  );

  // Main click handler: maps option.action to the correct function.
  const handleButtonClick = useCallback(
    (option, e) => {
      // If the option supports toggling via active state (e.g. COLLAPSE), toggle it.
      if (option.activeLabel) {
        setActiveStates((prev) => ({
          ...prev,
          [option.action]: !prev[option.action],
        }));
      }
      switch (option.action.toUpperCase()) {
        case 'SAVE':
          onSave();
          break;
        case 'CLEAR':
          onClear(e);
          break;
        case 'EDIT':
          onEdit(e);
          break;
        case 'COLLAPSE':
          handleGenericAction('COLLAPSE', e);
          break;
        case 'DELETE':
          handleGenericAction('DELETE', e);
          break;
        default:
          break;
      }
    },
    [handleGenericAction, onClear, onEdit, onSave]
  );

  return (
    <Container>
      <Control>
        {buttonOptions.map((option) => {
          const isActive = activeStates[option.action];
          // Choose label: if the button supports an active state and is active, use activeLabel.
          const displayLabel =
            option.activeLabel && isActive ? option.activeLabel : option.label;
          // Choose icon: if active and an active icon is provided, use it.
          const displayIcon =
            option.icon && isActive && option.icon.active
              ? option.icon.active
              : option.icon && option.icon.default;

          return (
            <Button
              key={option.id}
              type="button"
              variant={option.variant}
              disabled={disabled || option.disabled}
              onClick={(e) => handleButtonClick(option, e)}
              isLoading={!!loadingStates[option.action] || globalLoading}
            >
              {loadingStates[option.action] ? (
                <>
                  <span>{option.loadingText}</span>
                  {option.icon && option.icon.loading ? (
                    <Icon ml={4} name={option.icon.loading} size={20} />
                  ) : (
                    <Loader position="relative" size={19} />
                  )}
                </>
              ) : (
                <>
                  <span>{displayLabel}</span>
                  {displayIcon && <Icon ml={4} name={displayIcon} size={20} />}
                </>
              )}
            </Button>
          );
        })}
      </Control>
    </Container>
  );
};

SaveControl.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  name: PropTypes.string.isRequired,
  callback: PropTypes.func,
  saveTo: PropTypes.string,
  options: PropTypes.array, // Array of strings or option objects
  disabled: PropTypes.bool,
};

export { SaveControl };
