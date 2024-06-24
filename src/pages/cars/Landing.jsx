import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./slider.css";
import React, { useEffect, useRef } from "react";
import Carouselcard from "./Carouselcard";

const Landing = () => {
  return (
    <Splide
      className="w-full"
      options={{
        type: "fade",
        rewind: true,
        pagination: true,
        arrows: true,
        fixedHeight: 800,
        breakpoints: {
          1024: {
            fixedHeight: 450,
          },
        },
      }}
      aria-label="React Splide Example"
    >
      <SplideSlide>
        <img
          src={import.meta.env.BASE_URL + "/cars/taditImg/tadit-1.jpg"}
          alt=""
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src={import.meta.env.BASE_URL + "/cars/taditImg/tadit-info2.PNG"}
          alt=""
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src={import.meta.env.BASE_URL + "/cars/taditImg/tadit-1.jpg"}
          alt=""
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src={import.meta.env.BASE_URL + "/cars/taditImg/tadit-info2.PNG"}
          alt=""
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src={import.meta.env.BASE_URL + "/cars/taditImg/tadit-1.jpg"}
          alt=""
        />
      </SplideSlide>
    </Splide>
  );
};

export default Landing;
