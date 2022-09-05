import React, {useEffect} from "react";
import DestinationBg from 'assets/destination/background-destination-desktop.jpg'
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { H1, H1grey, NaviSub, PageTitle, NaviWrapp, StyledLinkSub, } from "./Destination.style";

const Destination = ({handleSetBackground}) =>{
    const navigate = useNavigate();

    useEffect(()=>{
        handleSetBackground(DestinationBg)
        navigate("/destination/moon", { replace: true })
    },[])
    return(
        <>
            <PageTitle>
                    <H1grey>01</H1grey>
                    <H1>PICK YOUR DESTINATION</H1>
            </PageTitle>
            <NaviWrapp>
                <NaviSub>
                        <StyledLinkSub to="/destination/moon">MOON</StyledLinkSub>
                        <StyledLinkSub to="/destination/mars">MARS</StyledLinkSub>
                        <StyledLinkSub to="/destination/europa">EUROPA</StyledLinkSub>
                        <StyledLinkSub to="/destination/titan">TITAN</StyledLinkSub>
                </NaviSub>
            </NaviWrapp>
            <Outlet/>
        </>
    )
}

export default Destination