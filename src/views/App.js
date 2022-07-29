import { GlobalStyle } from 'assets/Styles/GlobalStyle';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import {theme} from '../assets/Styles/theme'
import MainTemplate from 'components/tempates/MainTemplate/MainTemplate';
import Home from './Home';


const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <MainTemplate>
          <Home/>
        </MainTemplate>
      </ThemeProvider>
    </>
  );
}

export default App;
