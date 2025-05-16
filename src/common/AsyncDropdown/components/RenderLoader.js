import React from 'react'
import { Loader } from '@common/Loader'
import { DropdownListItem } from './Dropdown.styled'

const RenderLoader = ({ render, stroke, ...props }) => {
  const loaderProps = {
    circle: stroke || 'rgb(29, 34, 39)',
  }

  if (!render) {
    return (
      <DropdownListItem className="dropdown-list-loader">
        <Loader {...loaderProps} />
      </DropdownListItem>
    )
  }

  return render(props)
}

export default RenderLoader
