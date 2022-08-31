import React from "react";
import { Description, Img, Information, Section1, Section2, Title, TitleBig, WrappContent, WrappDetails, WrappDetailsInfo, WrappText } from "./Destination.style";

export const Planets = ({data, planet}) =>{
    return(
        <WrappContent>
            <Section1>
                <Img src={planet}/>
            </Section1>
            <Section2>
                <WrappText>
                    <TitleBig>{data.name.toUpperCase()}</TitleBig>
                    <Description>{data.description}</Description>
                    <WrappDetails>
                        <WrappDetailsInfo>
                            <Title>AVG. DISTANCE</Title>
                            <Information>{data.distance}</Information>
                        </WrappDetailsInfo>
                        <WrappDetailsInfo>
                            <Title>EST. TRAVEL TIME</Title>
                            <Information>{data.travel}</Information>
                        </WrappDetailsInfo>
                    </WrappDetails>
                </WrappText>
            </Section2>
        </WrappContent>
    )
}