import React from "react";
import "./card.css";
import { useState } from "react";

const Card = (props) => {
  const cardStyle = {
    borderRadius: "15px",
    // boxShadow: "-7px -7px 7px",
    // boxShadow:  "-7px -7px 7px, 7px 7px 7px "
  };
  const imgStyle = {
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  };
  const imageAddr = "/src/assets/team/" + props.photo;
  const [turn, setTurn] = useState("front");

  return (
    <div className="flip-card mb-5 mx-10 ">
      <div style={cardStyle} className="w-48 bg-blue-950 text-white flip-card-inner">
        <div className="flip-card-back w-full h-full flex justify-center items-center">
          <div className="text-white text-center">
            <div className="text-2xl font-bold flex justify-center">
              {props.name}
            </div>
            <div className="flex justify-center text-xl">{props.position}</div>
          </div>
        </div>

        <div className="flip-card-front">
          <div>
            <img
              src={imageAddr}
              className="h-60 w-48"
              style={imgStyle}
              alt="Card Image"
            />
          </div>
          <div className="text-center">
            <div className="text-xl font-bold flex justify-center">
              {props.name}
            </div>
            <div className="flex justify-center text-lg">{props.position}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
