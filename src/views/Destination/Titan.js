import React from "react";
import MoonJPG from 'assets/destination/image-moon.png'
import { Description, Img, Information, Section1, Section2, Title, TitleBig, WrappContent, WrappDetails, WrappDetailsInfo, WrappText } from "./Destination.style";

export const Titan = ({data}) =>{
    return(
        <WrappContent>
            <Section1>
                <Img src={MoonJPG}/>
            </Section1>
            <Section2>
                <WrappText>
                    <TitleBig>{data[3].name.toUpperCase()}</TitleBig>
                    <Description>{data[3].description}</Description>
                    <WrappDetails>
                        <WrappDetailsInfo>
                            <Title>AVG. DISTANCE</Title>
                            <Information>{data[3].distance}</Information>
                        </WrappDetailsInfo>
                        <WrappDetailsInfo>
                            <Title>EST. TRAVEL TIME</Title>
                            <Information>{data[3].travel}</Information>
                        </WrappDetailsInfo>
                    </WrappDetails>
                </WrappText>
            </Section2>
        </WrappContent>
    )
}