import React from "react";
import "./card.css";
import { useState } from "react";

const Card = (props) => {
  // Backside of card
  // const BackCard = () => {
  //   return(
  //     <>
  //       <div className="text-blue-950 back">
  //         <div className="text-2xl font-bold flex justify-center">
  //           {props.name}
  //         </div>
  //         <div className="flex justify-center text-xl">{props.position}</div>
  //       </div>
  //     </>
  //   )
  // };
  const cardStyle = {
    borderRadius: "30px",
    boxShadow: "-7px -7px 7px",
    // boxShadow:  "-7px -7px 7px, 7px 7px 7px "
  };
  const imgStyle = {
    borderTopLeftRadius: "30px",
    borderTopRightRadius: "30px",
  };
  const imageAddr = "/src/assets/team/" + props.photo;
  const [turn, setTurn] = useState("front");

  // Frontside of card
  // const FrontCard = () => {
  //   return (
  //     <>
  //       <div>
  //         <img
  //           src={imageAddr}
  //           className="h-60"
  //           style={imgStyle}
  //           alt="Card Image"
  //         />
  //       </div>
  //       <div className="text-blue-950">
  //         <div className="text-2xl font-bold flex justify-center">
  //           {props.name}
  //         </div>
  //         <div className="flex justify-center text-xl">{props.position}</div>
  //       </div>
  //     </>
  //   );
  // };

  return (
    <div className="flip-card mb-5 mx-10 ">
      <div style={cardStyle} className="w-48 bg-white flip-card-inner">
        <div className="flip-card-back w-full h-full flex justify-center items-center">
          <div className="text-blue-950  ">
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
              className="h-60"
              style={imgStyle}
              alt="Card Image"
            />
          </div>
          <div className="text-blue-950">
            <div className="text-2xl font-bold flex justify-center">
              {props.name}
            </div>
            <div className="flex justify-center text-xl">{props.position}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
