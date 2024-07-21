import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import "./cars.scss";
import Carouselcard from "./Carouselcard";
import Slider from "./Slider";
import Landing from "./Landing";
import Name from "./taditName/name";

const Car = () => {


  useEffect(() => {
    document.getElementById("showButton").onmouseenter = function () {
      const spes1 = document.getElementById("spes1");


      spes1.style.opacity = 100;
    

    };

    document.getElementById("showButton").onmouseleave = function () {
      const spes1 = document.getElementById("spes1");
      spes1.style.opacity = 0;
  
    }
    document.getElementById("showButton2").onmouseenter = function () {
      const spes2 = document.getElementById("spes2");


      spes2.style.opacity = 100;
    

    };

    document.getElementById("showButton2").onmouseleave = function () {
      const spes2 = document.getElementById("spes2");
      spes2.style.opacity = 0;
    };

    document.getElementById("showButton3").onmouseenter = function () {
      const spes3 = document.getElementById("spes3");
      spes3.style.opacity = 100;
    };

    document.getElementById("showButton3").onmouseleave = function () {
      const spes3 = document.getElementById("spes3");
      spes3.style.opacity = 0;
    };

    document.getElementById("showButton4").onmouseenter = function () {
      const spes4 = document.getElementById("spes4");
      spes4.style.opacity = 100;
    };

    document.getElementById("showButton4").onmouseleave = function () {
      const spes4 = document.getElementById("spes4");
      spes4.style.opacity = 0;
    };

    document.getElementById("showButton5").onmouseenter = function () {
      const spes5 = document.getElementById("spes5");
      spes5.style.opacity = 100;
    };

    document.getElementById("showButton5").onmouseleave = function () {
      const spes5 = document.getElementById("spes5");
      spes5.style.opacity = 0;
    };
  });

  return (
    <>
      <Header />
 <div className="pt-20 lg:pt-0">

      <Landing />
 </div>
     
    <section>
      
      <h1 className="info-title">
        TECHNOLOGY
       </h1>
       </section>
      <div className="tadit">
        {/* hero  code */}
        <div className="tadit-info">
          <div className="taditInfoImgdiv">
            <button id="showButton">
              <img
                className="plusBtn"
                src={"/cars/plus.png"}
              />
            </button>
            <button id="showButton2">
              <img
                className="plusBtn"
                src={"/cars/plus.png"}
              />
            </button>
            <button id="showButton3">
              <img
                className="plusBtn"
                src={"/cars/plus.png"}
              />
            </button>
            <button id="showButton4">
              <img
                className="plusBtn"
                src={"/cars/plus.png"}
              />
            </button>
            <button id="showButton5">
              <img
                className="plusBtn"
                src={"/cars/plus.png"}
              />
            </button>

            <img
              className="taditInfoImg"
              src={"/cars/tadit-info2.PNG"}
            />
          </div>

          <div className="info1">
            <div id="spes1" className=" pinTextShow-1 infoContainer">
              <h3 className="racing">CHASIS</h3>
              <ul>
                <li>1018 Space frame</li>
                <li>Hydraulic Braking System</li>
                <li>Glass Fiber Bodyworks</li>
                <li>Total weight:320</li>
                <li>In hosue manufactured</li>
              </ul>
            </div>
          </div>

          <div className="info2" id="info2">
            <div id="spes2" className=" pinTextShow-2 infoContainer">
              <h3 className="racing">SUSPENSION</h3>
              <ul>
                <li>Track Width: 1210mm</li>
                <li>Wheel Base: 1540mm</li>
                <li>Double Wishbone</li>
                <li>Pushrod Suspension</li>
                <li>13 inch MRF ZTD-1 Slick Tyres</li>
              </ul>
            </div>
          </div>

          <div className="info3" id="info3">
            <div id="spes3" className=" pinTextShow-3 infoContainer">
              <h3 className="racing">PERFORMANCE</h3>
              <ul>
                <li>0-60 kmph in 3 sec</li>
                <li>Top speed : 75 kmph</li>
                <li>1.5g Max Deceleration</li>
              </ul>
            </div>
          </div>

          <div className="info4" id="info4">
            <div id="spes4" className=" pinTextShow-4 infoContainer ">
              <h3 className="racing">Battery Pack</h3>
              <ul>
                <li>Charging Time : 4 hrs</li>
                <li>In house manufactured</li>
                <li>7.36 kWh | 172V</li>
                <li>A 123 20 AH LFP Cells</li>
              </ul>
            </div>
          </div>

          <div className="info5" id="info5">
            <div id="spes5" className=" pinTextShow-5 infoContainer">
              <h3 className="racing">MOTOR</h3>
              <ul>
                <li>Dual Agni- 119R</li>
                <li>Coupled PMDC Motors</li>
                <li>Power : 35 KW</li>
                <li>Torque : 29.3Nm</li>
                <li>Air Cooled</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="engineInfo">
          <div className="specs_filter-column">
            <div className="specs_filter-column-item">
              <div className="specs_filter-column-item-container">
                <span className="regular">Cells</span>{" "}
                <span className="title-bold">LHP CELLS</span>
              </div>
            </div>
            <div className="specs_filter-column-item">
              <div className="specs_filter-column-item-container">
                <span className="regular">Motor</span>{" "}
                <span className="title-bold">AGNI 119R</span>
              </div>
            </div>
            <div className="specs_filter-column-item">
              <div className="specs_filter-column-item-container">
                <span className="regular">Cell Config.</span>{" "}
                <span className="title-bold">48s 2p</span>
              </div>
            </div>
            <div className="specs_filter-column-item">
              <div className="specs_filter-column-item-container">
                <span className="regular">Battery Capacity</span>{" "}
                <span className="title-bold">172V</span>
              </div>
            </div>
            <div className="specs_filter-column-item">
              <div className="specs_filter-column-item-container">
                <span className="regular">Charging Time</span>{" "}
                <span className="title-bold">4 hrs</span>
              </div>
            </div>
            <div className="specs_filter-column-item">
              <div className="specs_filter-column-item-container">
                <span className="regular">Weight</span>{" "}
                <span className="title-bold">320kg</span>
              </div>
            </div>
            <div className="specs_filter-column-item">
              <div className="specs_filter-column-item-container">
                <span className="regular">Max Speed</span>{" "}
                <span className="title-bold">75 kmph</span>
              </div>
            </div>
            <div className="specs_filter-column-item">
              <div className="specs_filter-column-item-container">
                <span className="regular">Power output</span>{" "}
                <span className="title-bold">7.36 kwh</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="info-title">OUR CARS</h1>
      <Slider />

      <Footer />
    </>
  );
};

export default Car;
