import React, { useEffect } from "react";
import styled from "styled-components";
import HomeBgDesktop from 'assets/home/background-home-desktop.jpg'
import HomeBgTablet from 'assets/home/background-home-tablet.jpg'
import HomeBgSmartphone from 'assets/home/background-home-mobile.jpg'
import { device } from "assets/Styles/theme";
import { setBackground } from "helpers/hooks/setBackground";

const Wrapp = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    
    @media ${device.desktop}{
        overflow-y: hidden;
        flex-direction: row;
        align-items: stretch;
        justify-content: center;
    }
`

const WrappArticle = styled.div ` 
    display: flex;
    flex-direction: row;
    @media ${device.desktop}{
        width: 60%;
        height: 100%;
        justify-content: center;
    }
`
const WrappText = styled.div ` 
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({theme})=>theme.colors.lightBlue};
    
    @media ${device.desktop}{
        width: 440px;
        transform: translateX(-24%) translateY(8%);
        justify-content: center;
        align-items: stretch;
    }
`
const WrappButton = styled.div ` 
    display: flex;
    justify-content: center;
    align-items: center;
    

    @media ${device.desktop}{
        width: 460px;
        transform: translateX(-2%) translateY(15%);
    }
`
const ButtonExplore = styled.button` 
    width: 150px;
    height: 150px;
    background-color: ${({theme})=>theme.colors.white};
    border: none;
    border-radius: 50%;
    font-family: 'Bellefair';
    font-size: 20px;
    
    @media ${device.desktop}{
        width: 274px;
        height: 274px;
        font-size: 32px;
    }
`
const H1 = styled.h1 `
    font-family: ${({theme})=>theme.fontFamily.barlowCondensed};
    font-size: 16px;
    letter-spacing: 2.7px;
    font-weight: 400;

    @media ${device.desktop}{
        font-size: ${({theme})=>theme.fontSize.heading5};
        letter-spacing: 4.725px;
    }
`
const H2 = styled.h2 ` 
    font-family: ${({theme})=>theme.fontFamily.bellefair};
    font-size: 80px;
    margin: 24px 0;
    font-weight: 400;
    color: ${({theme})=>theme.colors.white};

    @media ${device.desktop}{
        font-size: ${({theme})=>theme.fontSize.heading1};
    }
`
const P = styled.p `
    font-family: ${({theme})=>theme.fontFamily.barlow};
    font-size: 15px;
    line-height: 25px;
    font-weight: 400;
    text-align: center;
    width: 89%;

    @media ${device.desktop}{
        font-size: 18px;
        line-height: 32px;
        text-align: justify;
        width: auto;
    }
`
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
            <WrappButton>
                <ButtonExplore>EXPLORE</ButtonExplore>
            </WrappButton>
        </Wrapp>
    )
}

export default Home