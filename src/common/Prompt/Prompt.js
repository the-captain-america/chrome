import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import useDisableBodyScroll from '@hooks/useDisableBodyScroll'
import {
  ModalOverlay,
  ModalContainer,
  ModalContent,
  ModalHeader,
  Controls,
} from './Prompt.styled'
import { Button } from '@common/Button'
import { Icon } from '@common/Icon'
import { Text } from '@common/Text'
import { colors } from '@common/Theme'
import { Spinner } from '@common/Spinner'
import { Flex } from '@common/Flex'

import styled, { keyframes } from 'styled-components'

const shakeAnimation = keyframes`
  10%, 90% { transform: translateX(-2px); }
  20%, 80% { transform: translateX(2px); }
  30%, 50%, 70% { transform: translateX(-4px); }
  40%, 60% { transform: translateX(4px); }
`

const bounceInAnimation = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); }
`

const AnnoyingWrapper = styled.div`
  display: inline-block;
  animation: ${({ $key }) =>
      $key % 2 === 0 ? shakeAnimation : bounceInAnimation}
    0.8s ease-out;
`

const CloseButton = styled.button`
  outline: none;
  position: absolute;
  width: 48px;
  height: 48px;
  border: none;
  background: none;
  display: flex;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  &:focus {
    outline: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
  &:hover {
    cursor: pointer;
    background: rgba(224, 224, 224, 0.29);
  }
`

const Prompt = ({
  callback = () => {},
  title = '',
  message = '',
  children,
}) => {
  const [animationKey, setAnimationKey] = useState(0)

  useDisableBodyScroll(true)

  useEffect(() => {
    setAnimationKey((prev) => prev + 1)
  }, [message])

  const modalRef = useRef(null)

  // const renderButtons = ({ buttons, callback, loading }) => {
  //   return buttons.map(({ label, value, variant }, index) => (
  //     <Button
  //       key={value}
  //       ref={index === 0 ? primaryButtonRef : secondaryButtonRef}
  //       width="100%"
  //       variant={variant || (value === 'CONFIRM' ? 'green' : 'red')} // Default colors
  //       justifyContent="center"
  //       onClick={() => callback({ action: value })}
  //     >
  //       {loading && value === 'CONFIRM' ? (
  //         <Spinner />
  //       ) : (
  //         <span className="label">{label}</span>
  //       )}
  //     </Button>
  //   ))
  // }

  return (
    <>
      <ModalContainer
        tabIndex={0}
        $bgColor="#282e32"
        ref={modalRef}
        $maxWidth={{
          xs: '100%',
          sm: 400,
        }}
      >
        <ModalHeader className="modal-header" $padding="0">
          <CloseButton
            width="unset"
            padding="0"
            variant="transparent"
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
            }}
            aria-label="Close"
            onClick={() => callback({ action: 'CLOSE' })}
          >
            <Icon name="CLOSE" fill="#323232" size={24} />
          </CloseButton>
        </ModalHeader>
        <ModalContent>
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            width="100%"
            padding={{
              xs: '60px 16px 0 16px',
            }}
          >
            <Text
              color={colors.white}
              size={24}
              fontWeight={700}
              mt={{
                xs: 24,
              }}
              textAlign="center"
              lineHeight={{
                xs: 21,
              }}
            >
              {title}, you have been chosen!
            </Text>

            {message && (
              <AnnoyingWrapper $key={animationKey}>
                <Text
                  $color={colors.white}
                  $size={16}
                  $mt={{
                    xs: 32,
                  }}
                  $fontWeight={400}
                  $textAlign="left"
                  $lineHeight={{
                    xs: 21,
                  }}
                >
                  {message}
                </Text>
              </AnnoyingWrapper>
            )}
          </Flex>
          <Controls
            $padding={{
              xs: '0px 16px 24px 16px',
            }}
          >
            {children}
          </Controls>
        </ModalContent>
      </ModalContainer>
      <ModalOverlay
        onClick={() => callback({ action: 'CLOSE' })}
        data-testid="modal-overlay"
      />
    </>
  )
}

Prompt.propTypes = {
  callback: PropTypes.func,
}

export { Prompt }
