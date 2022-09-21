import React, {useEffect} from "react";
import desktop from 'assets/crew/background-crew-desktop.jpg'
import tablet from 'assets/crew/background-crew-tablet.jpg'
import mobile from 'assets/crew/background-crew-mobile.jpg'
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { H1, H1grey, PageTitle } from "views/Destination/Destination.style";
import { setBackground } from "helpers/hooks/setBackground";
import { WrappForMobile } from "./Crew.style";

const Crew = ({handleSetBackground}) =>{
    const navigate = useNavigate();

    useEffect(()=>{
        let background = setBackground(desktop, tablet, mobile)
        handleSetBackground(background)
        navigate("/space-tourism/crew/douglas%20hurley", { replace: true })
    },[])
    return(
        <WrappForMobile>
           <PageTitle>
                    <H1grey>02</H1grey>
                    <H1>MEET YOUR CREW</H1>
            </PageTitle>
                <Outlet/>
        </WrappForMobile>
    )
}

export default Crew