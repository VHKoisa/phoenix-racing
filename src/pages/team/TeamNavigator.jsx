import React from "react";
import Team2022 from "./Team2022";
import Team2023 from "./Team2023";
import Team2024 from "./Team2024";
import { useState } from "react";

const TeamNavigator = (props) => {
  const [year, setYear] = useState("2024");
  return (
    <>
      <div className="flex justify-center">
        <div className={`${props.borderColor} flex w-2/4 justify-between border-2 rounded-xl`}>
          <button
            onClick={() => {
              setYear("2022");
            }}
            className={`${
              year == "2022" ? props.activeBgColor+" "+ props.activeTextColor : props.textColor
            } hidden md:flex  ${props.hoverTextColor} text-3xl font-serif border-r-2 ${props.borderColor} w-1/3 min-w-fit justify-center rounded-l-lg hover:bg-blue-950 hover:scale-110 transition ease-in "`}
          >
            2022
          </button>
          <button
            onClick={() => {
              setYear("2022");
            }}
            className={`${
              year == "2022" ? props.activeBgColor+" "+ props.activeTextColor : props.textColor
            } flex md:hidden   ${props.hoverTextColor} text-3xl font-serif border-r-2 ${props.borderColor} w-1/3 min-w-fit justify-center rounded-l-lg hover:bg-blue-950 hover:scale-110 transition ease-in "`}
          >
            22
          </button>
          <button
            onClick={() => {
              setYear("2023");
            }}
            className={`${
              year == "2023" ? props.activeBgColor+" "+ props.activeTextColor : props.textColor
            }  hidden md:flex  ${props.hoverTextColor} text-3xl font-serif border-r-2 ${props.borderColor} w-1/3 min-w-fit justify-center hover:bg-blue-950 hover:scale-110 transition ease-in`}
          >
            2023
          </button>
          <button
            onClick={() => {
              setYear("2023");
            }}
            className={`${
              year == "2023" ? props.activeBgColor+" "+ props.activeTextColor : props.textColor
            } flex md:hidden   ${props.hoverTextColor} text-3xl font-serif border-r-2 ${props.borderColor} w-1/3 min-w-fit justify-center hover:bg-blue-950 hover:scale-110 transition ease-in`}
          >
            23
          </button>
          <button
            onClick={() => {
              setYear("2024");
            }}
            className={`${
              year == "2024" ? props.activeBgColor+" "+ props.activeTextColor : props.textColor
            } hidden md:flex  ${props.hoverTextColor} text-3xl font-serif w-1/3 min-w-fit justify-center rounded-r-lg hover:bg-blue-950 hover:scale-110 transition ease-in`}
          >
            2024
          </button>
          <button
            onClick={() => {
              setYear("2024");
            }}
            className={`${
              year == "2024" ? props.activeBgColor+" "+ props.activeTextColor : props.textColor
            } flex md:hidden  ${props.hoverTextColor} text-3xl font-serif w-1/3 min-w-fit justify-center rounded-r-lg hover:bg-blue-950 hover:scale-110 transition ease-in`}
          >
            24
          </button>
        </div>
       </div>
      <div className={`${props.textColor} flex justify-center my-5 text-3xl font-serif`}>
        TEAM {year}
      </div>
      {year == "2022" && <Team2022 />}
      {year == "2023" && <Team2023 />}
      {year == "2024" && <Team2024 />}
    </>
  );
};

export default TeamNavigator;
