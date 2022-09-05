import styled from "styled-components";
    
export const Wrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${props => props.bck});
  background-size: cover;
`;