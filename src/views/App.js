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
import Technology from './Technology/Technology';
import LunchPicPortein from "assets/technology/image-launch-vehicle-portrait.jpg"
import SpaceRaportPicPortein from "assets/technology/image-spaceport-portrait.jpg"
import SpaceportPicPortein from "assets/technology/image-space-capsule-portrait.jpg"
import LunchPicLandscape from "assets/technology/image-launch-vehicle-landscape.jpg"
import SpaceRaportPicLandscape from "assets/technology/image-spaceport-landscape.jpg"
import SpaceportPicLandscape from "assets/technology/image-space-capsule-landscape.jpg"
import { Vechicle } from './Technology/Vechicle';

const App = () => {
  const planets = [MoonPic,MarsPic,EuropaPic,TitanPic]
  const persons = [DouglasPic, MarkPic, VictorPic, AnoushehPic]
  let vechicle;
  const vechicle_landspace =[LunchPicLandscape, SpaceRaportPicLandscape, SpaceportPicLandscape]
  const vechicle_portrait = [LunchPicPortein, SpaceRaportPicPortein, SpaceportPicPortein]
  const [background, setBackground] = useState('')
  const handleSetBackground = (bck) =>{
      setBackground(bck)
  }

  vechicle = window.matchMedia('(min-width: 1440px)').matches ? vechicle_portrait : vechicle_landspace

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <MainTemplate background={background}>
          <Routes>
            <Route exact path={"/space-tourism"}  element={<Home handleSetBackground={handleSetBackground}/>}/>
            <Route exact path={"/space-tourism/destination"} element={<Destination handleSetBackground={handleSetBackground}/>}>
              {data.destinations.map((destination, i) => (
                <Route key={destination.name} path={destination.name.toLowerCase()} element={<Planets planet={planets[i]} data={destination}/>} />
              ))}
            </Route>
            <Route exact path={"/space-tourism/crew"} element={<Crew handleSetBackground={handleSetBackground} />}>
              {data.crew.map((crew, i) => (
                <Route key={crew.name} path={encodeURIComponent(crew.name)} element={<Persons person={persons[i]} data={crew} crewName={data.crew}/>} />
              ))}
            </Route>
            <Route exact path={"/space-tourism/technology"} element={<Technology handleSetBackground={handleSetBackground} />}>
              {data.technology.map((technology, i) => (
                <Route key={technology.name} path={encodeURIComponent(technology.name)} element={<Vechicle vechicle={vechicle[i]} data={technology} technologyName={data.technology}/>} />
              ))}
            </Route>
          </Routes>
        </MainTemplate>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;