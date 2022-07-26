import { GlobalStyle } from 'assets/Styles/GlobalStyle';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {theme} from '../assets/Styles/theme'

const Wrapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <Wrapp>
          <h1>To jest nowa strona</h1>
        </Wrapp>
      </ThemeProvider>
    </>
  );
}

export default App;
