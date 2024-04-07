import React from 'react';
import Sdata from './Sdata';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SlideCard(props) {
const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        appendDots:(dots) => {
        return <ul style={{margin:"0px"}}>{dots}</ul>
        }
      };
    return (
        <>
        <Slider {...settings}>
        {
          Sdata.map((val,index)=>{
            return(
                <div className="box d_flex top" key={index}>
                <div className="left">
                    <h1>{val.title}</h1>
                    <p>{val.description}</p>
                    <button className="btn-primary">
                        visit collection
                    </button>
                </div>
                <div className="right">
                    <img src={val.cover} alt="" />
                </div>
            </div>
            )
          })  
        }
        </Slider>
       
        </>
    );
}

export default SlideCard;