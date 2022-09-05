import React from "react";
import styled from "styled-components";

const Img = styled.img`
    transform: translateY(17vmin);
`
const Section1 = styled.section `
    position: relative;
    top: 15%;
    display: flex; 
    flex-direction: column;
    width: 60%;
`

const Section2 = styled.section `
    display: flex;
    align-items: flex-end;
    width: 40%;
`
const WrappContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    height:55vh;
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
    color: #D0D6F9;
`

export const Persons = ({data, person}) =>{
    return(
        <WrappContent>
            <Section1>
                <Role>{data.role}</Role>
                <Name>{data.name}</Name>
                <Description>{data.bio}</Description>
            </Section1>
            <Section2>
                <Img src={person}/>
            </Section2>
        </WrappContent>
    )
}