import React, {useRef, useState} from "react";
import styled from "styled-components";
// import ReactLoading from "react-loading";

import Randomizer from "./Randomizer";
import {Button} from "./Button";

const Loader = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.9);

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  & span {
    margin-top: 20px;
    font-size: 1.4rem;
  }
`;

const Uploader = () => {
  const uploadInput = useRef(null);
  const [file, setFile] = useState(null);
  //   const [result, setResult] = useState();

  //   const [loading, setLoading] = useState(0);

  function handleUploader(e) {
    recognize(e.target.files[0]);
  }

  async function recognize(file) {
    // const tesseract = window.Tesseract;

    // setLoading(1);

    // const result = await tesseract
    //   .recognize(file, {
    //     lang: "eng",
    //   })
    //   .progress(({progress, status}) => {
    //     if (!progress || !status || status !== "recognizing text") {
    //       return null;
    //     }

    //     setLoading(Math.floor(progress * 100));
    //   });

    setFile(URL.createObjectURL(file));
    // setResult(result);

    // setLoading(0);
  }

  return (
    <div>
      {/* {loading !== 0 && (
        <Loader>
          <ReactLoading type="spin" color="black" width="80px" height="80px" />
          <span>Thinking.... {loading}%</span>
        </Loader>
      )} */}

      <input
        ref={uploadInput}
        style={{opacity: 0}}
        type="file"
        accept="image/*"
        capture="camera"
        onChange={handleUploader}
      />

      {/* {file && result && <Randomizer src={file} result={result} />} */}
      {file && <Randomizer src={file} />}

      <Button
        onClick={() => {
          uploadInput.current.click();
        }}>
        Take a Picture!!
      </Button>
    </div>
  );
};

export default Uploader;
