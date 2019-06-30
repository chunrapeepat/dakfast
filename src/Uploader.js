import React, {useRef} from "react";
import styled from "styled-components";

const UploadButton = styled.div`
  padding: 10px 0;
  background: white;
  width: 100%;
  text-align: center;
  border-radius: 5rem;
  cursor: pointer;

  font-size: 1.4em;
`;

const Uploader = () => {
  const uploadInput = useRef(null);

  return (
    <div>
      <input
        ref={uploadInput}
        style={{opacity: 0}}
        type="file"
        accept="image/*"
        capture="camera"
      />

      <UploadButton
        onClick={() => {
          uploadInput.current.click();
        }}>
        Take a Picture!!
      </UploadButton>
    </div>
  );
};

export default Uploader;
