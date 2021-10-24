import React from "react";
import {Carousel} from 'react-responsive-carousel';


import One from '../assets/one.png'
import Two from '../assets/one.png'
import Three from '../assets/one.png'

const ImgCarousel: React.FC = () => {

    return (
        <React.Fragment>
            <Carousel showThumbs={false} autoPlay={true} interval={8000} infiniteLoop={true} showIndicators={false}>
                <div>
                    <img src={One}/>
                    <p className="label">Download CSV data</p>     
                </div>

                <div>
                    <img src={Two}/>
                    <p className="label"> Data headers should be named Date, Open, High, Low and Close.</p>      
                </div>

                <div>
                    <img src={Three}/>
                    <p className="label">Import data</p>        
                </div>

            </Carousel>
        </React.Fragment>

    );
};
export default ImgCarousel