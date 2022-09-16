import { device } from "assets/Styles/theme";
import React from "react";
import styled from "styled-components";
import { NaviSub, StyledLinkSub } from "views/Destination/Destination.style";

const Img = styled.img`
    max-height: 100%;

    @media ${device.desktop}{
        max-height: 120%;
    }
`
const Section1 = styled.section`
    /* position: relative;
    top: 15%; */
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    /* min-height: 600px; */
    /* height: 100%;     */
    @media ${device.desktop}{
       align-items: flex-start;
        width: 43%;
    }
`

const Section2 = styled.section `
    display: flex;
    justify-content: center ;
    align-items: flex-end;
    height: 223px;
    width: 85%;
    order:-1;
    border-bottom: 1px solid #383B4B;
    margin-bottom: 20px;

    @media ${device.desktop}{
        order:1;
        height: 69vh;
        width: 32%;
        align-items: flex-end;
        border-bottom: none;
        margin-bottom: auto;
    }
`
const WrappContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center ;
    flex-direction: column;
    width: 100%;

    @media ${device .desktop}{
        flex-direction: row;
        height: 81.9%;
    }
`
const Role = styled.h1`
    font-family: 'Bellefair';
    font-weight: 400;
    font-size: 16px;
    text-transform: uppercase;
    color: #FFFFFF;
    opacity: 0.5;

    @media ${device.desktop}{
        font-size: 32px;
    }
`
const Name = styled.h1`
    margin: 0;
    padding: 0;
    /* width: 550px; */
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    text-transform: uppercase;
    color: #FFFFFF;

    @media ${device.desktop}{
        font-size: 56px;
    }
`
const Description = styled.h1`
    margin-top: 8%;
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    max-width: 442px;
    min-height: 160px;
    color: #D0D6F9;
    width: 85%;
    text-align: center;

    @media ${device.desktop}{
        font-size: 18px;
        width: auto;
        text-align: left;
        line-height: 32px;
    }
`
const Navi = styled(NaviSub)` 
    margin: 0;
    transform:translateY(0);
    width: auto;
    order: -1;

    @media ${device.desktop}{
        order: 1;
    }
`
const activeClassName = 'active';
const StyledDotLink = styled(StyledLinkSub)` 
    width: 10px;
    height: 10px;
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

    @media ${device.desktop}{
        width: 13px;
        height: 13px;
    }

`

export const Persons = ({crewName, data, person}) =>{
    return(
        <WrappContent>
            <Section1>
                <Role>{data.role}</Role>
                <Name>{data.name}</Name>
                <Description>{data.bio}</Description>
                <Navi>
                    {crewName.map(crew =>(
                        <StyledDotLink key={crew.name} to={`/crew/${encodeURIComponent(crew.name.toLowerCase())}`} > </StyledDotLink>
                    ))}
                </Navi>
            </Section1>
            <Section2>
                <Img src={person}/>
            </Section2>
        </WrappContent>
    )
}