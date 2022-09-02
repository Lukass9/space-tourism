import React, {useEffect} from "react";
import DestinationBg from 'assets/crew/background-crew-desktop.jpg'
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { H1, H1grey, NaviSub, Section1, Section2, StyledLinkSub, Wrapp } from "views/Destination/Destination.style";
import styled from "styled-components";

const Navi = styled(NaviSub)` 
    margin: 0;
    transform:translateY(0);
`
const Wrapp1 = styled(Wrapp)` 
    margin: 0px 170px 0px 170px;
`

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
            <Wrapp1>
                <Outlet/>
            </Wrapp1>
            <Wrapp1>
                <Section2>
                    <Navi>
                        {data.map(person =>(
                            <StyledLinkSub key={person.name} to={`/crew/${person.name.toLowerCase()}`} >{person.name}</StyledLinkSub>
                        ))}
                    </Navi>
                </Section2>
            </Wrapp1>
        </>
    )
}

export default Crew