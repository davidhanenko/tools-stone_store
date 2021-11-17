import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  html {
    --blue: #536ade;
    --lightBlue: #b1bbec;
    --darkBlue: #3c457d;
    --dark: #323545;
    --gray: #e6e8f4;
    --offWhite: #ededed;

    --maxWidth: 1400px;
    --minWidth: 850px;
    --navHeight: 90px;
    --searchHeight: 3rem;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *, *:before, *:after{
    box-sizing: inherit;
  }

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    line-height: 2;
    scroll-behavior: smooth;
    background: var(--offWhite);
  }
  a {
    text-decoration: none;
  }
 
`;

export { GlobalStyles };
