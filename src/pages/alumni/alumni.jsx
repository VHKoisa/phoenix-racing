import React, { Component } from "react";
import "./alumni.scss";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import Ocards from "./alumniCards"
// import {team2023} from './alumni2023';

export default class Alumni extends Component {
   
  render() {
    return (
      <div className="mainBody">    
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>


      
      <div>
        <Header textColor="text-white" borderColor="text-white" />
        {/* <div className="alumniHero"> */}
        <h1 className="aHeading mt-20">Alumni</h1>
        <p className="aThank ">
          Thank you for your continued support and for being an integral part of
          our alumni family, We are deeply grateful for your contributions and
          dedication to our community's success
        </p>
        {/* </div> */}

        <div className="line"></div>

      {/* <div className="row">
      const newArr = team2023.map(ps)

      function ps(p) {
               <Ocards
               name={p.name}
               year="2023"
               company={p.department}
               linkedin={p.linkedin}
         
               />
      }


      </div> */}



     <div className="row">
      <Ocards
      name="Kush Dasadia"
      year="2023"
      company='Sun Petrochemicals Pvt. Ltd.'
      linkedin=""

      />
         <Ocards
      name="Pratham Choukse"
      year="2023"
      company='Vedanta Limited - Aluminium Business'
      linkedin=""
      />
       
     
         <Ocards
      name="Rutuja Jadhav"
      year="2023"
      company='HPCL Rajasthan Refinery Limited'
      linkedin=""
      />
     
         <Ocards
      name="Nikunj Dave"
      year="2023"
      company="Honda Motorcycle and Scooter India Pvt. Ltd."
      linkedin=""
      />
         <Ocards
      name="Subham Lohar"
      year="2023"
      company='John Deere'
      linkedin=""
      />
     </div>
     <div className="row">
      <Ocards
      name="Aneesha Sengupta"
      year="2023"
      company='Micron Technology'
      linkedin=""
      />
          <Ocards
      name="Vraj Patel"
      year="2023"
      company='John Deere'
      linkedin=""
      />
         <Ocards
      name="Dhruvil Patel"
      year="2023"
      company='UPL Ltd.'
      linkedin=""
      />
         <Ocards
      name="Aman Vyas"
      year="2023"
      company='John Deere'
      linkedin=""
      />
         <Ocards
      name="Janavi Popat"
      year="2023"
      company='Cairn Oil and Gasle'
      linkedin=""
      />
       
     </div>
     <div className="row">
      <Ocards
      name="Tejas Agrawal"
      year="2023"
      company='UPL Ltd.'
      linkedin=""
      />
        <Ocards
      name="Mihir Varia"
      year="2023"
      company='Grasim Industries Limited'
      linkedin=""

      />
      
         <Ocards
      name="Prashant Chauhan"
      year="2023"
      company='Reliance Industries Ltd.'
      linkedin=""
      />
        <Ocards
      name="Nishith Chaurasia"
      year="2023"
      company='TVS Motor Company'
      linkedin=""
      />
         <Ocards
      name="Nitin Ticroliya"
      year="2023"
      company='intelliflo'
      linkedin=""
      />
     
     </div>
     <div className="row">
     <Ocards
      name="Shubham Rathod"
      year="2023"
      company='Reliance Industries Ltd.'
      linkedin=""
      />
         <Ocards
      name="Niraj Jagani"
      year="2023"
      company='JCB India Ltd.'
      linkedin=""
      />
  
      <Ocards
      name="Jayraj Shah"
      year="2022"
      company='BPCL'
      linkedin=""
      />
         <Ocards
      name="Khushali Patel"
      year="2022"
      company='John Deere'
      linkedin=""
      />
     
   
      <Ocards
      name="Arunsinh Parmar"
      year="2022"
      company='Merkle Inc.'
      linkedin=""
      />
     </div>
     <div className="row">
     <Ocards
      name="Devansh Mamrawala"
      year="2022"
      company='BPCL'
      linkedin=""
      />
      <Ocards
       name="Nishant Mittal"
       year="2022"
       company='Optum'
       linkedin=""
       />
         <Ocards
       name="Oorja Dorkar"
       year="2022"
       company='Bajaj  Auto Ltd.'
       linkedin=""
       />
          <Ocards
       name="Bhumik Patel"
       year="2022"
       company='Morris Garages India'
       linkedin=""
       />
           <Ocards
      name="Rajan Swami"
      year="2022"
      company='Automotive Research Association of India (ARIA)'
      linkedin=""
      /></div>
     
      </div>
     <div className="row"> 
      <Ocards
      name="Shaan Polra"
      year="2022"
      company='OTR (Australia)'
      linkedin=""
      />
         <Ocards
      name="Shulabh Yadav"
      year="2022"
      company='BPCL'
      linkedin=""
      />
           <Ocards
       name="Tirth Lodhiya"
       year="2022"
       company='Bharat Electronics Limited'
       linkedin=""
       />
       
      
   
       
        </div>
        <Footer />

        </div>
        
    );
  }
}
