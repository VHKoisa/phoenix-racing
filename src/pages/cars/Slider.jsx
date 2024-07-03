import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./slider.css";
import React, { useEffect, useRef } from "react";
import Carouselcard from "./Carouselcard";
export default function Slider() {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);
  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  });
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col items-center w-full">
        <Splide
          ref={thumbsRef}
          className="p-5 w-full"
          options={{
            rewind: true,
            fixedWidth: 250,
            fixedHeight: 150,
            gap: 10,
            keyboard: true,
            isNavigation: true,
            focus: "center",
            pagination: false,
            breakpoints: {
              600: {
                fixedWidth: 60,
                fixedHeight: 44,
              },
            },
          }}
          aria-label="React Splide Example"
        >
          <SplideSlide className="splide__sliders">
            <img
              src={"/cars/prevCars/Anshumat.JPG"}
              alt="Image 1"
            />
          </SplideSlide>
          <SplideSlide className="splide__sliders  ">
            <img
              src={"/cars/prevCars/Eklavya.JPG"}
              alt="Image 2"
            />
          </SplideSlide>
          <SplideSlide className="splide__sliders  ">
            <img
              src={"/cars/prevCars/Baja2014.jpg"}
              alt="Image 3"
            />
          </SplideSlide>
          <SplideSlide className="splide__sliders  ">
            <img
              src={"/cars/prevCars/SUPRA2016.png"}
              alt="Image 3"
            />
          </SplideSlide>
          <SplideSlide className="splide__sliders  ">
            <img
              src={"/cars/prevCars/CHITRAK.jpg"}
              alt="Image 3"
            />
          </SplideSlide>
          <SplideSlide className="splide__sliders  ">
            <img
              src={"/cars/prevCars/GKDC2019.png"}
              alt="Image 3"
            />
          </SplideSlide>
          <SplideSlide className="splide__sliders  ">
            <img
              src={"/cars/prevCars/EGKDC2020.png"}
              alt="Image 3"
            />
          </SplideSlide>
          <SplideSlide className="splide__sliders  ">
            <img
              src={"/cars/prevCars/FBEV2023.png"}
              alt="Image 3"
            />
          </SplideSlide>
        </Splide>
        <Splide
          ref={mainRef}
          className="w-full lg:w-3/5 p-5 content-center"
          options={{
            type: "fade",
            rewind: true,
            pagination: false,
            arrows: false,
            fixedHeight: 600,
            breakpoints: {
              1024: {
                fixedHeight: 450,
              },
            },
          }}
          aria-label="React Splide Example"
        >
          <SplideSlide>
            <Carouselcard
              img="Anshumat.JPG"
              name="Anshumat"
              year="2010"
              text=""
            />
          </SplideSlide>
          <SplideSlide>
            <Carouselcard
              img="Eklavya.JPG"
              name="Eklavya"
              year="2011"
              text="39th out of 80 in MINI BAJA 2011"
            />
          </SplideSlide>
          <SplideSlide>
            <Carouselcard
              img="Baja2014.jpg"
              name="Baja"
              year="2014"
              text="4th in overall ranking, 1st in presentation, 2nd in cost report"
            />
          </SplideSlide>
          <SplideSlide>
            <Carouselcard
              img="SUPRA2016.png"
              name="Supra SAE"
              year="2016"
              text="13th in all over India"
            />
          </SplideSlide>
          <SplideSlide>
            <Carouselcard
              img="CHITRAK.jpg"
              name="Chitrak"
              year="2018"
              text=""
            />
          </SplideSlide>
          <SplideSlide>
            <Carouselcard
              img="GKDC2019.png"
              name="GKDC"
              year="2019"
              text="Overall champions, 1st in skidpad, 1st in autocross, 1st in endurance and fuel economy, Best driver, best design, best innovation"
            />
          </SplideSlide>
          <SplideSlide>
            <Carouselcard
              img="EGKDC2020.png"
              name="EGKDC"
              year="2020"
              text="Overall champions, 1st in Endurance and fuel economy, best driver award"
            />
          </SplideSlide>
          <SplideSlide>
            <Carouselcard
              img="FBEV2023.png"
              name="FBEV"
              year="2023"
              text="Overall 3rd, 1st in concept goals and management report, 3rd in business plan presentation"
            />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}
