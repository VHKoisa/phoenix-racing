import Card from "./components/Card";
import React from 'react'

const Team2022 = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className=" flex w-2/3 justify-between">
          <Card photo="team.jpeg" name="Vatsal Koisa" position="Chairperson" />
          <Card photo="team.jpeg" name="Vatsal " position="Chairperson" />
          <Card photo="team.jpeg" name="Vatsal Koisa" position="Chairperson" />
        </div>
      </div>
    </div>
  )
}

export default Team2022
