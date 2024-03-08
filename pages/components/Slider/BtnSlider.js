import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import React from "react";

const BtnSlider = ({ moveSlide, direction }) => {
  return (
    <button
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      onClick={moveSlide}
    >
      {direction === "next" ? <ArrowRight /> : <ArrowLeft />}
    </button>
  );
};

export default BtnSlider;
