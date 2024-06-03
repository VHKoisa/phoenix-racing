import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import "./cars.scss";
import Carouselcard from "./Carouselcard";

const Car = () => {
  useEffect(() => {
    var carousels = document.querySelectorAll(".carousel");
    for (var i = 0; i < carousels.length; i++) {
      carousel(carousels[i]);
    }
    addEventListener("keydown", (event)=> {
      console.log(event.key)
    })
  });

  function carousel(root) {
    var figure = root.querySelector("figure"),
      nav = root.querySelector("nav"),
      images = figure.children,
      n = images.length,
      gap = root.dataset.gap || 0,
      bfc = "bfc" in root.dataset,
      theta = (2 * Math.PI) / n,
      currImage = 0;
    setupCarousel(n, parseFloat(600));
    window.addEventListener("resize", () => {
      setupCarousel(n, parseFloat(600));
    });

    setupNavigation();

    function setupCarousel(n, s) {
      var apothem = s / (2 * Math.tan(Math.PI / n));
      figure.style.transformOrigin = `50% 50% ${-apothem}px`;

      for (var i = 0; i < n; i++) images[i].style.padding = `${gap}px`;
      for (i = 1; i < n; i++) {
        images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
        images[i].style.transform = `rotateY(${i * theta}rad)`;
      }
      if (bfc)
        for (i = 0; i < n; i++) images[i].style.backfaceVisibility = "hidden";

      rotateCarousel(currImage);
    }

    function setupNavigation() {
      nav.addEventListener("click", onClick, true);

      function onClick(e) {
        e.stopPropagation();

        var t = e.target;
        if (t.tagName.toUpperCase() != "BUTTON") return;

        if (t.classList.contains("next")) {
          currImage = currImage + 1;
        } else {
          currImage = currImage - 1;
        }

        rotateCarousel(currImage);
      }
    }

    function rotateCarousel(imageIndex) {
      figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
      // for (let i = 0; i < n; i++) {
      //   if (i != imageIndex) {
      //     images[i].style.opacity = "0.3";
      //   }
      //   if (i == imageIndex) {
      //     images[i].style.opacity = "1";
      //   }
      // }
    }
      
      document.getElementById('showButton').onmouseenter = function (){
          const spes1 = document.getElementById('spes1')
          spes1.style.opacity=100;
      }

      document.getElementById('showButton').onmouseleave=function(){
        const spes1 = document.getElementById('spes1')
        spes1.style.opacity=0;
        
      }


      document.getElementById('showButton2').onmouseenter = function (){
        const spes2 = document.getElementById('spes2')
        spes2.style.opacity=100;
    }

    document.getElementById('showButton2').onmouseleave=function(){
      const spes2 = document.getElementById('spes2')
      spes2.style.opacity=0;
      
    }

    document.getElementById('showButton3').onmouseenter = function (){
      const spes3 = document.getElementById('spes3')
      spes3.style.opacity=100;
  }

  document.getElementById('showButton3').onmouseleave=function(){
    const spes3 = document.getElementById('spes3')
    spes3.style.opacity=0;
    
  }

  
  document.getElementById('showButton4').onmouseenter = function (){
    const spes4 = document.getElementById('spes4')
    spes4.style.opacity=100;
}

document.getElementById('showButton4').onmouseleave=function(){
  const spes4 = document.getElementById('spes4')
  spes4.style.opacity=0;
  
}

document.getElementById('showButton5').onmouseenter = function (){
  const spes5 = document.getElementById('spes5')
  spes5.style.opacity=100;
}

document.getElementById('showButton5').onmouseleave=function(){
const spes5 = document.getElementById('spes5')
spes5.style.opacity=0;

}
  
    
      
     
      
  


  }
  return (
    <>
      <Header />

      {/* taditCode */}

      <div className="tadit">
            <div className="hero-car">
                  <div className="title-container">
                    <h1 className="taditTitle1">
                      <img src="https://see.fontimg.com/api/renderfont4/rg1WO/eyJyIjoiZnMiLCJoIjoxNTUsInciOjEwMDAsImZzIjoxNTUsImZnYyI6IiMxQjFCMUIiLCJiZ2MiOiIjRjVGNUY3IiwidCI6MX0/VEFESVQ/komyca-3d-free-version-italic.png" alt="" />
                    </h1>
                    <h1 className="taditTitle2">
                    <img src="https://see.fontimg.com/api/renderfont4/rg1WO/eyJyIjoiZnMiLCJoIjo4NywidyI6MTAwMCwiZnMiOjg3LCJmZ2MiOiIjMjkyODI4IiwiYmdjIjoiI0Y1RjVGNyIsInQiOjF9/R3VqcmF0J3MgZmlyc3QgRXY/komyca-3d-free-version-italic.png" alt="" />
                    </h1>
                    <h1 className="taditTitle3">
                    <img src="https://see.fontimg.com/api/renderfont4/rg1WO/eyJyIjoiZnMiLCJoIjozOSwidyI6MTAwMCwiZnMiOjM5LCJmZ2MiOiIjMjkyODI4IiwiYmdjIjoiI0Y1RjVGNyIsInQiOjF9/Zm9ybXVsYSBzdHVkZW50IGNhcg/komyca-3d-free-version-italic.png " alt="" />
                    </h1>
                  </div>


                  <div className="container">
        <div className="year">
            <p>YEAR</p>
            <h1>2024</h1>
        </div>
        <div className="separator"></div>
        <div className="stats">
            <div className="stat">
                <img src="src/pages/cars/taditImg/fast.png" alt="Wins"/>
                <p>SPEED</p>
                <h2>75 kmph</h2>
            </div>
          
            <div className="stat">
                <img src="src/pages/cars/taditImg/weight.png" alt="Poles"/>
                <p>WEIGHT</p>
                <h2>320 kg</h2>
            </div>
            <div className="stat">
                <img src="src/pages/cars/taditImg/competition.png" alt="Podiums"/>
                <p>COMPETITION</p>
                <a href="https://www.formulabharat.com/"> <h2>FBEV'24</h2> </a>
            </div>
            <div className="stat">
                <img src="src/pages/cars/taditImg/ranking.png" alt="Points"/>
                <p>RANK</p>
                <h2>19/108</h2>
            </div>
        </div>
    </div>


             
            
            
          
            </div>   


           <div className="tadit-info">
             
                <div className="info1" id="info1" >

                    <button id="showButton"><img className="plusBtn" src="src/pages/cars/taditImg/chasis.png" /></button>

                      <div id="spes1" className=" pinTextShow-1">
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


                <div className="info2" id="info2" >

                    <button id="showButton2"><img className="plusBtn" src="src/pages/cars/taditImg/suspension.png" /></button>

                      <div id="spes2" className=" pinTextShow-2">
                        <h3 className="racing">SUSPENSION</h3>
                        <ul>
                          <li>Track Width: 1210mm</li>
                          <li>Wheel Base: 1540mm</li>
                          <li>Double Wishbone</li>
                          <li>Pushrod Suspension</li>
                          <li style={{"fontSize":'18px'}}>13 inch MRF ZTD-1 Slick Tyres</li>
                        </ul>
                      </div>
                </div>



                  <div className="info3" id="info3" >

                    <button id="showButton3"><img className="plusBtn" src="src/pages/cars/taditImg/performance.png" /></button>

                      <div id="spes3" className=" pinTextShow-3">
                        <h3 className="racing">PERFORMANCE</h3>
                        <ul>
                          <li>0-60 kmph in 3 sec</li>
                          <li>Top speed : 75 kmph</li>
                          <li>1.5g Max Deceleration</li>
                        </ul>
                      </div>
                </div>

                    <div className="info4" id="info4" >

                    <button id="showButton4"><img className="plusBtn" src="src/pages/cars/taditImg/battery.png" /></button>

                      <div id="spes4" className=" pinTextShow-4">
                        <h3 className="racing">Battery Pack</h3>
                        <ul>
                        <li>Charging Time : 4 hrs</li>
                          <li>In hosue manufactured</li>
                          <li>7.36 kWh | 172V</li>
                          <li>A 123 20 AH LFP Cells</li>
                        </ul>
                      </div>
                </div>
                      

                      
              <div className="info5" id="info5" >

                      <button id="showButton5"><img className="plusBtn" src="src/pages/cars/taditImg/motor.png" /></button>

                      <div id="spes5" className=" pinTextShow-5">
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


      </div>







      <div className="carousel" data-gap="0">
        <figure>
          <Carouselcard img="Anshumat.jpg" name="XYZ" year="2023" text="lorem dsnfuiebfuibfferiubfiuerbfiurbfierbf" />
          <Carouselcard img="Eklavya.jpg" name="XYZ" year="2023" text="lorem dsnfuiebfuibfferiubfiuerbfiurbfierbf" />
          <Carouselcard img="Baja2014.jpg" name="XYZ" year="2023" text="lorem dsnfuiebfuibfferiubfiuerbfiurbfierbf" />
          <Carouselcard img="SUPRA2016.png" name="XYZ" year="2023" text="lorem dsnfuiebfuibfferiubfiuerbfiurbfierbf" />
          <Carouselcard img="CHITRAK.jpg" name="XYZ" year="2023" text="lorem dsnfuiebfuibfferiubfiuerbfiurbfierbf" />
          <Carouselcard img="GKDC2019.png" name="XYZ" year="2023" text="lorem dsnfuiebfuibfferiubfiuerbfiurbfierbf" />
          <Carouselcard img="EGKDC2020.png" name="XYZ" year="2023" text="lorem dsnfuiebfuibfferiubfiuerbfiurbfierbf" />
          <Carouselcard img="FBEV2023.png" name="XYZ" year="2023" text="lorem dsnfuiebfuibfferiubfiuerbfiurbfierbf" />
        </figure>
        <nav>
          <button className="nav prev">Prev</button>
          <button className="nav next">Next</button>
        </nav>
      </div>

      <Footer />


   
    </>
    
  );
};

export default Car;


