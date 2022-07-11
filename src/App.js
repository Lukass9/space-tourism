import React from "react";
import styled from "styled-components"

const Wrapp = styled.div ` 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

function App() {
  return (
    <Wrapp>
      <h1>example tekst </h1>
    </Wrapp>
  );
}

export default App;
