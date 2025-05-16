import { SaveControl as DefaultSaveControl } from './SaveControl'

const renderVariant = (variant) =>
  ({
    default: DefaultSaveControl,
  }[variant])

const SaveControl = (props) => {
  const { variant } = props
  const variantMatcher = (!!variant && variant.toLowerCase()) || 'default'
  const Component = renderVariant(variantMatcher)
  return <Component {...props} />
}

export { SaveControl }
