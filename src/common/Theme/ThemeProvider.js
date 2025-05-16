import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const theme = {}

const font = {
  primary: `'IBM Plex Sans', sans-serif`,
}

const GlobalTheme = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  iframe { 
    display: none;
  }
  * {
    box-sizing: border-box;
    &:before {
      box-sizing: border-box;
    }
    &:after {
      box-sizing: border-box;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    padding: 0;
    margin: 0;
    background: #1F2429;
  }
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #1a1e22;
    border: none;
    box-shadow: none;
    border-radius: 8px;
    }
  &::-webkit-scrollbar-thumb {
    background: #424244;
    border: none;
    border-radius: 8px;
    box-shadow: none;
  }
  
  * {
    font-family: ${font.primary};
    }
    
  h1 {
    font-weight: 500;
    font-size: 28px;
    line-height: 22px;
    margin-bottom: 24px;
    font-family: ${font.primary};
  }
  h2 {
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    margin-bottom: 16px;
    font-family: ${font.primary};
  }
  h3 {
    font-weight: 500;
    font-size: 17px;
    line-height: 22px;
    margin-bottom: 16px;
    font-family: ${font.primary};
  }
  span {
    font-weight: 400;
    font-size: 16px;
    font-family: ${font.primary};
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 16px;
    font-family: ${font.primary};
  }
 

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: #424244;
    -webkit-text-size: 16px;
    color: white;
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
    background: #313133 !important;
    border-top: 0px solid transparent;
    border-right: 0px solid transparent;
    border-left: 0px solid transparent;
    border-bottom: 2px solid #424244;
    background-color: #313133 !important;
  }
`

const ThemeProvider = ({ children }) => {
  return (
    <>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
      <GlobalTheme />
    </>
  )
}

export { ThemeProvider }
