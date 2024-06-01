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
    addEventListener("keydown", (event) => {
      console.log(event.key);
    });
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
  }
  return (
    <>
      <Header />

      <div className="carousel" data-gap="0">
        <figure>
          <Carouselcard
            img="Anshumat.jpg"
            name="Anshumat"
            year="2010"
            text=""
          />
          <Carouselcard
            img="Eklavya.jpg"
            name="Eklavya"
            year="2011"
            text="39th out of 80 in MINI BAJA 2011"
          />
          <Carouselcard
            img="Baja2014.jpg"
            name="Baja"
            year="2014"
            text="4th in overall ranking, 1st in presentation, 2nd in cost report"
          />
          <Carouselcard
            img="SUPRA2016.png"
            name="Supra SAE"
            year="2016"
            text="13th in all over India"
          />
          <Carouselcard img="CHITRAK.jpg" name="Chitrak" year="2018" text="" />
          <Carouselcard
            img="GKDC2019.png"
            name="GKDC"
            year="2019"
            text="Overall champions, 1st in skidpad, 1st in autocross, 1st in endurance and fuel economy, Best driver, best design, best innovation"
          />
          <Carouselcard
            img="EGKDC2020.png"
            name="EGKDC"
            year="2020"
            text="Overall champions, 1st in Endurance and fuel economy, best driver award"
          />
          <Carouselcard
            img="FBEV2023.png"
            name="FBEV"
            year="2023"
            text="Overall 3rd, 1st in concept goals and management report, 3rd in business plan presentation"
          />
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
