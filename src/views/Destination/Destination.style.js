import styled from "styled-components";
import { Navi, StyledLink } from "components/organisms/navigation/Nav.style";

export const H1 = styled.h1`
    color: white;
    font-family: 'Barlow Condensed';
    font-size: 28px;
    font-weight: 400;
    letter-spacing: 4.725px;
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
export const NaviSub = styled(Navi)`
    margin: 0;
    padding: 0;
    width: 40%;
    backdrop-filter: blur(0);
    background-color: transparent;
    color: ${({theme})=> theme.colors.lightBlue};
    &::before{
        content: none;
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
            bottom: -12px;
        }
    }
    &.${activeClassName} {
        &::after {
            bottom: -12px;
        }
    }
`
export const Section1 = styled.section ` 
    display: flex;
    justify-content: flex-end;
    width: 47vw;
`
export const PageTitle = styled.section ` 
    display: flex; 
    width: 100vw;
    margin: 2% 0 0 0;
    padding-left: 11.5%;
`
export const Section2 = styled.section `
    display: flex;
    align-items: flex-end;
    width: 53vw;
`
export const NaviWrapp = styled.section `
    display: flex;
    justify-content: flex-end;
    width: 100vw;
    /* padding-right: 22%; */
`
export const TitleBig = styled.h1 ` 
    color: white;
    font-family: 'Bellefair';
    font-size: 100px;
    font-weight: 400;
    margin: 37px 0;
`

export const Img = styled.img `
    margin-top: 5%;
    /* width: 47%; */
`
export const WrappContent = styled.div ` 
    display: flex;
    flex-direction: row ;
    /* padding: 2% 17%; */
`
export const WrappText = styled.div ` 
    margin-left: 12vw;
`
export const WrappNav = styled.div ` 
    margin: 0;
`
export const Description = styled.p`  
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #D0D6F9;
    width: 444px;
`

export const WrappDetails = styled.div ` 
    border-top: 1px solid  #383B4B;
    margin-top: 12%;
    display: flex;
    flex-direction: row;
    width: 100%;
`
export const WrappDetailsInfo = styled.div` 
    display: flex;
    flex-direction: column;
    width: 50%;
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