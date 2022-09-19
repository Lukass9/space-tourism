import { NaviSub, StyledLinkSub, Wrapp } from "views/Destination/Destination.style";
import styled from "styled-components";
import { device } from "assets/Styles/theme";

export const Navi = styled(NaviSub)` 
    margin: 0;
    transform:translateY(0);
`
export const Wrapp1 = styled(Wrapp)`
    display:flex;
    justify-content: space-between;
    margin: 0px 170px 0px 170px;
    width: 77%;
`

export const activeClassName = 'active';
export const StyledDotLink = styled(StyledLinkSub)` 
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
export const WrappForMobile = styled.div` 
    display: flex;
    flex-direction: column;
    width: 100vw;
    height:100%;
    overflow: hidden;
    align-items: center;

    @media ${device.desktop}{
        overflow: hidden;
    }
`