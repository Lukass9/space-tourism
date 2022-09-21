import React, {useEffect} from "react";
import TechnologyBg from 'assets/technology/background-technology-desktop.jpg'
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { H1, H1grey, PageTitle } from "views/Destination/Destination.style";
import { WrappForMobile } from "./Technology.style";

const Technology = ({handleSetBackground}) =>{
    const navigate = useNavigate();

    useEffect(()=>{
        handleSetBackground(TechnologyBg)
        navigate("/space-tourism/technology/launch%20vehicle", { replace: true })
    },[])
    return(
        <WrappForMobile>
           <PageTitle>
                    <H1grey>03</H1grey>
                    <H1>SPACE LAUNCH 101</H1>
            </PageTitle> 
            <Outlet/>
        </WrappForMobile>
    )
}

export default Technology