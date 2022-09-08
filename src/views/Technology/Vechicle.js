import React from "react";
import styled from "styled-components";

const Img = styled.img`

`
const Section1 = styled.section`
    position: relative;
    top: 15%;
    display: flex; 
    flex-direction: column;
    /* width: 470px; */
`

const Section2 = styled.section `
 
`
const WrappContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between ;
    flex-direction: row;
`
const Role = styled.h1`
    font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 2.7px;
    color: #D0D6F9;
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
    margin-top: 17px;
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #D0D6F9;
    width: 70%;
`

export const Vechicle = ({data, vechicle}) =>{
    return(
        <WrappContent>
            <Section1>
                <Role>THE TERMINOLOGY…</Role>
                <Name>{data.name}</Name>
                <Description>{data.description}</Description>
            </Section1>
            <Section2>
                <Img src={vechicle}/>
            </Section2>
        </WrappContent>
    )
}