import React, {useEffect} from "react";
import styled from "styled-components";
import DestinationBg from 'assets/destination/background-destination-desktop.jpg'

const H1 = styled.h1`
    color: white;
`
const Destination = ({handleSetBackground}) =>{
    useEffect(()=>{
        handleSetBackground(DestinationBg)
    },[])
    return(
        <H1>Destination</H1>
    )
}

export default Destination