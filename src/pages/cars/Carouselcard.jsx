import React from "react";

const Carouselcard = (props) => {
  const imgAddr = "/cars/" + props.img;
  return (
    <><div className="border-white  border-2 h-fit main"> 
        <img src={imgAddr} alt={props.img} className="w-full h-96" />
        <div className="text-blue-950 h-24   bg-slate-300 flex flex-col justify-center">
          <div className="text-center text-xl font-bold">{props.name}</div>
          <div className="text-center">{props.year}</div>
          <div className="text-center">{props.text}</div>
        </div>
      </div>
    </>
  );
};

export default Carouselcard;
