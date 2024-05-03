import React from 'react'

const Card = (props) => {
    const cardStyle = { 
        borderRadius: "30px",
        boxShadow:  "-7px -7px 7px"
        // boxShadow:  "-7px -7px 7px, 7px 7px 7px "
        }
    const imgStyle = { 
        borderTopLeftRadius: "30px",
        borderTopRightRadius: "30px",
        }
    const imageAddr = "/src/assets/team/"+props.photo;
  return (
    <div style={cardStyle} className='w-fit bg-blue-950 mb-5 mx-10'>
      <div>
        <img src={imageAddr} className='h-60' style={imgStyle} alt="Card Image"/>
      </div>
      <div className='text-white'>
        <div className='text-2xl font-bold flex justify-center'>{props.name}</div>
        <div className='flex justify-center text-xl'>{props.position}</div>
      </div>
    </div>
  )
}

export default Card
