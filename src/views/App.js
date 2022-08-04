import { GlobalStyle } from 'assets/Styles/GlobalStyle';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {theme} from '../assets/Styles/theme'
import MainTemplate from 'components/tempates/MainTemplate/MainTemplate';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Destination from './Destination';


const App = () => {
  const [background, setBackground] = useState('')
  const handleSetBackground = (bck) =>{
      setBackground(bck)
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <MainTemplate background={background}>
          <Routes>
            <Route path={"/destination"} element={<Destination handleSetBackground={handleSetBackground}/>}/>
            <Route path={"/"} element={<Home handleSetBackground={handleSetBackground}/>}/>
          </Routes>
        </MainTemplate>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
