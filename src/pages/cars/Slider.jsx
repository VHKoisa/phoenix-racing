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
            gap: 50,
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
            <img src={"/cars/prevCars/Anshumat.JPG"} alt="Image 1" />
          </SplideSlide>
          <SplideSlide className="splide__sliders  ">
            <img src={"/cars/prevCars/Eklavya.JPG"} alt="Image 2" />
          </SplideSlide>

          <SplideSlide className="splide__sliders  ">
            <img src={"/cars/prevCars/SUPRA2016.png"} alt="Image 3" />
          </SplideSlide>
          <SplideSlide className="splide__sliders  ">
            <img src={"/cars/prevCars/CHITRAK.jpg"} alt="Image 3" />
          </SplideSlide>
          <SplideSlide className="splide__sliders  ">
            <img src={"/cars/prevCars/GKDC2019.png"} alt="Image 3" />
          </SplideSlide>
          <SplideSlide className="splide__sliders  ">
            <img src={"/cars/prevCars/EGKDC2020.png"} alt="Image 3" />
          </SplideSlide>
          <SplideSlide className="splide__sliders  ">
            <img src={"/cars/prevCars/FBEV2023.png"} alt="Image 3" />
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
            fixedHeight: "80vh",
            breakpoints: {
              1024: {
                fixedHeight: 450,
              },
            },
          }}
          aria-label="React Splide Example"
        >
          <SplideSlide className="flex justify-center">
            <Carouselcard
              img="Anshumat.JPG"
              name="Anshumat"
              year="2010"
              text=""
            />
          </SplideSlide>
          <SplideSlide className="flex justify-center">
            <Carouselcard
              img="Eklavya.JPG"
              name="Eklavya"
              year="2011"
              text={
                <ul className="oldCarsInfo" style={{listStyleType: "disc"}}>

                <li>
                39th of 50 in MINI BAJA 2011
                </li>
                </ul>

              }
            />
          </SplideSlide>

          <SplideSlide className="flex justify-center">
            <Carouselcard
              img="SUPRA2016.png"
              name="Supra SAE"
              year="2016"
              text={
                <ul className="oldCarsInfo" style={{listStyleType: "disc"}}>

                <li>
                13th in overall INDIA
                </li>
                </ul>

              }
            />
          </SplideSlide>
          <SplideSlide className="flex justify-center">
            <Carouselcard
              img="CHITRAK.jpg"
              name="Chitrak"
              year="2018"
              text=""
            />
              {/* "Overall champion. 1st in skidpad, 1st in autocross, 1st in endurance and fuel.Best driver, best design, best innovation economy" */}
            
          </SplideSlide>
          <SplideSlide className="flex justify-center">
            <Carouselcard
              img="GKDC2019.png"
              name="GKDC"
              year="2019"
              text={
                <ul  className="oldCarsInfo" style={{listStyleType: "disc"}}>

                <li>
                Overall champion
                </li>
                <li>
                1st in skidpad, 1st in autocross, 1st in endurance and fuel
                </li>
                <li>
                Best driver, best design, best innovation economy
                </li>
                </ul>
              }

            />


          </SplideSlide>
          <SplideSlide className="flex justify-center">
            <Carouselcard
              img="EGKDC2020.png"
              name="EGKDC"
              year="2020"
              text= "Overall champions, 1st in Endurance and fuel economy, best driver award"

         
            />
          </SplideSlide>
          <SplideSlide className="flex justify-center">
            <Carouselcard
              img="FBEV2023.png"
              name="FBEV"
              year="2023"
              text={
                "Overall 3rd, 1st in concept goals and management report, 3rd in business presentation"
            
                

              }
            />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}
