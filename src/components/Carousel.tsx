import React from "react";
import {Carousel} from 'react-responsive-carousel';

import formImgOne from '../assets/form_img.png'
import formImgTwo from '../assets/form_img.png'
import formImgThree from '../assets/form_img.png'



const ImgCarousel: React.FC = () => {

    return (
        <React.Fragment>
            <Carousel showThumbs={false} autoPlay={true} interval={8000} infiniteLoop={true} showIndicators={false}>
                <div>
                    <img src={formImgOne}/>
                    <p className="label">Download CSV data</p>     
                </div>

                <div>
                    <img src={formImgTwo}/>
                    <p className="label"> Data headers should be named Date, Open, High, Low and Close.</p>      
                </div>

                <div>
                    <img src={formImgThree}/>
                    <p className="label">Import data</p>        
                </div>

            </Carousel>
        </React.Fragment>

    );
};
export default ImgCarousel