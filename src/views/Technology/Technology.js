import React, {useEffect} from "react";
import TechnologyBg from 'assets/technology/background-technology-desktop.jpg'
import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { H1, H1grey, NaviSub, PageTitle, Section1, Section2, StyledLinkSub, Wrapp } from "views/Destination/Destination.style";
import styled from "styled-components";

const NaviWrapp = styled(Section2)`
    align-items: center;
    width: auto;
`
const NaviWrapp_v2 = styled.section`
    display: flex;
    align-items: center;
    padding-right: 3vw;
`

// OL
const Navi = styled(NaviSub)`
    flex-direction: column  ;
    align-items: center ;
    justify-content: center;
`
const Navi_v2 = styled.ol`
    padding: 0;
`

const Wrapp1 = styled(Wrapp)`
    display:flex;
    /* justify-content: space-between; */
    margin: 0px 0px 0px 10vw;
    /* width: 77%; */
`

const activeClassName = 'active';
const StyledDotLink = styled(NavLink).attrs({ activeClassName })`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid RGBA(255,255,255,0.25);
    margin: 12px;
    color: #FFFFFF;
    text-decoration: none ;

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
    }


    &:hover{
        border: 1px solid RGBA(255,255,255,1);
    }

`

const Technology = ({handleSetBackground, data}) =>{
    const navigate = useNavigate();

    useEffect(()=>{
        handleSetBackground(TechnologyBg)
        navigate("/technology/launch%20vehicle", { replace: true })
    },[])
    return(
        <>
           <PageTitle>
                    <H1grey>03</H1grey>
                    <H1>SPACE LAUNCH 101</H1>
            </PageTitle>
            <Wrapp1>
                <NaviWrapp_v2>
                    <Navi_v2>
                        {data.map((person, i)=>(
                            <StyledDotLink key={person.name} to={`/technology/${encodeURIComponent(person.name.toLowerCase())}`} > {i+1} </StyledDotLink>
                        ))}
                    </Navi_v2>
                </NaviWrapp_v2>
                <Outlet/>
            </Wrapp1>
            
                
            
        </>
    )
}

export default Technology