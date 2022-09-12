import React from "react";
import styled from "styled-components";

const WrappLikeButton = styled.button`
    position: absolute;
    top: 35px;
    right: 24px;
    border: none;
    padding: 6px 0px;
    z-index: 10;
    cursor: pointer;
    background-color: transparent;
`
const HamburgerMenu = styled.div` 
    width:  24px;
    height: 3px;
    background-color: ${props => props.hamburger ? "transparent" : "#D0D6F9"};
    transition: background-color .1s .2s ease;

    
    &::before, &::after{
        content: ' ';
        display: block;
        width:  24px;
        height: 3px;
        background-color: #D0D6F9;
        transform: ${props => props.hamburger ? " translateY(0px) rotate(45deg)" :  " translateY(-9px)"}; 
        transition: transform .3s .1s ease-in;
    }
    &::after{
        transform: ${props => props.hamburger ? " translateY(-3px) rotate(-45deg)" :  " translateY(6px)"};
    }
`

const Menu = ({handleActiveMenu, hamburger}) =>{
    return(
        <WrappLikeButton onClick={handleActiveMenu}>
            <HamburgerMenu hamburger={hamburger}/>
        </WrappLikeButton>
    )
}

export default Menu