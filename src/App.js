import React from "react";
import styled from "styled-components";

import Uploader from "./Uploader";

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  padding: 0 20px;

  & h1 {
    color: white;
    font-weight: lighter;
    font-size: 3em;

    margin: 10px 0;
  }

  & p {
    font-size: 1.6em;
  }
`;

function App() {
  return (
    <Container>
      <h1>DakFast</h1>
      <p>
        Just take a picture of menu then the system will tell you what to eat
      </p>

      <Uploader />
    </Container>
  );
}

export default App;
