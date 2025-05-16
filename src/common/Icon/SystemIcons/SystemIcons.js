import React, { useState, useEffect, useCallback } from 'react'

import { CopyValue } from '@common/CopyValue'
import { Input } from '@common/Input'

import { Icon, icons } from '@common/Icon'

import { Title, Group, Item, ItemContainer } from '../Icon.styled'
import { Section, SectionContent } from '@common/Section'
import { Text } from '@common/Text'

const SystemIcons = () => {
  const [searchValue, setSearchValue] = useState('')
  const [filtered, setFiltered] = useState([])
  const list = Object.keys(icons)

  const clearSearch = () => setSearchValue('')

  useEffect(() => {
    if (!searchValue || !searchValue.length) {
      setFiltered(list)
      return
    } else if (!list || !list.length) {
      return
    } else {
      const filteredArray = list.filter((str) => {
        return str.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
      })
      setFiltered(filteredArray)
    }
  }, [searchValue])

  const onChange = (e) => {
    const { value } = e.target
    setSearchValue(value)
  }

  if (!list || !list.length) return null

  const renderSize = () => {
    return (
      <div
        className="icon-size"
        style={{
          padding: '4px',
          borderRadius: '4px',
          backgroundColor: 'black',
          position: 'absolute',
          top: 16,
          left: 16,
          zIndex: 1,
        }}
      >
        <Text color="white" size={12}>
          w:20 h:20
        </Text>
      </div>
    )
  }

  return (
    <Section title="Icons" path="client/src/features/Library/SystemIcons.js">
      <SectionContent>
        <div
          style={{
            paddingLeft: '5px',
            paddingRight: '5px',
            display: 'block',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <Input
            icon={<Icon name="SEARCH" size={20} />}
            variant="secondary"
            placeholder="Search Icon..."
            onClear={clearSearch}
            value={searchValue}
            onChange={onChange}
          />
        </div>

        <Group>
          {filtered.map((item, index) => (
            <Item key={index}>
              <ItemContainer>
                <Title alt={item} title={item}>
                  {item}
                </Title>
                {false && renderSize()}
                <Icon key={index} name={item || ''} size={20} />
                <CopyValue
                  mt={16}
                  config={{
                    isValueVisible: false,
                    isLabelVisible: true,
                  }}
                  label={item}
                  value={item}
                />
              </ItemContainer>
            </Item>
          ))}
        </Group>
      </SectionContent>
    </Section>
  )
}

export default SystemIcons
