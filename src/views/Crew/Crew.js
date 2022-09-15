import React, {useEffect} from "react";
import DestinationBg from 'assets/crew/background-crew-desktop.jpg'
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { H1, H1grey, NaviSub, PageTitle, Section1, Section2, StyledLinkSub, Wrapp } from "views/Destination/Destination.style";
import styled from "styled-components";
import { device } from "assets/Styles/theme";

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
    opacity: 0.17;

    &.${activeClassName} {
        opacity: 1;
        &::after{
            content: none;
        }
    }

    &:hover{
        opacity: 0.5;
        
        &::after{
            content: none;
        }
    }

`
const WrappForMobile = styled.div` 
    display: flex;
    flex-direction: column;
    width: 100vw;
    height:100%;
    overflow-y: scroll;
    align-items: center;

    @media ${device.desktop}{
        overflow: hidden;
    }
`

const Crew = ({handleSetBackground, data}) =>{
    const navigate = useNavigate();

    useEffect(()=>{
        handleSetBackground(DestinationBg)
        navigate("/crew/douglas%20hurley", { replace: true })
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