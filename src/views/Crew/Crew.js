import React, {useEffect} from "react";
import DestinationBg from 'assets/crew/background-crew-desktop.jpg'
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { H1, H1grey, NaviSub, Section1, Section2, StyledLinkSub, Wrapp } from "views/Destination/Destination.style";

const Crew = ({handleSetBackground, data}) =>{
    const navigate = useNavigate();

    useEffect(()=>{
        handleSetBackground(DestinationBg)
        // navigate("/destination/moon", { replace: true })
    },[])
    return(
        <>
            <Wrapp>
                <Section1>
                    <H1grey>02</H1grey>
                    <H1>MEET YOUR CREW</H1>
                </Section1>
            </Wrapp>
            <Outlet/>
            <Wrapp>
                <Section2>
                        <NaviSub>
                            {data.map(person =>(
                                <StyledLinkSub key={person.name} to={`/crew/${person.name.toLowerCase()}`} >{person.name}</StyledLinkSub>
                            ))}
                        </NaviSub>
                </Section2>
            </Wrapp>
        </>
    )
}

export default Crew