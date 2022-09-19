import React, {useEffect} from "react";
import TechnologyBg from 'assets/technology/background-technology-desktop.jpg'
import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { H1, H1grey, NaviSub, PageTitle, Section1, Section2, StyledLinkSub, Wrapp } from "views/Destination/Destination.style";
import styled from "styled-components";
import { device } from "assets/Styles/theme";

export const NaviWrapp = styled(Section2)`
    align-items: center;
    width: auto;
`

export const Wrapp1 = styled(Wrapp)`
    display:flex;
    margin: 0px 0px 0px 10vw;
`
export const WrappForMobile = styled.div` 
    display: flex;
    flex-direction: column;
    width: 100vw;
    height:100%;
    overflow: hidden;
    align-items: center;

    @media ${device.desktop}{
        overflow: hidden;
    }
`