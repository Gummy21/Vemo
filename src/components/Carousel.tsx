import React from "react";
import {Carousel} from 'react-responsive-carousel';


interface ImgsProp {
    formImgOne: any,
    formImgTwo: any,
    formImgThree:any
  
}


const ImgCarousel: React.FC<ImgsProp> = ({formImgOne,formImgTwo,formImgThree}) => {

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