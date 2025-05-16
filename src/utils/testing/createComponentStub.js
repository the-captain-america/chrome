import React, { Component } from 'react'

export default function createComponentStub(
  element = 'div',
  componentProps = {},
) {
  // eslint-disable-next-line react/prefer-stateless-function
  return class ComponentStub extends Component {
    render() {
      const { ...props } = this.props

      const newProps = {
        ...props,
        ...componentProps,
      }
      return React.createElement(element, newProps)
    }
  }
}
