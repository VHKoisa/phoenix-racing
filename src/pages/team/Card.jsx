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
      <div style={cardStyle} className="w-48 bg-blue-800 text-white flip-card-inner">
        <div className="flip-card-back w-full h-full flex justify-center items-center">
        <a
              className="size-10 lg:w-1/4 m-2"
              href={props.linkedin}
              target="_blank"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="linkedin-in"
                className=""
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
              </svg>
            </a>
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
