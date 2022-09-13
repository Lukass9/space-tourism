import styled from "styled-components";
import { Navi, StyledLink } from "components/organisms/navigation/Nav.style";
import { device } from "assets/Styles/theme";

export const H1 = styled.h1`
    color: white;
    font-family: 'Barlow Condensed';
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 2.7px;

    @media ${device.desktop}{
        font-size: 28px;
        letter-spacing: 4.725px;
    }
`
export const H1grey = styled(H1)` 
    opacity: 0.25;
    font-weight: 700;
    margin-right: 20px;
    
`
export const Wrapp = styled.div ` 
    display: flex; 
    margin: 50px 170px 0 170px;
`
export const WrappForMobile = styled.div` 
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    @media ${device.desktop}{
        overflow-y: hidden;
    }

`
export const NaviSub = styled(Navi)`
    position: static;
    flex-direction: row;
    margin: 0;
    padding: 0;
    /* width: 40%; */
    backdrop-filter: blur(0);
    background-color: transparent;
    color: ${({theme})=> theme.colors.lightBlue};
    transform: translateX(0px);
    height: auto;
    z-index: 4;
    
    &::before{
        content: none;
    }
    
    @media ${device.desktop}{
        width: 40%;
    }
`
export const activeClassName = 'active';
export const StyledLinkSub = styled(StyledLink)`
    margin: 0;
    padding:0;
    margin-left: 35px;
    &:first-child{
            margin-left: 0;
    }
    &::before{
        content: none;
    }

    &:hover{
        &::after{
            position: absolute;
            bottom: -12px;
            content: "";
            display: block;
            width: 100%;
            height: 3px;
            background-color: ${({theme})=> theme.colors.white};
            opacity: 0.5;
        }
    }
            &.${activeClassName} {
                &::after {
                    position: absolute;
                    top: auto;
                    bottom: -12px;
                    content: "";
                    display: block;
                    width: 100%;
                    height: 3px;
                    background-color: ${({theme})=> theme.colors.white};
                    opacity: 1;
                }
            }

`
export const Section1 = styled.section `
    display: flex;
    justify-content: center;
    order: -1;

    @media ${device.desktop}{
        display: flex;
        justify-content: flex-end;
        width: 47vw;
        order: 0;
    }
`
export const PageTitle = styled.section ` 
    display: flex;
    width: 100vw;
    justify-content: center;

    @media ${device.desktop}{
        margin: 2% 0 0 0;
        padding-left: 11.5%;
        justify-content: flex-start;
    }
`
export const Section2 = styled.section `
    display: flex;
    align-items: flex-end;
    /* width: 53vw; */
    
    @media ${device.desktop}{
        width: 53vw;
    }
`
export const NaviWrapp = styled.section `
    display: flex;
    justify-content: center;
    width: 100vw;

    @media ${device.desktop}{
        justify-content: flex-end;
    }
`
export const TitleBig = styled.h1 ` 
    color: white;
    font-family: 'Bellefair';
    font-size: 58px;
    font-weight: 400;
    margin: 37px 0;
    
    @media ${device.desktop}{
        font-size: 100px;
    }
`

export const Img = styled.img `
   width: 50%;
    @media ${device.desktop}{
        margin-top: 5%;
        width: auto;
    }
    /* width: 47%; */
`
export const WrappContent = styled.div ` 
    display: flex;
    flex-direction: column;

    @media ${device.desktop}{
        flex-direction: row;
    }
    /* padding: 2% 17%; */
`
export const WrappText = styled.div ` 
    display: flex;
    flex-direction: column;
    margin-left: 0;
    align-items: center;
    width:100%;
    @media ${device.desktop}{
        align-items: flex-start;
        margin-left: 12vw;
        width: auto;
    }
`
export const WrappNav = styled.div ` 
    margin: 0;
`
export const Description = styled.p`  
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    color: #D0D6F9;
    width: 327px;
    text-align: center;

    @media ${device.desktop}{
        font-size: 18px;
        width: 444px;
        line-height: 32px;
        text-align: left;
    }
`

export const WrappDetails = styled.div ` 
    border-top: 1px solid  #383B4B;
    margin-top: 12%;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;    

    @media ${device.desktop}{
        flex-direction: row;
        align-items: flex-start;
    }
`
export const WrappDetailsInfo = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;

    @media ${device.desktop}{
        align-items: flex-start;
    }
`

export const Title = styled.p `
    font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 2.3625px;
    color: #D0D6F9;
    margin: 30px 0 10px 0;
`
export const Information = styled.p `
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin: 0;
`