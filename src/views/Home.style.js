import styled from "styled-components";
import { device } from "assets/Styles/theme";
import { NavLink } from 'react-router-dom';


export const Wrapp = styled.main `
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    
    @media ${device.desktop}{
        overflow-y: hidden;
        flex-direction: row;
        align-items: stretch;
        justify-content: center;
    }
`

export const WrappArticle = styled.section ` 
    display: flex;
    flex-direction: row;
    @media ${device.desktop}{
        width: 60%;
        height: 100%;
        justify-content: center;
    }
`
export const WrappText = styled.article ` 
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({theme})=>theme.colors.lightBlue};
    
    @media ${device.desktop}{
        width: 440px;
        transform: translateX(-24%) translateY(8%);
        justify-content: center;
        align-items: stretch;
    }
`
export const WrappButton = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media ${device.desktop}{
        width: 460px;
        transform: translateX(-2%) translateY(15%);
    }
`
export const ButtonExplore = styled.button` 
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    background-color: ${({theme})=>theme.colors.white};
    border: none;
    border-radius: 50%;
    font-family: 'Bellefair';
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
    color: #000;
    
    &::before{
        position: absolute;
        top: 50%;
        left: 50%;
        content: " ";
        width: 150px;
        height: 150px;
        background-color: ${({theme})=>theme.colors.white};
        border: none;
        border-radius: 50%;
        opacity: 0.1;
        transform: translate(-50%, -50%);
        transition: .6s ease-in-out;;
    }

    @media ${device.tablet}{
        width: 242px;
        height: 242px;
        font-size: 32px;
    }
    
    @media ${device.desktop}{
        width: 274px;
        height: 274px;
        &:hover{
            &::before{
                transform: translate(-50%, -50%) scale(2.8);
            }
    }
    }
`
export const H1 = styled.h1 `
    font-family: ${({theme})=>theme.fontFamily.barlowCondensed};
    font-size: 16px;
    letter-spacing: 2.7px;
    font-weight: 400;

    @media ${device.tablet}{
        font-size: 20px;
        letter-spacing: 4.725px;
    }

    @media ${device.desktop}{
        font-size: 28px;
        letter-spacing: 4.725px;
    }
`
export const H2 = styled.h2 ` 
    font-family: ${({theme})=>theme.fontFamily.bellefair};
    font-size: 80px;
    margin: 24px 0;
    font-weight: 400;
    color: ${({theme})=>theme.colors.white};

    @media ${device.tablet}{
        font-size: 150px;
    }

    @media ${device.desktop}{
        font-size: ${({theme})=>theme.fontSize.heading1};
    }
`
export const P = styled.p `
    font-family: ${({theme})=>theme.fontFamily.barlow};
    font-size: 15px;
    line-height: 25px;
    font-weight: 400;
    text-align: center;
    width: 89%;

    @media ${device.tablet}{
        font-size: 16px;
        line-height: 28px;
        text-align: center;
        width: 400px;
    }

    @media ${device.desktop}{
        font-size: 18px;
        line-height: 32px;
        text-align: justify;
        width: auto;
    }
`