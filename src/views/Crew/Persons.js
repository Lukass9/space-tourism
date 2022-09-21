import React from "react";
import { Description, Img, Name, Navi, Role, Section1, Section2, StyledDotLink, WrappContent } from "./Persons.style";

export const Persons = ({crewName, data, person}) =>{
    return(
        <WrappContent>
            <Section1>
                <Role>{data.role}</Role>
                <Name>{data.name}</Name>
                <Description>{data.bio}</Description>
                <Navi>
                    {crewName.map(crew =>(
                        <StyledDotLink key={crew.name} to={`/space-tourism/crew/${encodeURIComponent(crew.name.toLowerCase())}`} > </StyledDotLink>
                    ))}
                </Navi>
            </Section1>
            <Section2>
                <Img src={person}/>
            </Section2>
        </WrappContent>
    )
}