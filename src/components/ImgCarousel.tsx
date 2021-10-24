import React from "react";
import {Carousel} from 'react-responsive-carousel';


import FormImg from '../assets/form_img.png'
import FormImgTwo from '../assets/form_img_two.png'
import FormImgThree from '../assets/form_img_three.png'

const ImgCarousel: React.FC = () => {

    return (
        <React.Fragment>
            <Carousel showThumbs={false} autoPlay={true} interval={8000} infiniteLoop={true} showIndicators={false}>
                <div>
                    <img src={FormImg}/>
                    <p className="label">Download CSV data</p>     
                </div>

                <div>
                    <img src={FormImgTwo}/>
                    <p className="label"> Data headers should be named Date, Open, High, Low and Close.</p>      
                </div>

                <div>
                    <img src={FormImgThree}/>
                    <p className="label">Import data</p>        
                </div>

            </Carousel>
        </React.Fragment>

    );
};
export default ImgCarousel