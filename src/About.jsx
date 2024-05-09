import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import videoBg from './assets/Video1.mp4'
import './About.css'

export default function About(props) {
  return (
    <>
    <Header/>

    <div className="main" >
      <div className="videoContainer">


      <video src={videoBg} autoPlay loop muted/>
      <div className="content">

      <h1>
        <button type="button" onClick={scrollY} className="btn " >KNOW MORE</button>
      
      </h1>
      
      </div>
     

      </div>
    
 
    </div>


    


    <div className="conatiner mainCtn">
    
    <div className="ctn my-64" id='ctn'>
          
          <p className='paragraph'>Team Phoenix Racing is a technical student chapter affiliated with SVNIT, consisting of over 60 students from various engineering disciplines. Our primary objective is to provide a platform for aspiring engineers to excel, acquire practical knowledge, and gain exposure to real-world challenges. Since our establishment in 2005, we have actively participated in and successfully competed in a range of competitions, including Baja, Supra SAE, Go-Kart, and Formula Bharat. These endeavors have involved the complete design, manufacturing, and management of projects, all carried out by our dedicated student team. Embracing the principles of sustainability and electrification, we have made a significant transition towards the production of electric vehicles starting in 2022.</p>
    </div>

    </div>   
   




    
    <div className="footer">
    <Footer/>
    </div>
    
      
    </>
  )
}
