import React, {useEffect} from "react";
import TechnologyBg from 'assets/technology/background-technology-desktop.jpg'
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { H1, H1grey, NaviSub, PageTitle, Section1, Section2, StyledLinkSub, Wrapp } from "views/Destination/Destination.style";
import styled from "styled-components";

const NaviWrapp = styled(Section2)`
    align-items: center;
    width: auto;
`
const Navi = styled(NaviSub)`
    flex-direction: column ;
    align-items: center ;
    justify-content: center;
`
const Wrapp1 = styled(Wrapp)`
    display:flex;
    justify-content: space-between;
    margin: 0px 170px 0px 170px;
    width: 77%;
`

const activeClassName = 'active';
const StyledDotLink = styled(StyledLinkSub)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid #FFFFFF;
    margin: 12px;

    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;

    &:first-child{
        margin-left: 12px;
    }

    &.${activeClassName} {
        background-color: #fff;
        color: #000;
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

const Technology = ({handleSetBackground, data}) =>{
    const navigate = useNavigate();

    useEffect(()=>{
        handleSetBackground(TechnologyBg)
        // navigate("/crew/douglas%20hurley", { replace: true })
    },[])
    return(
        <>
           <PageTitle>
                    <H1grey>03</H1grey>
                    <H1>SPACE LAUNCH 101</H1>
            </PageTitle>
            <Wrapp1>
                <NaviWrapp>
                    <Navi>
                        {data.map((person, i)=>(
                            <StyledDotLink key={person.name} to={`/technology/${encodeURIComponent(person.name.toLowerCase())}`} > {i+1} </StyledDotLink>
                        ))}
                    </Navi>
                </NaviWrapp>
                <Outlet/>
            </Wrapp1>
            
                
            
        </>
    )
}

export default Technology