import React, {useRef, useEffect, useState} from "react";
import styled from "styled-components";

import {Button} from "./Button";

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: black;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

const ButtonContainer = styled.div`
  width: 80vw;
  position: absolute;

  bottom: 30px;
`;

const Marker = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background: transparent;
  border: 5px solid red;
  border-radius: 50%;
`;

const Randomizer = ({src}) => {
  const picture = useRef(null);
  const [counter, setCounter] = useState(0);

  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(() => {
    random();
  }, [picture]);

  function rand(a, b) {
    return a + Math.floor(Math.random() * (b - a));
  }

  function random() {
    // const random =
    //   result.words[Math.floor(Math.random() * result.words.length)];

    // const {x0, x1, y0, y1} = random.baseline;

    const img = picture.current;

    const imgX = (img.width / img.naturalWidth) * img.naturalWidth;
    const imgY = (img.height / img.naturalHeight) * img.naturalHeight;

    // const X = img.offsetTop + imgX;
    // const Y = img.offsetLeft + imgY;

    // if (X === Infinity || isNaN(X) || Y === Infinity || isNaN(Y)) {
    //   return;
    // }

    setPosition({x: rand(img.offsetTop, imgX), y: rand(img.offsetLeft, imgY)});
  }

  function incrementCounter() {
    setCounter(counter + 1);
  }

  return (
    <Container>
      {position.x !== 0 && position.y !== 0 && (
        <Marker style={{top: position.y, left: position.x}} />
      )}

      <img width="100%" ref={picture} src={src}></img>

      <ButtonContainer>
        <Button
          onClick={() => {
            random();
            incrementCounter();
          }}>
          Random Again :P
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Randomizer;
