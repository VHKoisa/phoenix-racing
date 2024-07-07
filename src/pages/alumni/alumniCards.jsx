import React from 'react'
import './alumniCards.css'
// import PropTypes from 'prop-types'



const alumniCards = (props) => {
  return (
    <div className="card my-4 ">
    <div className="card-border-top">
    </div>
    <div className="img">
      <img src="/user.png" alt="" />
  
    </div>
    <span> {props.name} </span>
    
    <p className="job">{props.year} <br /> {props.company} </p>
    {/* <p className="alumniYear"></p> */}
    
    <button> <a href={props.linkedin}> Follow</a>
    </button>
  </div>
  )
}


export default alumniCards


