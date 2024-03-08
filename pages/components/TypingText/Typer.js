import React, { useEffect, useState } from "react";

const Typer = ({ textToType, speed }) => {
  let [text, setText] = useState("");
  let i = 0;
  const typerFunction = () => {
    if (i === 0) {
      setText("");
    }

    if (i === textToType.length) return;
    setText((text += textToType[i]));

    i += 1;
    setTimeout(() => {
      typerFunction();
    }, speed);
  };
  useEffect(() => {
    typerFunction();
  }, []);
  return <div>{text}</div>;
};

export default Typer;
