import Nav from "components/organisms/navigation/Nav";
import React from "react";
import { Wrapp } from "./MainTemplate.style";

const MainTemplate = ({children}) =>{
    return(
        <Wrapp>
            <Nav/>
            {children}
        </Wrapp>
    )
}

export default MainTemplate