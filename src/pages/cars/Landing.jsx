import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./slider.css";
import React, { useEffect, useRef } from "react";
import Name from "./taditName/name";
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
      <SplideSlide className="splide__slider">

      <div className="imx">
      <Name
      name='TADIT'
      />
      </div>
        <img 
          src={"/cars/taditImg/tadit-1.jpg"}
          alt=""
        />
      
      
      </SplideSlide>
      <SplideSlide className="splide__slider">

      <div className="imx2">
      <Name 
      name=" Gujrat "
      />
       <Name 
      name="First EV"
      />
      </div>
        <img
          src={"/cars/taditImg/taditImgT-3.jpg"}
          
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
      <Name 
      name=" Formula "
      />
       <Name 
      name="Student Car"
      />
      </div>
        <img
          src={"/cars/taditImg/taditImgT-2.jpg"}
          alt=""
        />
      </SplideSlide>
     
    </Splide>
  );
};

export default Landing;
