import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* @font-face {
    font-family: radnika_next;
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  } */
  html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --maxWidth: 1920px;
    --contentWidth: 1200px;
    --midWidth: 850px;
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
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    /* font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'; */
  }
`;

export {GlobalStyles};