import React from "react";
import styled from "styled-components";

const Wrapp = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 100%;
`

const WrappArticle = styled.div ` 
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 60%;
    height: 100%;
`
const WrappText = styled.div ` 
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    width: 440px;
    color: ${({theme})=>theme.colors.lightBlue};
    transform: translateX(-24%) translateY(8%);
`
const WrappButton = styled.div ` 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 460px;
    transform: translateX(-2%) translateY(15%);
`
const ButtonExplore = styled.button` 
    width: 274px;
    height: 274px;
    background-color: ${({theme})=>theme.colors.white};
    border: none;
    border-radius: 50%;
    font-family: 'Bellefair';
    font-size: 32px;
`
const H1 = styled.h1 `
    font-family: ${({theme})=>theme.fontFamily.barlowCondensed};
    font-size: ${({theme})=>theme.fontSize.heading5};
    letter-spacing: 4.725px;
    font-weight: 400;
`
const H2 = styled.h2 ` 
    font-family: ${({theme})=>theme.fontFamily.bellefair};
    font-size: ${({theme})=>theme.fontSize.heading1};
    margin: 24px 0;
    font-weight: 400;
    color: ${({theme})=>theme.colors.white};
`
const P = styled.p `
    font-family: ${({theme})=>theme.fontFamily.barlow};
    font-size: 18px;
    line-height: 32px;
    font-weight: 400;
    text-align: justify;
`
const Home = () =>{
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