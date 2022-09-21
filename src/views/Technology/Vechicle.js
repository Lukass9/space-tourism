import React from "react";
import { Description, Img, Name, NaviWrapp_v2, Navi_v2, Role, Section1, Section2, StyledDotLink, WrappContent, WrappText } from "./Vechicle.style";

export const Vechicle = ({data, vechicle, technologyName}) =>{
    return(
        <WrappContent>
            <Section1>
                <NaviWrapp_v2>
                    <Navi_v2>
                        {technologyName.map((technology, i)=>(
                            <StyledDotLink key={technology.name} to={`/space-tourism/technology/${encodeURIComponent(technology.name.toLowerCase())}`} > {i+1} </StyledDotLink>
                        ))}
                    </Navi_v2>
                </NaviWrapp_v2>
                <WrappText>
                    <Role>THE TERMINOLOGY…</Role>
                    <Name>{data.name}</Name>
                    <Description>{data.description}</Description>
                </WrappText>
            </Section1>
            <Section2>
                <Img src={vechicle}/>
            </Section2>
        </WrappContent>
    )
}