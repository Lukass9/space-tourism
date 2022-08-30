import React from "react";
import styled from "styled-components";
import MoonJPG from 'assets/destination/image-moon.png'

const H1 = styled.h1`
    color: white;
    font-family: 'Barlow Condensed';
    font-size: 28px;
    font-weight: 400;
    letter-spacing: 4.725px;
`

const TitleBig = styled.h1 ` 
    color: white;
    font-family: 'Bellefair';
    font-size: 100px;
    font-weight: 400;
    margin: 37px 0;
`

const Img = styled.img `
    margin-top: 5%;
    /* width: 47%; */
`
const WrappContent = styled.div ` 
    display: flex;
    flex-direction: row ;
    padding: 2% 17%;
`
const WrappText = styled.div ` 
    margin-left: 12vw;
`
const WrappNav = styled.div ` 
    margin: 0;
`
const Description = styled.p`  
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #D0D6F9;
    width: 444px;
`

const WrappDetails = styled.div ` 
    border-top: 1px solid  #383B4B;
    margin-top: 12%;
    display: flex;
    flex-direction: row;
    width: 100%;
`
const WrappDetailsInfo = styled.div` 
    display: flex;
    flex-direction: column;
    width: 50%;
`

const Title = styled.p `
    font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 2.3625px;
    color: #D0D6F9;
    margin: 30px 0 10px 0;
`
const Information = styled.p `
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin: 0;
`

const Section1 = styled.section ` 
    display: flex; 
    width: 47vw;
`

const Section2 = styled.section `
    display: flex;
    align-items: flex-end;
    width: 53vw;
`
export const Titan = ({data}) =>{
    return(
        <WrappContent>
            <Section1>
                <Img src={MoonJPG}/>
            </Section1>
            <Section2>
                <WrappText>
                    <TitleBig>{data[3].name.toUpperCase()}</TitleBig>
                    <Description>{data[3].description}</Description>
                    <WrappDetails>
                        <WrappDetailsInfo>
                            <Title>AVG. DISTANCE</Title>
                            <Information>{data[3].distance}</Information>
                        </WrappDetailsInfo>
                        <WrappDetailsInfo>
                            <Title>EST. TRAVEL TIME</Title>
                            <Information>{data[3].travel}</Information>
                        </WrappDetailsInfo>
                    </WrappDetails>
                </WrappText>
            </Section2>
        </WrappContent>
    )
}