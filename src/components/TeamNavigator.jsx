import React from "react";
import Team2022 from "../Team2022";
import Team2023 from "../Team2023";
import Team2024 from "../Team2024";
import { useState } from "react";

const TeamNavigator = () => {
  const [year, setYear] = useState("2024");
  return (
    <>
      <div className="flex justify-center">
        <div className="flex w-1/4 justify-between border-2 rounded-xl">
          <button
            onClick={() => {setYear("2022")}}
            className="text-white text-3xl font-serif border-r-2 w-1/3 min-w-fit flex justify-center rounded-l-xl hover:bg-black hover:scale-110 transition ease-in "
          >
            2022
          </button>
          <button
            onClick={() => {setYear("2023")}}
            className="text-white text-3xl font-serif border-r-2 w-1/3 min-w-fit flex justify-center hover:bg-black hover:scale-110 transition ease-in"
          >
            2023
          </button>
          <button
            onClick={() => {setYear("2024")}}
            className="text-white text-3xl font-serif w-1/3 min-w-fit flex justify-center rounded-r-xl hover:bg-black hover:scale-110 transition ease-in"
          >
            2024
          </button>
        </div>
      </div>
      <div className="flex justify-center my-5 text-white text-3xl font-serif">TEAM {year}</div>
      {year == "2022" && <Team2022 />}
      {year == "2023" && <Team2023 />}
      {year == "2024" && <Team2024 />}
    </>
  );
};

export default TeamNavigator;
