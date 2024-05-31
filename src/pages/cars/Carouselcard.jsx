import React from "react";

const Carouselcard = (props) => {
  const imgAddr = "/src/assets/cars/" + props.img;
  return (
    <>
      <div className="border-white border-2 h-fit main">
        <img src={imgAddr} alt={props.img} className="w-full h-96" />
        <div className="text-white">
          <div>{props.name}</div>
          <div>{props.year}</div>
          <div>{props.text}</div>
        </div>
      </div>
    </>
  );
};

export default Carouselcard;
