import React, {useEffect} from "react";
import styled from "styled-components";
import DestinationBg from 'assets/destination/background-destination-desktop.jpg'
import Moon from 'assets/destination/image-moon.png'
import { Navi, StyledLink } from "components/organisms/navigation/Nav.style";

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

const H1grey = styled(H1)` 
    opacity: 0.25;
    font-weight: 700;
    margin-right: 20px;
`
const Wrapp = styled.div ` 
    display: flex; 
    margin: 50px 170px 0 170px;
`

const Img = styled.img `
    margin-top: 5%;
    width: 47%;
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
const NaviSub = styled(Navi)`
    padding: 0;
    backdrop-filter: blur(0);
    background-color: transparent;
    color: ${({theme})=> theme.colors.lightBlue};
    &::before{
        content: none;
    }
`
const activeClassName = 'active';
const StyledLinkSub = styled(StyledLink)`
    margin-left: 35px;
    &:first-child{
            margin-left: 0;
        }
    &::before{
        content: none;
    }
    &:hover{
            &::after{
                bottom: -12px;
            }
        }
        &.${activeClassName} {
            &::after {
                bottom: -12px;
            }
        }
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
const Destination = ({handleSetBackground, data}) =>{
    useEffect(()=>{
        handleSetBackground(DestinationBg)
    },[])

    console.log(data[0])
    return(
        <>
            <Wrapp>
                <H1grey>01</H1grey>
                <H1>PICK YOUR DESTINATION</H1>
            </Wrapp>
            <WrappContent>
                <Img src={Moon}/>
                <WrappText>
                    <NaviSub>
                        <StyledLinkSub to="/destination/moon">MOON</StyledLinkSub>
                        <StyledLinkSub to="/destination/mars">MARS</StyledLinkSub>
                        <StyledLinkSub to="/destination/europa">EUROPA</StyledLinkSub>
                        <StyledLinkSub to="/destination/titan">TITAN</StyledLinkSub>
                    </NaviSub>
                    <TitleBig>{data[0].name.toUpperCase()}</TitleBig>
                    <Description>{data[0].description}</Description>
                    <WrappDetails>
                        <WrappDetailsInfo>
                            <Title>AVG. DISTANCE</Title>
                            <Information>{data[0].distance}</Information>
                        </WrappDetailsInfo>
                        <WrappDetailsInfo>
                            <Title>EST. TRAVEL TIME</Title>
                            <Information>{data[0].travel}</Information>
                        </WrappDetailsInfo>
                    </WrappDetails>
                </WrappText>
            </WrappContent>
        </>
    )
}

export default Destination