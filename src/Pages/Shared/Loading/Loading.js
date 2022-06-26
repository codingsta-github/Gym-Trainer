import React, { useState } from "react";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
const Loading = () => {
  const override = css`
    display: block;
    margin: 45vh 45vw;
    border-color: red;
  `;
  let [color, setColor] = useState("#332467");
  return <FadeLoader color={color} css={override} size={20} />;
};

export default Loading;
