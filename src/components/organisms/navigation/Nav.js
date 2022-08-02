import React from "react";
import logo from "../../../assets/shared/logo.svg"
import { Logo, Navi, Wrapp, StyledLink } from "./Nav.style";

const Nav = () =>{
    return(
        <Wrapp>
            <Logo src={logo}/>
            <Navi>
                <StyledLink  to="/">HOME</StyledLink>
                <StyledLink  to="/destination">DESTINATION</StyledLink>
                <li>CREW</li>
                <li>TECHNOLOGY</li>
            </Navi>
        </Wrapp>
    )
}

export default Nav