import Menu from "components/atoms/Menu";
import React, {forwardRef} from "react";
import logo from "../../../assets/shared/logo.svg"
import { Logo, Navi, Wrapp, StyledLink } from "./Nav.style";

const Nav =  forwardRef(({hamburger,handleToggleMenu}, ref) =>{

    return(
        <Wrapp>
            {window.matchMedia('(max-width: 767px)').matches ? 
                <Menu hamburger={hamburger} handleActiveMenu={handleToggleMenu} /> : 
                null}
            <Logo src={logo} alt="Logo"/>
            <Navi ref={ref} hamburger={hamburger}>
                <StyledLink to="space-tourism/">HOME</StyledLink>
                <StyledLink to="space-tourism/destination">DESTINATION</StyledLink>
                <StyledLink to="space-tourism/crew">CREW</StyledLink>
                <StyledLink to="space-tourism/technology">TECHNOLOGY</StyledLink>
            </Navi>
        </Wrapp>
    )
})
export default Nav