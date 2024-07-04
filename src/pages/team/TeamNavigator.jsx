import React from "react";
import Team2024 from "./Team2024";
import Team2025 from "./Team2025";
import { useState } from "react";
import "./team.css"

const TeamNavigator = (props) => {
  const [year, setYear] = useState("2025");
  return (
    <>
      <div className="flex justify-center">
        <div className={`${props.borderColor} flex w-2/4 justify-between border-2 rounded-xl`}>
          <button
            onClick={() => {
              setYear("2024");
            }}
            className={`${
              year == "2024" ? props.activeBgColor+" "+ props.activeTextColor : props.textColor
            } flex  ${props.hoverTextColor} text-3xl   border-r-2 ${props.borderColor} w-1/2 min-w-fit justify-center rounded-l-lg ${props.hoverBorderColor} hover:scale-110 transition ease-in "`}
          >
            2024
          </button>
  
          <button
            onClick={() => {
              setYear("2025");
            }}
            className={`${
              year == "2025" ? props.activeBgColor+" "+ props.activeTextColor : props.textColor
            } flex  ${props.hoverTextColor} text-3xl   w-1/2 min-w-fit justify-center rounded-r-lg ${props.hoverBorderColor} hover:scale-110 transition ease-in`}
          >
            2025
          </button>
          
        </div>
       </div>
      <div className={`${props.textColor} flex justify-center my-5 text-3xl  `}>
 
        TEAM {year}
          
      </div>

      {year == "2024" && <Team2024 />}
      {year == "2025" && <Team2025 />}
    </>
  );
};

export default TeamNavigator;
