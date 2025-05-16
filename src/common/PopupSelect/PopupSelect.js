import React, { useRef, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@common/Icon'
import { Button } from '@common/Button'
import { useOnClickOutside } from '@hooks/useOnClickOutside'
import { useEscape } from '@hooks/useEscape'
import { Container, Wrapper, Menu, Footer, MenuItem } from './PopupSelect.styled'
import { IconContainer } from '@common/IconContainer'
import { Text } from '@common/Text'

/**
 * A reusable popup-select component that accepts custom menu options.
 * Supports optional `position` (defaults to TOP) and optional `order` (falls back to index).
 */
export const PopupSelect = ({ options = [], trigger = null, callback = () => {}, config = {} }) => {
  const [isExpanded, setExpanded] = useState(false)
  const ref = useRef(null)
  const { width = 200, align = '' } = config

  // Ensure we have an array
  const safeOptions = Array.isArray(options) ? options : []

  // Attach a fallback _order (either opt.order or its index)
  const withOrder = safeOptions.map((opt, idx) => ({
    ...opt,
    _order: typeof opt.order === 'number' ? opt.order : idx,
  }))

  // TOP: anything not explicitly BOTTOM
  const topItems = withOrder
    .filter((opt) => opt.position && opt.position.toUpperCase() !== 'BOTTOM')
    .sort((a, b) => a._order - b._order)

  // BOTTOM: only when position === 'BOTTOM'
  const bottomItems = withOrder
    .filter((opt) => opt.position && opt.position.toUpperCase() === 'BOTTOM')
    .sort((a, b) => a._order - b._order)

  const onExpand = () => setExpanded((prev) => !prev)
  const onClose = useCallback(() => setExpanded(false), [])

  const handleAction = useCallback(
    (opt) => {
      if (opt.onClick) {
        opt.onClick(opt.action)
      } else {
        callback({ action: opt.action })
      }

      if (opt.position?.toUpperCase() === 'BOTTOM') {
        onClose()
      }
    },
    [callback, onClose]
  )

  useOnClickOutside(ref, onClose)
  useEscape(() => {
    if (isExpanded) handleAction({ action: 'CLOSE' })
  })

  return (
    <Wrapper ref={ref} $align={align}>
      <Container>
        <Button type="button" variant="grey" style={{ padding: '6px' }} onClick={onExpand}>
          {trigger || <Icon name="DOTS" size={16} fill="#A9AEB9" />}
        </Button>
      </Container>

      {isExpanded && (
        <Menu style={{ width: `${width}px` }}>
          {topItems.length > 0 && (
            <ul>
              {topItems.map((opt) => (
                <MenuItem
                  key={opt.action}
                  onClick={() => handleAction(opt)}
                  isActive={opt.value}
                  className={opt.value ? 'active' : ''}
                >
                  <span className="label">{opt.label}</span>
                  {opt.icon && (
                    <IconContainer style={{ width: '20px', height: '20px' }}>
                      <Icon name={opt.icon} size={20} />
                    </IconContainer>
                  )}
                </MenuItem>
              ))}
            </ul>
          )}

          {bottomItems.length > 0 && (
            <Footer enableTopBorder={topItems.length > 0}>
              <Text
                pl={16}
                pt={12}
                fontSize={12}
                color="rgb(176, 176, 176)"
                fontWeight={300}
                userSelect="none"
              >
                Actions
              </Text>
              <ul>
                {bottomItems.map((opt) => (
                  <li key={opt.action} onClick={() => handleAction(opt)}>
                    <span>{opt.label}</span>
                    {opt.icon && <Icon name={opt.icon} size={20} />}
                  </li>
                ))}
              </ul>
            </Footer>
          )}
        </Menu>
      )}
    </Wrapper>
  )
}

PopupSelect.propTypes = {
  /** All menu items; position defaults to TOP, order defaults to array index */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      action: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string,
      variant: PropTypes.string, // e.g. "yellow", "purple", etc
      position: PropTypes.oneOf(['TOP', 'BOTTOM']),
      order: PropTypes.number,
      onClick: PropTypes.func, // optional override
    })
  ),
  /** Custom trigger element */
  trigger: PropTypes.node,
  /** Fallback callback if no item-level onClick */
  callback: PropTypes.func,
  /** config.width to control menu width */
  config: PropTypes.shape({
    width: PropTypes.number,
    align: PropTypes.oneOf(['left', 'right']),
  }),
}
