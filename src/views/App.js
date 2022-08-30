import { GlobalStyle } from 'assets/Styles/GlobalStyle';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {theme} from '../assets/Styles/theme'
import MainTemplate from 'components/tempates/MainTemplate/MainTemplate';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Destination from './Destination';
import data from 'assets/data'
import { Moon } from './Moon';
import { Mars } from './Mars';
import { Europa } from './Europa';
import { Titan } from './Titan';


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
            <Route exact path={"/"}  element={<Home handleSetBackground={handleSetBackground}/>}/>
            <Route path={"/destination"} element={<Destination handleSetBackground={handleSetBackground}/>}>
              <Route path={"moon"} element={<Moon data={data.destinations} />} />
              <Route path={"mars"} element={<Mars data={data.destinations} />} />
              <Route path={"europa"} element={<Europa data={data.destinations} />} />
              <Route path={"titan"} element={<Titan data={data.destinations} />} />
            </Route>
          </Routes>
        </MainTemplate>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
