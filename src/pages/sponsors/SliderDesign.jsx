import React from 'react';
// import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";

import "./SliderDesign.css";

function SliderDesign(){
    return(
            <div className='oo'>

        <Marquee pauseOnHover speed={150} delay={0} gradient={true}gradientWidth={"50px"} direction='right'  >
                <div className='image_wrapper'>
                    <img  src={import.meta.env.BASE_URL+"/sponsors/logo/aether.jpg"} />
                </div>
                <div className='image_wrapper'>
                    <img src={import.meta.env.BASE_URL+"/sponsors/logo/larsen.jpg"} />
                </div>
                <div className='image_wrapper'>
                    <img src={import.meta.env.BASE_URL+"/sponsors/logo/ami.jpg"}  />
                </div>
                <div className='image_wrapper'>
                    <img src={import.meta.env.BASE_URL+"/sponsors/logo/texfab.jpg"} />
                </div>
                <div className='image_wrapper'>
                    <img src={import.meta.env.BASE_URL+"/sponsors/logo/toyota.jpg"} />
                </div>
                <div className='image_wrapper2'>
                    <img src={import.meta.env.BASE_URL+"/sponsors/logo/altret.jpg"} />
                </div>
                <div className='image_wrapper2'>
                    <img src={import.meta.env.BASE_URL+"/sponsors/logo/gujtex.jpg"} />
                </div>
                <div className='image_wrapper2'>
                    <img src={import.meta.env.BASE_URL+"/sponsors/logo/Vpower.jpg"} />
                </div>
                <div className='image_wrapper2'>
                    <img src={import.meta.env.BASE_URL+"/sponsors/logo/svnit.jpg"} />
                </div>
                <div className='image_wrapper2'>
                    <img src={import.meta.env.BASE_URL+"/sponsors/logo/enpro.jpg"} />
                </div>
                <div className='image_wrapper2'>
                    <a href=""><img src={import.meta.env.BASE_URL+"/sponsors/logo/prayosha.jpg"} /></a>
                </div>
               
                
        </Marquee>
        </div>


    )
}

export default SliderDesign;

