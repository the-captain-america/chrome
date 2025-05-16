import React, { useState, useContext } from 'react'
import { Icon } from '@common/Icon'
import {
  MenuContainer,
  MenuContent,
  CloseButton,
  MenuControl,
  MenuTitle,
  MenuButton,
} from './SectionMenu.styled'
// import { Button } from '@common/Button';
// import { StateView } from '@common/StateView';
// import { uuid } from '@utils/uuid';
import { Context } from './Provider'

const SectionMenu = ({ title = '', height }) => {
  const [state, localDispatch] = useContext(Context)
  const [isActive, setIsActive] = useState(false)

  const [localHeight, setLocalHeight] = useState(height || 300)

  // const onSelect = () => {
  //   const id = uuid();
  //   localDispatch({
  //     type: 'ADD_ITEM',
  //     data: { label: 'Thing', id: id },
  //   });
  // };

  // const onToggle = () => {
  //   setIsActive(!isActive);
  //   setLocalHeight(localHeight + 100);
  // };
  // <StateView state={{ state }} />
  // <Button label="Save" mt={16} onClick={onSelect}>
  //<Icon ml={4} name="SAVE" stroke="white" size={20} />
  // </Button>

  return (
    <>
      <MenuButton onClick={onToggle}>
        <Icon name="FILTER" flip stroke="white" size={24} />
      </MenuButton>
      <MenuContainer isActive={isActive} height={localHeight}>
        <MenuControl>
          <CloseButton onClick={onToggle}>
            <Icon name="CLOSE" size={32} />
          </CloseButton>
          {title && <MenuTitle>{title}</MenuTitle>}
        </MenuControl>
        <MenuContent height={localHeight}></MenuContent>
      </MenuContainer>
    </>
  )
}

export { SectionMenu }
