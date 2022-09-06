import React, {useEffect} from "react";
import DestinationBg from 'assets/crew/background-crew-desktop.jpg'
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { H1, H1grey, NaviSub, PageTitle, Section1, Section2, StyledLinkSub, Wrapp } from "views/Destination/Destination.style";
import styled from "styled-components";

const Navi = styled(NaviSub)` 
    margin: 0;
    transform:translateY(0);
`
const Wrapp1 = styled(Wrapp)`
    display:flex;
    justify-content: space-between;
    margin: 0px 170px 0px 170px;
    width: 77%;
`

const activeClassName = 'active';
const StyledDotLink = styled(StyledLinkSub)` 
    width: 13px;
    height: 13px;
    background-color: #FFF;
    border-radius: 50%;
    margin: 12px ;
    opacity: 0.5;

    &.${activeClassName} {
        opacity: 1;
        &::after{
            content: none;
        }
    }

    &:hover{
        opacity: 1;
        
        &::after{
            content: none;
        }
    }

`

const Crew = ({handleSetBackground, data}) =>{
    const navigate = useNavigate();

    useEffect(()=>{
        handleSetBackground(DestinationBg)
        navigate("/crew/douglas%20hurley", { replace: true })
    },[])
    return(
        <>
           <PageTitle>
                    <H1grey>02</H1grey>
                    <H1>MEET YOUR CREW</H1>
            </PageTitle>
            <Wrapp1>
                <Outlet/>
            </Wrapp1>
            <Wrapp1>
                <Section2>
                    <Navi>
                        {data.map(person =>(
                            <StyledDotLink key={person.name} to={`/crew/${encodeURIComponent(person.name.toLowerCase())}`} > </StyledDotLink>
                        ))}
                    </Navi>
                </Section2>
            </Wrapp1>
        </>
    )
}

export default Crew