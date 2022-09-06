import { GlobalStyle } from 'assets/Styles/GlobalStyle';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {theme} from '../assets/Styles/theme'
import MainTemplate from 'components/tempates/MainTemplate/MainTemplate';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Destination from './Destination/Destination';
import data from 'assets/data'
import MoonPic from 'assets/destination/image-moon.png'
import MarsPic from 'assets/destination/image-mars.png'
import EuropaPic from 'assets/destination/image-europa.png'
import TitanPic from 'assets/destination/image-titan.png'
import { Planets } from './Destination/Planets';
import Crew from './Crew/Crew';
import { Persons } from './Crew/Persons';
import DouglasPic from 'assets/crew/image-douglas-hurley.png'
import MarkPic from 'assets/crew/image-mark-shuttleworth.png'
import VictorPic from 'assets/crew/image-victor-glover.png'
import AnoushehPic from 'assets/crew/image-anousheh-ansari.png'

const App = () => {
  const planets = [MoonPic,MarsPic,EuropaPic,TitanPic]
  const persons = [DouglasPic, MarkPic, VictorPic, AnoushehPic]
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
              {data.destinations.map((destination, i) => (
                <Route key={destination.name} path={destination.name.toLowerCase()} element={<Planets planet={planets[i]} data={destination}/>} />
              ))}
            </Route>
            <Route path={"/crew"} element={<Crew handleSetBackground={handleSetBackground} data={data.crew}/>}>
              {data.crew.map((crew, i) => (
                <Route key={crew.name} path={encodeURIComponent(crew.name)} element={<Persons person={persons[i]} data={crew}/>} />
              ))}
            </Route>
          </Routes>
        </MainTemplate>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;