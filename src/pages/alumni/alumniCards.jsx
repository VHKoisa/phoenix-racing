import React from 'react'
import './alumniCards.css'
// import PropTypes from 'prop-types'



const alumniCards = (props) => {
  return (
    <div class="card my-4 ">
    <div class="card-border-top">
    </div>
    <div class="img">
      <img src="/src/pages/alumni/user.png" alt="" />
    </div>
    <span> {props.name} </span>
    
    <p class="job">{props.year} <br /> {props.company} </p>
    {/* <p class="alumniYear"></p> */}
    
    <button> <a href={props.linkedin}> Click</a>
    </button>
  </div>
  )
}


export default alumniCards


