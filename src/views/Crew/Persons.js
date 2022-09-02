import React from "react";
import styled from "styled-components";

const Img = styled.img`
    transform: translateY(15vmin);
`
const Section1 = styled.section ` 
    display: flex; 
    flex-direction: column;
    width: 40%;
`

const Section2 = styled.section `
    display: flex;
    align-items: flex-end;
    width: 45%;
`
const WrappContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    height:55vh;
`
const Role = styled.h1`
`
const Name = styled.h1`
`
const Description = styled.h1`
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