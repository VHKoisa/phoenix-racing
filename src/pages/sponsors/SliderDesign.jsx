import React from 'react';
// import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";

import "./SliderDesign.css";

function SliderDesign(){
    return(
            <div className='oo'>

        <Marquee pauseOnHover speed={150} delay={0} gradient={true} gradientWidth={"0px"} direction='right'  >
                <div className='image_wrapper'>
                    <img  src={import.meta.env.BASE_URL+"/sponsors/logo/aether.png"} style={{'width':'600px'}} />
                </div>
                <div className='image_wrapper'>
                    <img src={import.meta.env.BASE_URL+"/sponsors/logo/larsen.jpg"} style={{'width':'600px'}} />
                </div>
                <div className='image_wrapper'>
                    <img src={import.meta.env.BASE_URL+"/sponsors/logo/ami.jpg"} style={{'width':'600px'}} />
                </div>
                <div className='image_wrapper'>
                    <img src={import.meta.env.BASE_URL+"/sponsors/logo/texfab.jpg"} style={{'width':'600px'}} />
                </div>
                <div className='image_wrapper'>
                    <img src={import.meta.env.BASE_URL+"/sponsors/logo/toyota.jpg"} style={{'width':'600px'}} />
                </div>
                <div className='image_wrapper2'>
                    <img src={import.meta.env.BASE_URL+"/sponsors/logo/altret.jpg"}  style={{'width':'150px'}}/>
                </div>
                <div className='image_wrapper2'>
                    <img src={import.meta.env.BASE_URL+"/sponsors/logo/gujtex.jpg"}  style={{'width':'150px'}} />
                </div>
                <div className='image_wrapper2'>
                    <img src={import.meta.env.BASE_URL+"/sponsors/logo/Vpower.jpg"}  style={{'width':'150px'}  }/>
                </div> 
                <div className='image_wrapper2'>
                    <img src={import.meta.env.BASE_URL+"/sponsors/logo/alumniSvnit.jpg"}  style={{'width':'150px'}}/>
                </div>
                <div className='image_wrapper2'>
                    <img src={import.meta.env.BASE_URL+"/sponsors/logo/enpro.jpg"}  style={{'width':'150px'}}/>
                </div>
                <div className='image_wrapper2'>
                    <a href=""><img src={import.meta.env.BASE_URL+"/sponsors/logo/prayosha.jpg"}  style={{'width':'200px'}}/></a>
                </div>
               
                
        </Marquee>
        </div>


    )
}

export default SliderDesign;

