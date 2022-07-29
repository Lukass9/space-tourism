import styled from "styled-components";

export const Wrapp = styled.div `
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    margin-top: 1.5vw;
    width: 100%;
`
export const Navi = styled.ol`
    display: flex;
    flex-direction: row;
    padding: 36px 30px;
    /* margin: 2.85vw 0; */
    background-color: rgba(255, 255, 255, 0.04);
    color: ${({theme})=> theme.colors.white};
    font-size:  ${({theme})=> theme.fontSize.navText};
    font-family: ${({theme})=> theme.fontFamily.barlowCondensed};
    letter-spacing: ${({theme})=> theme.letterSpacing.navText};
    list-style-type: none;
    counter-reset: navCounter;
    width: 58%;
    backdrop-filter: blur(41px);

    &::before{
        content:' ';
        position: absolute;
        transform: translateY(900%) translateX(-98%) ;
        width: 57%;
        height: 1px;
        background-color: ${({theme})=> theme.colors.white};
        opacity: 0.25;
    }

    li{
        position: relative;
        margin-left: 7%;
        cursor: pointer;

        &::before{
            counter-increment: navCounter;  
            content: "0" counter(navCounter) " ";
            font-weight: bold;
            margin-right: 0.2vw;
        }
        &:first-child{
            margin-left: 7vw;
            counter-set: navCounter -1;
        }

        &:hover{
            &::after{
                position: absolute;
                bottom: -36px;
                content: "";
                display: block;
                width: 100%;
                height: 3px;
                background-color: ${({theme})=> theme.colors.white};
                opacity: 0.5;
            }
        }
    }
`
export const Logo = styled.img`
    margin-left: 4.5vw;
    width: 48px;
`