import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Satisfy&display=swap');

html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: inherit;
}
  
body {
    font-family: ${({theme}) => theme.fontFamily.barlow};
    margin: 0;
    padding: 0;
    overflow-y: hidden;
  }
`;
