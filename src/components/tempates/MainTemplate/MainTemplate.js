import Nav from "components/organisms/navigation/Nav";
import React, { useState } from "react";
import { Wrapp } from "./MainTemplate.style";
import Home from '../../../assets/home/background-home-desktop.jpg'

const MainTemplate = ({children}) =>{
    const [background, setBackground] = useState(Home)
    const handleSetBackground = (bck) =>{
        setBackground(bck)
    }
    return(
        <Wrapp bck={background}>
            <Nav handleSetBackground={handleSetBackground}/>
            {children}
        </Wrapp>
    )
}

export default MainTemplate