import React from "react";
import styled from "styled-components";
import { NaviSub, StyledLinkSub } from "views/Destination/Destination.style";

const Img = styled.img`
    /* min-height: 600px; */
`
const Section1 = styled.section`
    /* position: relative;
    top: 15%; */
    justify-content: center;
    display: flex; 
    flex-direction: column;
    width: 43%;
    /* min-height: 600px; */
    /* height: 100%;     */
`

const Section2 = styled.section `
    display: flex;
    justify-content: center ;
    align-items: flex-end;
    height: 69vh;
    width: 32%;
`
const WrappContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 81.9%;
`
const Role = styled.h1`
    font-family: 'Bellefair';
    font-weight: 400;
    font-size: 32px;
    text-transform: uppercase;
    color: #FFFFFF;
    opacity: 0.5;
`
const Name = styled.h1`
    margin: 0;
    padding: 0;
    /* width: 550px; */
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    text-transform: uppercase;
    color: #FFFFFF;
`
const Description = styled.h1`
    margin-top: 8%;
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    max-width: 442px;
    min-height: 160px;
    color: #D0D6F9;
`
const Navi = styled(NaviSub)` 
    margin: 0;
    transform:translateY(0);
    width: auto;
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