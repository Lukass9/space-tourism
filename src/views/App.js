import { GlobalStyle } from 'assets/Styles/GlobalStyle';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {theme} from '../assets/Styles/theme'
import backgroud from '../assets/home/background-home-desktop.jpg'
import Nav from 'components/organisms/navigation/Nav';

const Wrapp = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroud});
`;

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <Wrapp>
          <Nav/>
        </Wrapp>
      </ThemeProvider>
    </>
  );
}

export default App;
