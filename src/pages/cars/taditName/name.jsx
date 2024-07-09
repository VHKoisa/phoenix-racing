import React from 'react'
import './name.css'
// import { prototype } from 'postcss/lib/lazy-result'
const name = (props) => {
  return (
    <div>
      <div className="loader">
      <div data-glitch={props.name} className="glitch">{props.name} </div>


    </div>
    </div>
  )
}

export default name
