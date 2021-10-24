import React from "react";
import {Carousel} from 'react-responsive-carousel';

import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'



const ImgCarousel: React.FC = () => {

    return (
        <React.Fragment>
            <Carousel showThumbs={false} autoPlay={true} interval={8000} infiniteLoop={true} showIndicators={false}>
                <div>
                    <img src={one}/>
                    <p className="label">Download CSV data</p>     
                </div>

                <div>
                    <img src={two}/>
                    <p className="label"> Data headers should be named Date, Open, High, Low and Close.</p>      
                </div>

                <div>
                    <img src={three}/>
                    <p className="label">Import data</p>        
                </div>

            </Carousel>
        </React.Fragment>

    );
};
export default ImgCarousel