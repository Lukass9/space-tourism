import React from "react";
import styled from "styled-components";
import logo from "../../../assets/shared/logo.svg"

const Wrapp = styled.div `
    display: flex;
    flex-direction: row;
    align-items:flex-start;
    justify-content: space-between;
    width: 100%;
`
const Navi = styled.ol`
    display: flex;
    flex-direction: row;
    padding: 2.5vw 2vw;
    margin: 2.85vw 0;
    background-color: rgba(255, 255, 255, 0.04);
    color: ${({theme})=> theme.colors.white};
    font-size: 1vw;
    font-family: ${({theme})=> theme.fontFamily.barlowCondensed};
    letter-spacing: ${({theme})=> theme.letterSpacing.navText};
    list-style-type: none;
    counter-reset: navCounter;
    width: 58%;
    backdrop-filter: blur(41px);

    &::before{
        content:' ';
        position: absolute;
        transform: translateX(-98%) translateY(0.6vw);
        width: 57%;
        height: 1px;
        background-color: ${({theme})=> theme.colors.white};
        opacity: 0.25;
    }

    li{
        margin-left: 9%;

        &::before{
            counter-increment: navCounter;  
            content: "0"counter(navCounter) " ";
            font-weight: bold;
            margin-right: 0.2vw;
        }
        &:first-child{
            margin-left: 8vw;
            counter-set: navCounter -1;
        }
    }
`
const Logo = styled.img`   
    margin: 4.5vw;
    width: 3vw;
`
const Nav = () =>{
    return(
        <Wrapp>
            <Logo src={logo}/>
            <Navi>
                <li>HOME</li>
                <li>DESTINATION</li>
                <li>CREW</li>
                <li>TECHNOLOGY</li>
            </Navi>
        </Wrapp>
    )
}

export default Nav