import React from "react";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import "./Sponsors.css";
import SliderDesign from "/src/pages/sponsors/SliderDesign.jsx";
import SliderDesign2 from "/src/pages/sponsors/SliderDesign2.jsx";

const Sponsors = () => {
  return (
    <>
      <Header />
      <div className="main">
        <div class="hero">
          <div class="hero-image pt-20">
            <h1>To Our Sponsors</h1>
            <p>
              Team Phoenix Racing extends its heartfelt appreciation to the
              sponsors who have generously supported us, enabling students to
              explore their capabilities through real-world competition and
              nurturing young Indian talent. With their invaluable assistance,
              Team Phoenix Racing is empowered to pursue innovative design and
              development, striving to become a globally respected team. Our
              sponsors play a crucial role in providing the means and resources
              necessary for our success, allow us to push boundaries and make a
              meaningful impact in the lives of our team members and future
              engineers. We express our deep gratitude to all our sponsors and
              donors for their unwavering dedication and contributions. It is an
              honor for us to represent your name, and we eagerly anticipate
              showcasing our abilities to the best of our capabilities.
            </p>
            <p>Thank you everyone who supports our team.</p>
          </div>
        </div>

        <h1 className="sponsorsHeading1">SPONSORS FBEV'24</h1>

        <div className="platinum">
          <img
            src={
              import.meta.env.BASE_URL + "/src/pages/sponsors/logo/maksteel.jpg"
            }
            alt=""
            className="logo"
          />
          <img
            src={import.meta.env.BASE_URL + "/src/pages/sponsors/logo/agni.png"}
            alt=""
            className="logo"
          />
          <img
            src={
              import.meta.env.BASE_URL + "/src/pages/sponsors/logo/anupam.jpg"
            }
            alt=""
            className="logo"
          />
        </div>

        <SliderDesign />

        <h1 className="sponsorsHeading2">PAST SPONSORS</h1>

        <SliderDesign2 />
      </div>
      <Footer />
    </>
  );
};

export default Sponsors;
