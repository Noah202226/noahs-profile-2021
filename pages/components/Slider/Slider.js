import React, { useEffect, useState } from "react";

import Image from "next/image";
import BtnSlider from "./BtnSlider";
import { Typography } from "@mui/material";
import Link from "next/link";

const Slider = ({
  autoSlide = true,
  autoSlideInterval = 3000,
  images,
  appTitle,
  appDescription,
}) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    let newIndex = slideIndex + 1;
    if (newIndex > images.length) {
      newIndex = 1; // Wrap around to the first slide if at the end
    }
    setSlideIndex(newIndex);
  };
  const prevSlide = () => {
    let newIndex = slideIndex - 1;
    if (newIndex < 1) {
      newIndex = images.length; // Wrap around to the last slide if at the beginning
    }
    setSlideIndex(newIndex);
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [slideIndex]);

  return (
    <div className="container-slider">
      <div className="slider-card">
        <Typography variant="h6" textAlign={"right"}>
          {appTitle}
        </Typography>
        <Typography>{appDescription}</Typography>
      </div>
      {images?.map((obj, index) => {
        // Calculate the image URL based on the slideIndex
        console.log(index + 1);
        console.log(obj.img);
        const imageUrl = `/${index + 1}.PNG`; // Change this URL pattern as needed

        return (
          <Link href={imageUrl} target="_blank">
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
            >
              <Image
                style={{ objectFit: "fill" }}
                src={imageUrl}
                alt={obj.caption}
                width={100}
                height={100}
              />
            </div>
          </Link>
        );
      })}

      <BtnSlider moveSlide={nextSlide} direction="next" />
      <BtnSlider moveSlide={prevSlide} direction="prev" />
      <div className="dots-container">
        {Array.from({ length: images?.length }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
