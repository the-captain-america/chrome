import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@common/Button'
import { Icon } from '@common/Icon'
import { prop, propEq } from 'ramda'
import { CopyValue } from '@common/CopyValue'
import { LinkTo } from '@common/Link'
import {
  RenderItem,
  Controls,
  RenderWrapper,
  RenderGroup,
} from './RenderList.styled'

const RenderList = ({ items, onRemove, onEdit, callback, config, data }) => {
  const hasScroll = prop('hasScroll')(config)

  if (!items || !items.length) return null

  const list = items.map((item, index) => {
    const asLink = propEq('variant', 'link')(item)
    return (
      <RenderItem key={item.id || index}>
        {item.id && (
          <Controls className="controls">
            <Button
              className="edit"
              variant="green"
              onClick={() => onEdit(item)}
            >
              <Icon name="EDIT" fill="white" stroke={'white'} size={20} />
            </Button>
            <Button
              className="remove"
              variant="red"
              onClick={() => onRemove(item)}
            >
              <Icon name="TRASH" stroke={'white'} size={20} />
            </Button>
          </Controls>
        )}
        {asLink ? (
          <LinkTo variant="copy" alone label={item.label} link={item.value} />
        ) : (
          <CopyValue
            label={item.label}
            value={item.value}
            id={item.id}
            expiry={item.expiry}
            data={data}
            callback={callback}
            config={{
              isLabelVisible: true,
              isValueVisible: true,
              priority: item.priority,
              isPassword: item.hidden,
            }}
          />
        )}
      </RenderItem>
    )
  })
  return (
    <RenderWrapper className={hasScroll ? 'WithWrapper' : ''}>
      <RenderGroup className="RenderGroup">{list}</RenderGroup>
    </RenderWrapper>
  )
}

RenderList.defaultProps = {
  items: [],
  onRemove: () => {},
  onEdit: () => {},
  callback: () => {},
  config: {},
  data: null,
}

RenderList.propTypes = {
  items: PropTypes.array.isRequired,
  onRemove: PropTypes.func,
  onEdit: PropTypes.func,
  callback: PropTypes.func,
  config: PropTypes.object,
  data: PropTypes.object,
}

export { RenderList }
