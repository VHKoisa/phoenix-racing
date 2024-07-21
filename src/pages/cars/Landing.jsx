import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./slider.css";
import React, { useEffect, useRef } from "react";
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
            fixedHeight: 350,
          },
        },
      }}
      aria-label="React Splide Example"
    > 
      <SplideSlide className="splide__slider">

      <div className="imx">
     
      </div>
        <img 
          src={window.innerWidth >= 1024 ? `/cars/taditImg/tadit-desktop.jpg` : `/cars/taditImg/tadit-mobile.jpg`}
          alt=""
        />
      
      
      </SplideSlide>
      <SplideSlide className="splide__slider">

      <div className="imx2">
      {/* <Name 
      name=" Gujarat's "
      />
       <Name 
      name="First EV"
      /> */}
      </div>
        <img
          src={window.innerWidth >= 1024 ? `/cars/taditImg/taditImgT-desktop.jpg` : `/cars/taditImg/taditImgT-mobile.jpg`}
          
          alt=""
        />
      </SplideSlide>
      {/* <SplideSlide className="splide__slider">
        <div className="imx">
      <Name 
      name='FORMULA STUDENT CAR '
      />
      </div>
        <img 
          src={"/cars/taditImg/taditImgT-1.png"}
          alt=""
        />
      </SplideSlide> */}
      {/* <SplideSlide className="splide__slider">
        <img
          src={"/cars/taditImg/tadit-1.jpg"}
          alt=""
        />
      </SplideSlide> */}
      <SplideSlide className="splide__slider ">
      <div className="imx3">
      {/* <Name 
      name=" Formula "
      />
       <Name 
      name="Student Car"
      /> */}
      </div>
        <img
          src={window.innerWidth >= 1024 ? `/cars/taditImg/taditImgT-2-desktop.jpg` : `/cars/taditImg/taditImgT-2-mobile.jpg`}
          alt=""
        />
      </SplideSlide>
     
    </Splide>
  );
};

export default Landing;
