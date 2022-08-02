import { GlobalStyle } from 'assets/Styles/GlobalStyle';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import {theme} from '../assets/Styles/theme'
import MainTemplate from 'components/tempates/MainTemplate/MainTemplate';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Destination from './Destination';


const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <MainTemplate>
          <Routes>
            <Route path={"/destination"} element={<Destination/>}/>
            <Route path={"/"} element={<Home/>}/>
          </Routes>
        </MainTemplate>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
