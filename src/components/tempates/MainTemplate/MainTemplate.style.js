import { device } from "assets/Styles/theme";
import styled from "styled-components";
    
export const Wrapp = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${props => props.bck});
  background-size: cover;
  overflow: hidden;

  @media ${device.desktop}{
    /* height: 100vh; */
  }

`;