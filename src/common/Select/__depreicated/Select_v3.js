import React, { useState } from 'react'
import { useClickoutside as ClickOutside } from '../../hooks'
import Icon from '../../Icon'

import styled, { css } from 'styled-components'

const SelectCustom = styled.div`
  display: none;
  ${(props) =>
    props.isActive &&
    css`
      dispay: flex;
    `}
`
const SelectWrapper = styled.div`
  .selectNative {
  }
`
const SelectElement = styled.div``
const CustomOption = styled.div``
const Option = styled.option``

const original = () => (
  <>
    <span className="selectLabel" id="jobLabel">
      Main job role
    </span>
    <div className="selectWrapper">
      {/* <!-- rendered alone --> */}
      <select
        className="selectNative js-selectNative"
        aria-labelledby="jobLabel"
      >
        <option value="sel" disabled="" selected="">
          Select role...
        </option>
        <option value="ds">UI/UX Designer</option>
        <option value="fe">Frontend Engineer</option>
        <option value="be">Backend Engineer</option>
        <option value="qa">QA Engineer</option>
        <option value="un">Unicorn</option>
      </select>

      {/* <!-- Hide the custom select from AT (e.g. SR) using aria-hidden --> */}
      <div className="selectCustom js-selectCustom" aria-hidden="true">
        <div className="selectCustom-trigger">Select role...</div>
        <div className="selectCustom-options">
          <div className="selectCustom-option" data-value="ds">
            UI/UX Designer
          </div>
          <div className="selectCustom-option" data-value="fe">
            Frontend Engineer
          </div>
          <div className="selectCustom-option" data-value="be">
            Backend Engineer
          </div>
          <div className="selectCustom-option" data-value="qa">
            QA Engineer
          </div>
          <div className="selectCustom-option" data-value="un">
            Unicorn
          </div>
        </div>
      </div>
    </div>
  </>
)

const Select = ({
  callback = () => {},
  options = [],
  placeholder = 'Select',
}) => {
  const [isActive, setIsActive] = useState(false)
  const [optionChecked, setOptionChecked] = useState(null)
  const [customSelectHovered, updateCustomSelectHovered] = useState(-1)

  const onSelect = (value) => {
    setOptionChecked(value)
    callback(value)
  }

  const renderCustom = () => {
    if (!options || !options.length) return <></>
    return (
      <SelectCustom
        isActive={isActive}
        className="selectCustom js-selectCustom"
        aria-hidden={isActive}
      >
        <CustomOption className="selectCustom-trigger">
          {placeholder}
        </CustomOption>
        {options.map(({ label, value }) => (
          <CustomOption
            key={value}
            isActive={value === optionChecked}
            onClick={() => onSelect(value)}
            className="selectCustom-option"
          >
            {label}
          </CustomOption>
        ))}
      </SelectCustom>
    )
  }

  const renderOptions = () => {
    if (!options || !options.length) return <></>
    return (
      <select
        className="selectNative js-selectNative"
        aria-labelledby="jobLabel"
      >
        {options.map(({ label, value }) => (
          <>
            <Option value="sel" disabled="" selected="">
              {placeholder}
            </Option>
            <Option key={label} value={value}>
              {label}
            </Option>
          </>
        ))}
      </select>
    )
  }

  return (
    <ClickOutside callback={() => setIsActive(false)}>
      <SelectWrapper className="selectWrapper">
        {renderCustom()}
        {renderOptions()}
      </SelectWrapper>
    </ClickOutside>
  )
}

export { Select }

/*

const selectNative = document.getElementsByClassName("js-selectNative")[0];
const selectCustom = document.getElementsByClassName("js-selectCustom")[0];
const elSelectCustomBox = selectCustom.children[0];
const elSelectCustomOpts = selectCustom.children[1];
const customOptsList = Array.from(elSelectCustomOpts.children);
const optionsCount = customOptsList.length;
const defaultLabel = elSelectCustomBox.getAttribute("data-value");

let optionChecked = "";
let optionHoveredIndex = -1;

// Toggle custom select visibility when clicking the box
elSelectCustomBox.addEventListener("click", (e) => {
  const isClosed = !selectCustom.classList.contains("isActive");

  if (isClosed) {
    openSelectCustom();
  } else {
    closeSelectCustom();
  }
});

function openSelectCustom() {
  selectCustom.classList.add("isActive");
  // Remove aria-hidden in case this was opened by a user
  // who uses AT (e.g. Screen Reader) and a mouse at the same time.
  selectCustom.setAttribute("aria-hidden", false);

  if (optionChecked) {
    const optionCheckedIndex = customOptsList.findIndex(
      (el) => el.getAttribute("data-value") === optionChecked
    );
    updateCustomSelectHovered(optionCheckedIndex);
  }

  // Add related event listeners
  document.addEventListener("click", watchClickOutside);
  document.addEventListener("keydown", supportKeyboardNavigation);
}

function closeSelectCustom() {
  selectCustom.classList.remove("isActive");

  selectCustom.setAttribute("aria-hidden", true);

  updateCustomSelectHovered(-1);

  // Remove related event listeners
  document.removeEventListener("click", watchClickOutside);
  document.removeEventListener("keydown", supportKeyboardNavigation);
}

function updateCustomSelectHovered(newIndex) {
  const prevOption = elSelectCustomOpts.children[optionHoveredIndex];
  const option = elSelectCustomOpts.children[newIndex];

  if (prevOption) {
    prevOption.classList.remove("isHover");
  }
  if (option) {
    option.classList.add("isHover");
  }

  optionHoveredIndex = newIndex;
}

function updateCustomSelectChecked(value, text) {
  const prevValue = optionChecked;

  const elPrevOption = elSelectCustomOpts.querySelector(
    `[data-value="${prevValue}"`
  );
  const elOption = elSelectCustomOpts.querySelector(`[data-value="${value}"`);

  if (elPrevOption) {
    elPrevOption.classList.remove("isActive");
  }

  if (elOption) {
    elOption.classList.add("isActive");
  }

  elSelectCustomBox.textContent = text;
  optionChecked = value;
}

function watchClickOutside(e) {
  const didClickedOutside = !selectCustom.contains(event.target);
  if (didClickedOutside) {
    closeSelectCustom();
  }
}

function supportKeyboardNavigation(e) {
  // press down -> go next
  if (event.keyCode === 40 && optionHoveredIndex < optionsCount - 1) {
    let index = optionHoveredIndex;
    e.preventDefault(); // prevent page scrolling
    updateCustomSelectHovered(optionHoveredIndex + 1);
  }

  // press up -> go previous
  if (event.keyCode === 38 && optionHoveredIndex > 0) {
    e.preventDefault(); // prevent page scrolling
    updateCustomSelectHovered(optionHoveredIndex - 1);
  }

  // press Enter or space -> select the option
  if (event.keyCode === 13 || event.keyCode === 32) {
    e.preventDefault();

    const option = elSelectCustomOpts.children[optionHoveredIndex];
    const value = option && option.getAttribute("data-value");

    if (value) {
      selectNative.value = value;
      updateCustomSelectChecked(value, option.textContent);
    }
    closeSelectCustom();
  }

  // press ESC -> close selectCustom
  if (event.keyCode === 27) {
    closeSelectCustom();
  }
}

// Update selectCustom value when selectNative is changed.
selectNative.addEventListener("change", (e) => {
  const value = e.target.value;
  const elRespectiveCustomOption = elSelectCustomOpts.querySelectorAll(
    `[data-value="${value}"]`
  )[0];

  updateCustomSelectChecked(value, elRespectiveCustomOption.textContent);
});

// Update selectCustom value when an option is clicked or hovered
customOptsList.forEach(function (elOption, index) {
  elOption.addEventListener("click", (e) => {
    const value = e.target.getAttribute("data-value");

    // Sync native select to have the same value
    selectNative.value = value;
    updateCustomSelectChecked(value, e.target.textContent);
    closeSelectCustom();
  });

  elOption.addEventListener("mouseenter", (e) => {
    updateCustomSelectHovered(index);
  });

  // TODO: Toggle these event listeners based on selectCustom visibility
});

*/
