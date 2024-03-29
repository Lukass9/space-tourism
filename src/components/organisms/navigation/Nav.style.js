import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { device } from "assets/Styles/theme";


export const Wrapp = styled.div `
    position: static;
    display: flex;
    width: 100%;
    justify-content: space-between;
    /* overflow: hidden; */
    @media ${device.desktop}{
        flex-direction: row;
        align-items:center;
        margin-top: 1.5vw;
    }
`
export const Navi = styled.nav`
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 5;
    display: flex;
    /* align-self: flex-start; */
    flex-direction: column;
    counter-reset: navCounter;
    text-decoration: none;
    padding: 97px 0px 0px 30px;
    background: rgba(255, 255, 255, 0.04);
    font-size:  ${({theme})=> theme.fontSize.navText};
    font-weight: 400;
    font-family: ${({theme})=> theme.fontFamily.barlowCondensed};
    letter-spacing: ${({theme})=> theme.letterSpacing.navText};
    margin: 0;
    width: 67%;
    height: 100vh;
    backdrop-filter: blur(25px);
    /* padding: 36px 0px 36px 30px; */
    transform: ${props => props.hamburger ? "translateX(0%)" : "translateX(100%)"};
    transition: transform .5s .1s ease;

    @media ${device.tablet}{
        position: static;
        padding: 36px 0px; 
        flex-direction: row;
        backdrop-filter: blur(25px);
        height: auto;
        width: 58%;
        transform: translateX(0%);
    }

    @media ${device.desktop}{
        padding: 36px 30px; 
        margin-top: 14px;
        margin-bottom: 14px;

        &::before{
            content:' ';
            position: absolute;
            transform: translateY(900%) translateX(-98%) ;
            width: 57%;
            height: 1px;
            background-color: ${({theme})=> theme.colors.white};
            opacity: 0.25;
        }
    }
`
const activeClassName = 'active';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: ${({theme})=> theme.colors.white};
    line-height: 31px;
    margin-top: 29px;

    &::before{
        counter-increment: navCounter;  
        content: "0" counter(navCounter) " ";
        font-weight: bold;
        margin-right: 0.2vw;
    }
    &:first-child{
        counter-set: navCounter -1;
    }

    &.${activeClassName} {
        &::after {
            position: absolute;
            content: "";
            display: block;
            top: 0px;
            right: 0px;
            width: 4px;
            height: 100%;
            background-color: ${({theme})=> theme.colors.white};
            opacity: 1;
        }
    }

    @media ${device.tablet}{
        line-height: 17px;
        position: relative;
        font-size: 14px;
        /* margin-top: auto; */
        margin-left: 7%;
        margin-top: 0px;

        &::before{
        content: none;
        }

        &:first-child{
            margin-left: 7vw;
        }    

            &:hover{
                &::after{
                    position: absolute;
                    bottom: -36px;
                    content: "";
                    display: block;
                    width: 100%;
                    height: 3px;
                    background-color: ${({theme})=> theme.colors.white};
                    opacity: 0.5;
                }
            }
            &.${activeClassName} {
                &::after {
                    position: absolute;
                    top: auto;
                    /* right: 0px; */
                    bottom: -36px;
                    content: "";
                    display: block;
                    width: 100%;
                    height: 3px;
                    background-color: ${({theme})=> theme.colors.white};
                    opacity: 1;
                }
            }
    }

    @media ${device.desktop}{
        margin-top: auto;
        font-size: 16px;

        

        &::before{
            content: "0" counter(navCounter) " ";
        }
    }
`

export const Logo = styled.img`
    margin-top: 24px;
    margin-left:    24px;
    width: 40px;
    height: 40px;

    @media ${device.desktop}{
        margin-top: 0;
        margin-left: 4.5vw;
        width: 48px;
        height: 48px;
    }
`