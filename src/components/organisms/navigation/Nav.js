import React from "react";
import logo from "../../../assets/shared/logo.svg"
import { Logo, Navi, Wrapp } from "./Nav.style";

const Nav = () =>{
    return(
        <Wrapp>
            <Logo src={logo}/>
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