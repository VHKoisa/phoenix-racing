import React from 'react';
// import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";

import "./SliderDesign.css";

function SliderDesign(){
    return(
            <div className='oo'>

        <Marquee pauseOnHover speed={150} delay={0} gradient={true} gradientWidth={"0px"} direction='right'  >
                <div className='image_wrapper'>
                    <img  src={"/sponsors/logo/aether.png"} style={{'width':'600px'}} />
                </div>
                <div className='image_wrapper'>
                    <img src={"/sponsors/logo/larsen.jpg"} style={{'width':'600px'}} />
                </div>
                <div className='image_wrapper'>
                    <img src={"/sponsors/logo/ami.jpg"} style={{'width':'600px'}} />
                </div>
                <div className='image_wrapper'>
                    <img src={"/sponsors/logo/texfab.jpg"} style={{'width':'600px'}} />
                </div>
                <div className='image_wrapper'>
                    <img src={"/sponsors/logo/toyota.jpg"} style={{'width':'600px'}} />
                </div>
                <div className='image_wrapper2'>
                    <img src={"/sponsors/logo/altret.jpg"}  style={{'width':'150px'}}/>
                </div>
                <div className='image_wrapper2'>
                    <img src={"/sponsors/logo/gujtex.jpg"}  style={{'width':'150px'}} />
                </div>
                <div className='image_wrapper2'>
                    <img src={"/sponsors/logo/Vpower.jpg"}  style={{'width':'150px'}  }/>
                </div> 
                <div className='image_wrapper2'>
                    <img src={"/sponsors/logo/alumniSvnit.jpg"}  style={{'width':'150px'}}/>
                </div>
                <div className='image_wrapper2'>
                    <img src={"/sponsors/logo/enpro.jpg"}  style={{'width':'150px'}}/>
                </div>
                <div className='image_wrapper2'>
                    <a href=""><img src={"/sponsors/logo/prayosha.jpg"}  style={{'width':'200px'}}/></a>
                </div>
               
                
        </Marquee>
        </div>


    )
}

export default SliderDesign;

