import Menu from "components/atoms/Menu";
import React, {useState} from "react";
import logo from "../../../assets/shared/logo.svg"
import { Logo, Navi, Wrapp, StyledLink } from "./Nav.style";



const Nav = () =>{
    const [hamburger, setHamburger] = useState(false)

    const handleActiveMenu = () =>{
        setHamburger(!hamburger)
    }

    return(
        <Wrapp>
            {window.matchMedia('(max-width: 767px)').matches ? 
                <Menu hamburger={hamburger} handleActiveMenu={handleActiveMenu} /> : 
                null}
            <Logo src={logo}/>
            <Navi hamburger={hamburger}>
                <StyledLink to="/">HOME</StyledLink>
                <StyledLink to="/destination">DESTINATION</StyledLink>
                <StyledLink to="crew">CREW</StyledLink>
                <StyledLink to="/technology">TECHNOLOGY</StyledLink>
            </Navi>
        </Wrapp>
    )
}

export default Nav