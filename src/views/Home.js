import React, { useEffect } from "react";
import HomeBgDesktop from 'assets/home/background-home-desktop.jpg'
import HomeBgTablet from 'assets/home/background-home-tablet.jpg'
import HomeBgSmartphone from 'assets/home/background-home-mobile.jpg'
import { setBackground } from "helpers/hooks/setBackground";
import { H1, H2, P, Wrapp, WrappArticle, WrappText, WrappButton, ButtonExplore } from "./Home.style";

const Home = ({handleSetBackground}) =>{
    
    useEffect(()=>{
        let background = setBackground(HomeBgDesktop, HomeBgTablet, HomeBgSmartphone)
        handleSetBackground(background)
    },[])
    return(
        <Wrapp>
            <WrappArticle>
                <WrappText>
                    <H1>SO, YOU WANT TO TRAVEL TO</H1>
                    <H2>SPACE</H2>
                    <P>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</P>
                </WrappText>
            </WrappArticle>
            <WrappButton to="/space-tourism/destination">
                <ButtonExplore >EXPLORE</ButtonExplore>
            </WrappButton>
        </Wrapp>
    )
}

export default Home