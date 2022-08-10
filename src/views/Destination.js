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
    margin-top: 37px;
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

const Destination = ({handleSetBackground, data}) =>{
    useEffect(()=>{
        handleSetBackground(DestinationBg)
    },[])
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
                    <TitleBig>MOON</TitleBig>
                </WrappText>
            </WrappContent>
        </>
    )
}

export default Destination