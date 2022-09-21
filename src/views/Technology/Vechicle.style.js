import { device } from "assets/Styles/theme";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Img = styled.img`
    width: 100.6%;
`
export const Section1 = styled.section`
    display: flex; 
    flex-direction: row;
    width: 76.73%;
    overflow-wrap: anywhere;
    hyphens: none;
    flex-direction: column;
    align-items: center;

    @media ${device.desktop}{
        flex-direction: row;
        align-items: flex-start;
        position: relative;
        top: 15%;
        left: 11%;
        width: 70%;
    }
`

export const Section2 = styled.section `
    order: -1;
    @media ${device.desktop}{
        order: 1;
    }
`
export const WrappContent = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between ;
    flex-direction: column;
    width: 100%;

    @media ${device.tablet} {
        height: 100%;
        justify-content: space-evenly;
    }

    @media ${device.desktop} {
        flex-direction: row;
        height: auto;
        justify-content: space-between;
        align-items: flex-start;
    }
`
export const Role = styled.h1`
    font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 2.7px;
    color: #D0D6F9;

    @media ${device.tablet}{
        font-size: 16px;
    }
`
export const Name = styled.h1`
    margin: 0;
    padding: 0;
    /* width: 550px; */
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    text-transform: uppercase;
    color: #FFFFFF;

    @media ${device.desktop}{
        font-size: 40px;
    }
    @media ${device.desktop}{
        font-size: 56px;
    }
`
export const Description = styled.h1`
    margin-top: 17px;
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    color: #D0D6F9;
    text-align: center;
    width: 288px;//327px;
    overflow-wrap: break-word;
    
    @media ${device.tablet}{
        font-size: 16px;
        width: 458px;
        line-height: 28px;
    }
    @media ${device.desktop}{
        font-size: 18px;
        width: 444px;
        text-align: left;
        line-height: 32px;
    }
`

export const activeClassName = 'active';
export const StyledDotLink = styled(NavLink).attrs({ activeClassName })`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid RGBA(255,255,255,0.25);
    margin: 12px;
    color: #FFFFFF;
    text-decoration: none ;

    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    &:first-child{
        margin-left: 12px;
    }

    &.${activeClassName} {
        background-color: #fff;
        color: #000;
    }


    &:hover{
        border: 1px solid RGBA(255,255,255,1);
    }

    @media ${device.tablet}{
        width: 58px;
        height: 58px;
        font-size: 24px;
    }

    @media ${device.desktop}{
        width: 80px;
        height: 80px;
        font-size: 32px;
    }

`
// OL
// export const Navi = styled(NaviSub)`
//     flex-direction: column  ;
//     align-items: center ;
//     justify-content: center;
// `
export const Navi_v2 = styled.nav`
    display: flex;
    padding: 0;
    flex-direction: row;

    @media ${device.desktop}{
        flex-direction: column;
    }
`
export const NaviWrapp_v2 = styled.section`
    display: flex;
    align-items: flex-start;
    padding-right: 3vw;
`

export const WrappText = styled.article` 
    display: flex; 
    flex-direction: column;
    align-items: center;

    @media ${device.desktop}{
        align-items: flex-start;
    }
`