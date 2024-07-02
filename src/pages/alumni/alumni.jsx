import React, { Component } from "react";
// import card from "/src/pages/team/Card.jsx"
import "./alumni.scss";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import Ocards from "./alumniCards"


export default class Alumni extends Component {
  render() {
    return (
      <div className="mainA mt-20 text-black">
        <Header />
        <div className="alumniHero">
        <h1 className="aHeading">Alumni</h1>
        <p className="aThank ">
          Thank you for your continued support and for being an integral part of
          our alumni family, We are deeply grateful for your contributions and
          dedication to our community's success
        </p>
        </div>

        <div className="line"></div>

        <div className="row mx-4 my-4">
          <Ocards
          name='Shashank Raj'
          company ="LaxmiChitFund"
          linkedin =""
          />
            <Ocards
          name='Shashank Raj'
          company ="LaxmiChitFund"
          linkedin =""
          />
            <Ocards
          name='Shashank Raj'
          company ="LaxmiChitFund"
          linkedin =""
          />
            <Ocards
          name='Shashank Raj'
          company ="LaxmiChitFund"
          linkedin =""
          />
        </div>
        <div className="row mx-4 my-4">
          <Ocards
          name='Shashank Raj'
          company ="LaxmiChitFund"
          linkedin =""
          />
            <Ocards
          name='Shashank Raj'
          company ="LaxmiChitFund"
          linkedin =""
          />
            <Ocards
          name='Shashank Raj'
          company ="LaxmiChitFund"
          linkedin =""
          />
            <Ocards
          name='Shashank Raj'
          company ="LaxmiChitFund"
          linkedin =""
          />
        </div>
        <div className="row mx-4 my-4">
          <Ocards
          name='Shashank Raj'
          company ="LaxmiChitFund"
          linkedin =""
          />
            <Ocards
          name='Shashank Raj'
          company ="LaxmiChitFund"
          linkedin =""
          />
            <Ocards
          name='Shashank Raj'
          company ="LaxmiChitFund"
          linkedin =""
          />
            <Ocards
          name='Shashank Raj'
          company ="LaxmiChitFund"
          linkedin =""
          />
        </div>
        <div className="row mx-4 my-4">
          <Ocards
          name='Shashank Raj'
          company ="LaxmiChitFund"
          linkedin =""
          />
            <Ocards
          name='Shashank Raj'
          company ="LaxmiChitFund"
          linkedin =""
          />
            <Ocards
          name='Shashank Raj'
          company ="LaxmiChitFund"
          linkedin =""
          />
            <Ocards
          name='Shashank Raj'
          company ="LaxmiChitFund"
          linkedin =""
          />
        </div>
        <div className="row mx-4 my-4">
          <Ocards
          name='Shashank Raj'
          company ="LaxmiChitFund"
          linkedin =""
          />
            <Ocards
          name='Shashank Raj'
          company ="LaxmiChitFund"
          linkedin =""
          />
            <Ocards
          name='Shashank Raj'
          company ="LaxmiChitFund"
          linkedin =""
          />
            <Ocards
          name='Shashank Raj'
          company ="LaxmiChitFund"
          linkedin =""
          />
        </div>
        <div className="row mx-4 my-4">
          <Ocards
          name='Shashank Raj'
          company ="LaxmiChitFund"
          linkedin =""
          />
            <Ocards
          name='Shashank Raj'
          company ="LaxmiChitFund"
          linkedin =""
          />
            <Ocards
          name='Shashank Raj'
          company ="LaxmiChitFund"
          linkedin =""
          />
            <Ocards
          name='Shashank Raj'
          company ="LaxmiChitFund"
          linkedin =""
          />
        </div>
        
   
       

        <Footer />
      </div>
    );
  }
}
