import React from "react";
import logo from "../../../assets/shared/logo.svg"
import { Logo, Navi, Wrapp, StyledLink } from "./Nav.style";
import Home from '../../../assets/home/background-home-desktop.jpg'
import Destination from '../../../assets/destination/background-destination-desktop.jpg'
import Crew from '../../../assets/crew/background-crew-desktop.jpg'
import Technology from '../../../assets/technology/background-technology-desktop.jpg'

const Nav = ({handleSetBackground}) =>{
    return(
        <Wrapp>
            <Logo src={logo}/>
            <Navi>
                <StyledLink onClick={()=> handleSetBackground(Home)} to="/">HOME</StyledLink>
                <StyledLink onClick={()=> handleSetBackground(Destination)} to="/destination">DESTINATION</StyledLink>
                <StyledLink onClick={()=> handleSetBackground(Crew)} to="/crew">CREW</StyledLink>
                <StyledLink onClick={()=> handleSetBackground(Technology)} to="/technology">TECHNOLOGY</StyledLink>
            </Navi>
        </Wrapp>
    )
}

export default Nav