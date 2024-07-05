import React, { Component } from "react";
import "./alumni.scss";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import Ocards from "./alumniCards";
import { team2023 } from "./alumni2023";

export default class Alumni extends Component {
  render() {
    return (
      <div className="mainBody">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <div>
          <Header textColor="text-white" borderColor="text-white" />
          {/* <div className="alumniHero"> */}
          <h1 className="aHeading mt-20">Alumni</h1>
          <p className="aThank ">
            Thank you for your continued support and for being an integral part
            of our alumni family, We are deeply grateful for your contributions
            and dedication to our community's success
          </p>
          {/* </div> */}

          <div className="line"></div>

          <div className="row">
            {team2023.map((member, index) => {
              if (index < 5) {
                return (
                  <Ocards
                    key={index}
                    name={member.name}
                    year="2023"
                    company=""
                    linkedin=""
                  />
                );
              }
              console.log(index);
            })}
          </div>

          <div className="row">
            {team2023.map((member, index) => {
              if (index >= 5 && index < 10) {
                return (
                  <Ocards
                    key={index}
                    name={member.name}
                    year="2023"
                    company=""
                    linkedin=""
                  />
                );
              }
              console.log(index);
            })}
          </div>

          <div className="row">
            {team2023.map((member, index) => {
              if (index >= 10 && index < 15) {
                return (
                  <Ocards
                    key={index}
                    name={member.name}
                    year="2023"
                    company=""
                    linkedin=""
                  />
                );
              }
              console.log(index);
            })}
          </div>

          <div className="row">
            {team2023.map((member, index) => {
              if (index >= 15 && index < 20) {
                return (
                  <Ocards
                    key={index}
                    name={member.name}
                    year="2023"
                    company=""
                    linkedin=""
                  />
                );
              }
              console.log(index);
            })}
          </div>

          <div className="row">
            {team2023.map((member, index) => {
              if (index >= 20 && index < 25) {
                return (
                  <Ocards
                    key={index}
                    name={member.name}
                    year="2023"
                    company=""
                    linkedin=""
                  />
                );
              }
              console.log(index);
            })}
          </div>

          <div className="row">
            {team2023.map((member, index) => {
              if (index >= 25 && index < 30) {
                return (
                  <Ocards
                    key={index}
                    name={member.name}
                    year="2023"
                    company=""
                    linkedin=""
                  />
                );
              }
              console.log(index);
            })}
          </div>

          <div className="row">
            <Ocards
              name="Kush Dasadia"
              year="2022"
              company="Sun Petrochemicals Pvt. Ltd."
              linkedin=""
            />
            <Ocards
              name="Pratham Choukse"
              year="2022"
              company="Vedanta Limited - Aluminium Business"
              linkedin=""
            />

            <Ocards
              name="Rutuja Jadhav"
              year="2022"
              company="HPCL Rajasthan Refinery Limited"
              linkedin=""
            />

            <Ocards
              name="Nikunj Dave"
              year="2022"
              company="Honda Motorcycle and Scooter India Pvt. Ltd."
              linkedin=""
            />
            <Ocards
              name="Subham Lohar"
              year="2022"
              company="John Deere"
              linkedin=""
            />
          </div>
          <div className="row">
            <Ocards
              name="Aneesha Sengupta"
              year="2022"
              company="Micron Technology"
              linkedin=""
            />
            <Ocards
              name="Vraj Patel"
              year="2022"
              company="John Deere"
              linkedin=""
            />
            <Ocards
              name="Dhruvil Patel"
              year="2022"
              company="UPL Ltd."
              linkedin=""
            />
            <Ocards
              name="Aman Vyas"
              year="2022"
              company="John Deere"
              linkedin=""
            />
            <Ocards
              name="Janavi Popat"
              year="2022"
              company="Cairn Oil and Gasle"
              linkedin=""
            />
          </div>
          <div className="row">
            <Ocards
              name="Tejas Agrawal"
              year="2022"
              company="UPL Ltd."
              linkedin=""
            />
            <Ocards
              name="Mihir Varia"
              year="2022"
              company="Grasim Industries Limited"
              linkedin=""
            />

            <Ocards
              name="Prashant Chauhan"
              year="2022"
              company="Reliance Industries Ltd."
              linkedin=""
            />
            <Ocards
              name="Nishith Chaurasia"
              year="2022"
              company="TVS Motor Company"
              linkedin=""
            />
            <Ocards
              name="Nitin Ticroliya"
              year="2022"
              company="intelliflo"
              linkedin=""
            />
          </div>
          <div className="row">
            <Ocards
              name="Shubham Rathod"
              year="2022"
              company="Reliance Industries Ltd."
              linkedin=""
            />
            <Ocards
              name="Niraj Jagani"
              year="2022"
              company="JCB India Ltd."
              linkedin=""
            />
          </div>
          <div className="row">
            <Ocards
              name="Devansh Mamrawala"
              year="2021"
              company="BPCL"
              linkedin=""
            />
            <Ocards
              name="Nishant Mittal"
              year="2021"
              company="Optum"
              linkedin=""
            />
            <Ocards
              name="Oorja Dorkar"
              year="2021"
              company="Bajaj  Auto Ltd."
              linkedin=""
            />
            <Ocards
              name="Bhumik Patel"
              year="2021"
              company="Morris Garages India"
              linkedin=""
            />
            <Ocards
              name="Rajan Swami"
              year="2021"
              company="Automotive Research Association of India (ARIA)"
              linkedin=""
            />
          </div>
        </div>
        <div className="row">
          <Ocards
            name="Shaan Polra"
            year="2021"
            company="OTR (Australia)"
            linkedin=""
          />
          <Ocards name="Shulabh Yadav" year="2021" company="BPCL" linkedin="" />
          <Ocards
            name="Tirth Lodhiya"
            year="2021"
            company="Bharat Electronics Limited"
            linkedin=""
          />
          <Ocards name="Jayraj Shah" year="2021" company="BPCL" linkedin="" />
          <Ocards
            name="Khushali Patel"
            year="2021"
            company="John Deere"
            linkedin=""
          />
        </div>
        <div className="row">
          <Ocards
            name="Arunsinh Parmar"
            year="2021"
            company="Merkle Inc."
            linkedin=""
          />
        </div>
        <Footer />
      </div>
    );
  }
}
