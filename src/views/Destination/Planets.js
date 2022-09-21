import React from "react";
import { Description, Img, Information, NaviSub, NaviWrapp, Section1, Section2, StyledLinkSub, Title, TitleBig, WrappContent, WrappDetails, WrappDetailsInfo, WrappText } from "./Destination.style";

export const Planets = ({data, planet}) =>{
    return(
        <WrappContent>
              <NaviWrapp>
                <NaviSub>
                        <StyledLinkSub to="/space-tourism/destination/moon">MOON</StyledLinkSub>
                        <StyledLinkSub to="/space-tourism/destination/mars">MARS</StyledLinkSub>
                        <StyledLinkSub to="/space-tourism/destination/europa">EUROPA</StyledLinkSub>
                        <StyledLinkSub to="/space-tourism/destination/titan">TITAN</StyledLinkSub>
                </NaviSub>
            </NaviWrapp>
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