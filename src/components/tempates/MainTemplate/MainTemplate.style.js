import styled from "styled-components";
import backgroud from '../../../assets/home/background-home-desktop.jpg'
    
export const Wrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroud});
  background-size: cover;
`;