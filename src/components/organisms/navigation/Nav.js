import React from "react";
import logo from "../../../assets/shared/logo.svg"
import { Logo, Navi, Wrapp, StyledLink } from "./Nav.style";

const Nav = () =>{
    return(
        <Wrapp>
            <Logo src={logo}/>
            <Navi>
                <StyledLink to="/">HOME</StyledLink>
                <StyledLink to="/destination">DESTINATION</StyledLink>
                <StyledLink to="/crew">CREW</StyledLink>
                <StyledLink to="/technology">TECHNOLOGY</StyledLink>
            </Navi>
        </Wrapp>
    )
}

export default Nav