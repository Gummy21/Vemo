import React from "react";
import {Carousel} from 'react-responsive-carousel';



const ImgCarousel: React.FC = () => {

    return (
        <React.Fragment>
            <Carousel showThumbs={false} autoPlay={true} interval={8000} infiniteLoop={true} showIndicators={false}>
                <div>
                    <img />
                    <p className="label">Download CSV data</p>     
                </div>

                <div>
                    <img />
                    <p className="label"> Data headers should be named Date, Open, High, Low and Close.</p>      
                </div>

                <div>
                    <img />
                    <p className="label">Import data</p>        
                </div>

            </Carousel>
        </React.Fragment>

    );
};
export default ImgCarousel