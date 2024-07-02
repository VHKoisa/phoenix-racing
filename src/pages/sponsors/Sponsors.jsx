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
              nurturing young Indian talent.  Our
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
          <div className="img11">
          
          <img
            src={
              import.meta.env.BASE_URL + "/sponsors/logo/maksteel.jpg"
            }
            alt=""
            className="logo"
          />
          </div>
          <img
            src={import.meta.env.BASE_URL + "/sponsors/logo/agni.png"}
            alt=""
            className="logo"
          />
          <img
            src={
              import.meta.env.BASE_URL + "/sponsors/logo/anupam.jpg"
            }
            alt=""
            className="logo"
          />
        </div>

        <SliderDesign />
            <div className="line2">
              <img src={import.meta.env.BASE_URL +'/sponsors/logo/formula.png'} className="racingCar" />

            </div>
        <h1 className="sponsorsHeading2">PAST SPONSORS</h1>

        <SliderDesign2 />
      </div>
              <div className="ending">

                <div className="brochure">
                <h1 className="broHead">Want to sponsor us?</h1>
              

                <a className=" text-blue-900 text-2xl " href="/phoenix-racing/public/sponsors/logo/brochure.pdf">View brochure</a>
                <button
                class="flex items-center bg-blue-400  gap-1 px-6 py-4 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
              >
                CONNECT
                <svg
                  class="w-5 h-5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </button>
         
                </div>
             



            <div className="thanks  "><div class="card">
  <div
    class="relative bg-white w-[300px] sm:w-[350px] group transition-all duration-700 aspect-video flex items-center justify-center"
  >
    <div
      class="transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-blue-200 w-full h-full absolute group-hover:-translate-y-32"
    >
      <p class="text-xl sm:text-3xl font-semibold text-gray-500 font-serif">
        Thank You
      </p>
      <p class="px-10 text-[10px] sm:text-[16px] text-gray-700">
        It’s so nice that you had the time to view this idea
      </p>
      <p class="font-serif text-[16px] sm:text-[12px text-gray-700">
        Wishing you a fantastic day ahead!
      </p>
    
    </div>
    <button
      class="seal bg-rose-500 text-red-800 w-10 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900"
    >
      FASE
    </button>
    <div
      class="tp transition-all duration-1000 group-hover:duration-100 bg-amber-200 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"
    ></div>
    <div
      class="lft transition-all duration-700 absolute w-full h-full bg-amber-300  [clip-path:polygon(50%_50%,_0_0,_0_100%)]"
    ></div>
    <div
      class="rgt transition-all duration-700 absolute w-full h-full bg-amber-200  [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"
    ></div>
    <div
      class="btm transition-all duration-700 absolute w-full h-full  bg-amber-300 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"
    ></div>
  </div>
</div>
</div>
</div>
      <Footer />
    </>
  );
};

export default Sponsors;
