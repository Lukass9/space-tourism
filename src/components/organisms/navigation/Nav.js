import React from "react";
import styled from "styled-components";

const Wrapp = styled.div `
    display: flex;
    flex-direction: column;
    align-items:flex-end ;
    width: 100%;
`
const Navi = styled.ol`
    display: flex;
    flex-direction: row;
    padding: 45px 20px;
    margin: 60px 0;
    background-color: rgba(255, 255, 255, 0.04);
    color: ${({theme})=> theme.colors.white};
    font-size: ${({theme})=> theme.fontSize.navText};
    font-family: ${({theme})=> theme.fontFamily.barlowCondensed};
    letter-spacing: ${({theme})=> theme.letterSpacing.navText};
    list-style-type: none;
    counter-reset: navCounter;
    width: 58%;
    backdrop-filter: blur(41px);

    &::before{
        content:' ';
        position: absolute;
        transform: translateX(-95%) translateY(10px);
        width: 50%;
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
        }
        &:first-child{
            margin-left: 16%;
            counter-set: navCounter -1;
        }

    }
`

const Nav = () =>{
    return(
        <Wrapp>
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