import Nav from "components/organisms/navigation/Nav";
import React, { useEffect, useRef, useState } from "react";
import { Wrapp } from "./MainTemplate.style";

const MainTemplate = ({children, background}) =>{
    const [hamburger, setHamburger] = useState(false)
    const NavRef = useRef(null);
    
    const handleToggleMenu = () =>{
        setHamburger(!hamburger)
    }

    const handleCloseMenu = (e) =>{
       if(!NavRef.current.contains(e.target) && hamburger){
            setHamburger(false)
       }
    }

    return(
        <Wrapp bck={background} onClick={handleCloseMenu}>
            <Nav ref={NavRef} 
                hamburger={hamburger} 
                handleToggleMenu={handleToggleMenu}
            /> 
            {children}
        </Wrapp>
    )
}

export default MainTemplate