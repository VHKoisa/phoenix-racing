import React from "react";

const Carouselcard = (props) => {
  const imgAddr = "/cars/prevCars/" + props.img;
  return (
    <><div className="border-white border-2 w-full h-full main"> 
        <img src={imgAddr} alt={props.img} id="carousel-img" className="w-full h-3/4" />
        <div className="text-white leading-5 lg:leading-6 h-1/4 flex flex-col justify-center oldCarInfo" >
          <div className="text-center text-xl font-bold">{props.name}</div>
          <div className="text-center">{props.year}</div>
          <div className="text-center">{props.text}</div>
        </div>
      </div>
    </>
  );
};

export default Carouselcard;
