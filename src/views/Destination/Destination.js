import React, {useEffect} from "react";
import desktop from 'assets/destination/background-destination-desktop.jpg'
import tablet from 'assets/destination/background-destination-tablet.jpg'
import mobile from 'assets/destination/background-destination-mobile.jpg'
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { H1, H1grey, PageTitle, WrappForMobile, } from "./Destination.style";
import { setBackground } from "helpers/hooks/setBackground";

const Destination = ({handleSetBackground}) =>{
    const navigate = useNavigate();

    useEffect(()=>{
        let background = setBackground(desktop, tablet, mobile)
        handleSetBackground(background)
        navigate("/space-tourism/destination/moon", { replace: true })
    },[])
    return(
        <WrappForMobile>
            <PageTitle>
                    <H1grey>01</H1grey>
                    <H1>PICK YOUR DESTINATION</H1>
            </PageTitle>
            <Outlet/>
        </WrappForMobile>
    )
}

export default Destination