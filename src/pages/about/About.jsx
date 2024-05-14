import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import VideoSrc from "../../assets/Video1.mp4";
import "../about/about.css";

const About = () => {
  const height = window.innerHeight - 80;
  console.log(height)
  // content.style.height = `${height }`
  return (
    <>
      <Header />
      <div id="content" className="flex flex-col"  onLoadStart={() => {(window.innerWidth >= 1024)?content.style.height = `${window.innerHeight - 80}px` : content.style.height = `auto`}}>
        <div className="h-auto lg:h-full overflow-y-hidden relative">
          <div className="flex justify-center">
            <button className=" text-xs lg:w-1/6 p-1 border-2 lg:text-xl text-white rounded-3xl border-white lg:border-4  absolute  bottom-2 lg:p-3 btnn z-10">
              KNOW MORE
            </button>
          </div>
          <div className="">
            <video
              src={VideoSrc}
              autoPlay
              muted
              loop
              className="object-fill h-auto lg:h-full -z-10 lg:fixed"
              width="100%"
            ></video>
          </div>
        </div>
      </div>
      <hr className="h-4 bg-white" />

      <div className="lg:flex justify-between p-10 py-5 bg-blue-950">
        <div className="lg:w-1/2 my-10 justify-center items-center w-full flex">
          <div className="text-5xl lg:text-6xl font-serif text-white">
            <span className="lg:text-9xl">A</span>bout{" "}
            <span className="lg:text-9xl">U</span>s
          </div>
        </div>
        <div className="lg:w-1/2 text-l lg:text-xl font-serif text-white tracking-wider">
          Team Phoenix Racing is a technical student chapter affiliated with
          SVNIT, consisting of over 60 students from various engineering
          disciplines. Our primary objective is to provide a platform for
          aspiring engineers to excel, acquire practical knowledge, and gain
          exposure to real-world challenges. Since our establishment in 2005, we
          have actively participated in and successfully competed in a range of
          competitions, including Baja, Supra SAE, Go-Kart, and Formula Bharat.
          These endeavors have involved the complete design, manufacturing, and
          management of projects, all carried out by our dedicated student team.
          Embracing the principles of sustainability and electrification, we
          have made a significant transition towards the production of electric
          vehicles starting in 2022.
        </div>
      </div>

      <hr className="h-4 bg-white" />

      <Footer />
    </>
  );
};

export default About;
