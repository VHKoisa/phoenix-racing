import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import VideoSrcDesktop from "/desktop.mp4";
import VideoSrcMobile from "/mobile.mov";
import "../about/about.css";
import CountUpAnimation from "./CountUpAnimation";
import { Carousel } from "./Carousel";
import Testimonials from "./Testimonials";
import News from "./News";
import { Helmet } from 'react-helmet';


const About = () => {
  return (
    <>
    <Helmet>
        <title>Phoenix Racing | Formula SAE Racing Team from NIT Surat</title>
        <meta name="description" content="Phoenix Racing is the Formula SAE racing team from NIT Surat. We design, build, and compete with high-performance race cars in competitions. Discover our journey, achievements, and innovation." />
        <meta name="keywords" content="Formula SAE racing team, Phoenix Racing, NIT Surat,SVNIT, Motorsport engineering, Race car design, Automotive innovation, Engineering competition" />
      </Helmet>
      <Header />
      <div
        id="content"
        className="flex flex-col"
        onLoadStart={() => {
          window.innerWidth >= 1024
            ? (content.style.height = `${window.innerHeight - 80}px`)
            : (content.style.height = `auto`);
        }}
      >
        <div className="h-auto lg:h-full overflow-y-hidden relative">
          <div className="hidden lg:flex justify-center">
            <a
              href="#main"
              className="btnn text-xs lg:w-1/6 p-1 border-2 lg:text-xl text-white rounded-3xl border-white lg:border-4  absolute  bottom-2 lg:p-3 z-10"
            >
              <button className="w-full">KNOW MORE</button>
            </a>
          </div>
          <div className="">
            <video
              src={
                window.innerWidth >= 1024
                  ? VideoSrcDesktop
                  : VideoSrcMobile
              }
              autoPlay
              muted
              loop
              className="object-fill h-auto lg:h-full -z-10 lg:fixed"
              width="100%"
            ></video>
          </div>
        </div>
      </div>
      <div className="main" id="main">
        <div className="pt-10 flex flex-col lg:flex-row about">
          <div className="lg:flex">
            <img src={import.meta.env.BASE_URL +"/about/1.png"} width="900px" height="400px" />
          </div>
          <div className="w-fit p-10">
            <div className="text-center lg:text-left text-5xl lg:text-6xl   text-blue-800">
              About Us
            </div>
            <div className="mt-10 text-l lg:text-xl   text-slate-600 tracking-wider">
              Team Phoenix Racing is a technical student chapter affiliated with
              SVNIT, consisting of over 60 students from various engineering
              disciplines. Our primary objective is to provide a platform for
              aspiring engineers to excel, acquire practical knowledge, and gain
              exposure to real-world challenges. Since our establishment in
              2005, we have actively participated in and successfully competed
              in a range of competitions, including Baja, Supra SAE, Go-Kart,
              and Formula Bharat. These endeavors have involved the complete
              design, manufacturing, and management of projects, all carried out
              by our dedicated student team. Embracing the principles of
              sustainability and electrification, we have made a significant
              transition towards the production of electric vehicles starting in
              2022.
            </div>
          </div>
        </div>
        {/* <div className="bg-white py-20 px-7">
          <Carousel
            slides={slides}
            autoplay={true}
            arrowBorders={true}
            arrows={true}
          />
        </div> */}
        {/* <div className="lg:flex justify-between p-10 py-5 bg-white">
        <div className="lg:w-1/2 my-10 justify-center items-center w-full flex">
        <div className="text-5xl lg:text-6xl   text-blue-800">
        <span className="lg:text-9xl">A</span>bout{" "}
        <span className="lg:text-9xl">U</span>s
        </div>
        </div>
        <div className="lg:w-1/2 text-l lg:text-xl   text-blue-800 tracking-wider">
          Team Phoenix Racing is a technical student chapter affiliated with
          SVNIT, consisting of over 60 students from various engineering
          disciplines. Our primary objective is to provide a platform for
          postgraduate programs, three M.Sc. programs, and a five-year
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
        </div> */}
        <div className="flex justify-around p-5 my-20 flex-wrap gap-5 lg:gap-4">
          <CountUpAnimation
            headingName="Cars"
            initialValue={0}
            targetValue={17}
            text="Delivered on track"
          />
          <CountUpAnimation
            headingName="Awards"
            initialValue={0}
            targetValue={22}
            text="on our name"
          />
          <CountUpAnimation
            headingName="Generation"
            initialValue={0}
            targetValue={18}
            text="years of excellence"
          />
        </div>

        <div className="pb-5 news">
          <div className="flex justify-center   text-4xl lg:text-6xl p-5 text-blue-800">
            Latest Updates
          </div>
          <div className="flex justify-around">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div className="grid gap-4">
                <News
                  imgName="3.jpeg"
                  heading="Most Active Club of 2024"
                  text="Team Phoenix Racing is awarded as the most active club of season 2024 by FORMULA BHARAT"
                  date="20/01/2024"
                />
              </div>
              <div className="grid gap-4">
                <News
                  imgName="4.jpeg"
                  heading="Kari Motorsport"
                  text="Team Phoenix Racing in Kari Motorsport, Coimbatore"
                  date="20/01/2024"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white pt-10 flex flex-col lg:flex-row about pb-5">
          <div className="flex justify-center px-3">
            <img
              src={import.meta.env.BASE_URL + "/about/2.png"}
              width="700px"
              height="350px"
            />
          </div>
          <div className="w-fit p-10">
            <div className="text-center lg:text-left text-5xl lg:text-6xl   text-blue-800">
              About SVNIT
            </div>
            <div className="mt-10 text-l lg:text-xl   text-slate-600 tracking-wider">
              Established in 1961 as one of the RECs, Sardar Vallabhbhai
              National Institute of Technology aimed to provide technical
              education in Civil, Mechanical, and Electrical Engineering. Over
              time, additional undergraduate programs were introduced, including
              Electronics Engineering in 1983-84, Computer Engineering and
              Production Engineering in 1988-89, and Chemical Engineering in
              1995-96. In 2002, the institute received recognition as a "Deemed
              University" with the new name Sardar Vallabhbhai National
              Institute of Technology (SVNIT), Surat, through the University
              Grants Commission (UGC) Act. Subsequently, in 2007, it obtained
              the prestigious status of an "Institute of National Importance."
              Currently, SVNIT offers six undergraduate programs, nineteen
              integrated program that includes a doctoral program in all the
              aforementioned disciplines.
            </div>
          </div>
        </div>

        <Testimonials />

        <div className="bg-white   py-10">
          <div className="text-6xl text-blue-800 text-center py-5">
            Faculty Advisors
          </div>

          <div className="flex flex-wrap justify-evenly">
            <div className="py-5 flex flex-col items-center">
              <img
                src={import.meta.env.BASE_URL +"/about/RDShahPic.png"}
                alt="R. D. Shah"
                className="rounded-full w-52 h-56 border-4 border-blue-800"
              />
              <div className="text-center pt-5">
                <div className="text-xl text-blue-800">Dr. R. D. Shah</div>
                <div className="text-lg text-slate-600">
                  Associate Professor, Ph. D.
                </div>
                <div className="text-blue-800 text-lg">
                  <a href="mailto:rds@med.svnit.ac.in">rds@med.svnit.ac.in</a>
                </div>
              </div>
            </div>
            <div className="py-5 flex flex-col items-center">
              <img
                src={import.meta.env.BASE_URL +"/about/RohanPandePic.jpg"}
                alt="Rohan Pande"
                className="rounded-full w-52 h-56 border-4 border-blue-800"
              />
              <div className="text-center pt-5">
                <div className="text-xl text-blue-800">Dr. Rohan Pande</div>
                <div className="text-lg text-slate-600">
                  Assistant Professor, Ph. D.
                </div>
                <div className="text-blue-800 text-lg">
                  <a href="mailto:rohanpande@med.svnit.ac.in">
                    rohanpande@med.svnit.ac.in
                  </a>
                </div>
              </div>
            </div>
            <div className="py-5 flex flex-col items-center">
              <img
                src={import.meta.env.BASE_URL +"/about/JVPic.png"}
                alt="J Venkataramanaiah"
                className="rounded-full w-52 h-56 border-4 border-blue-800"
              />
              <div className="text-center pt-5">
                <div className="text-xl text-blue-800">
                  Dr. J. Venkataramanaiah
                </div>
                <div className="text-lg text-slate-600">
                  Assistant Professor, Ph. D.
                </div>
                <div className="text-blue-800 text-lg">
                  <a href="mailto:jvenkataramana@ee.svnit.ac.in">
                    jvenkataramana@ee.svnit.ac.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
