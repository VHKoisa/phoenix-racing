import React from "react";

const Carouselcard = (props) => {
  const imgAddr = import.meta.env.BASE_URL + "/cars/prevCars/" + props.img;
  return (
    <><div className="border-white border-2 w-full h-full main"> 
        <img src={imgAddr} alt={props.img} className="w-full h-3/4" />
        <div className="text-blue-950 h-1/4 bg-slate-300 flex flex-col justify-center">
          <div className="text-center text-xl font-bold">{props.name}</div>
          <div className="text-center">{props.year}</div>
          <div className="text-center">{props.text}</div>
        </div>
      </div>
    </>
  );
};

export default Carouselcard;
