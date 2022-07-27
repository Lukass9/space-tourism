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
  /* background-image: url(${backgroud}); */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Img = styled.img ` 
  position: absolute;
  width: 100%;
  z-index: -1;
`
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <Wrapp>
          <Nav/>
          <Img src={backgroud}/>
        </Wrapp>
      </ThemeProvider>
    </>
  );
}

export default App;
