import styled, { keyframes } from 'styled-components'
import React, { Component } from 'react'

const theme = {
  primary: '#1fbccc',
  secondary: '#17a1af',
  light: '#c7c7c7',
  dark: '#959595',
  base1: '#353535',
  base2: '#F4F4F4',
  base3: '#D8D8D8',
  base4: '#9E9E9E',
  border: '#e6e6e6',
  white: '#ffffff',
}

const Container = styled.div`
  width: 100%;
  padding: 0px;
  margin: 0px;
  * {
    box-sizing: border-box;
  }
`

const Header = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  color: white;
  font-size: 16px;
  font-weight: light;
  text-transform: uppercase;
  border-bottom: 3px solid ${theme.secondary};
  background: ${theme.primary};
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
`

const ToolContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  &:hover {
    .tool-tip {
      top: -70px;
      transition: all 0.4s cubic-bezier(1, 0, 0.4, 1.7);
      transform: translateX(-50%) scale(1);
    }
  }
`

const Tip = styled.div`
  width: 125px;
  height: 50px;
  position: absolute;
  top: -50px;
  left: 50%;
  border-radius: 3px;
  background-color: #333;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 11px;
  line-height: 50px;
  color: #fff;
  text-align: center;
  transform: translateX(-50%) scale(0);
  transform-origin: bottom center;
  transition: all 0.4s cubic-bezier(1, 0, 0.4, 1);

  &:after {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #333;
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
  }
`

const Section = styled.section`
  padding: 25px;
  width: 400px;
  background: white;
  border-radius: 4px;
  position: relative;
  box-shadow: 3px 0px 15px 3px rgba(0, 0, 0, 0.14);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  > h1 {
    font-size: 14px;
    text-align: left;
  }
  > p {
    text-align: left;
  }
`

const Button = styled.button`
  border: none;
  position: relative;
  border-bottom: 3px solid ${theme.secondary};
  padding: 7px 10px;
  background-color: ${theme.primary};
  text-align: center;
  color: white;
  outline: none;
  &:focus {
    outline: none;
  }
`

const ToolTip = ({ text }) => (
  <Section>
    <ToolContainer>
      <Button>Hover me</Button>
      <Tip className="tool-tip">{`Tip: ${text}`}</Tip>
    </ToolContainer>
  </Section>
)

// <ToolTip text={'This is a tooltip'} />
