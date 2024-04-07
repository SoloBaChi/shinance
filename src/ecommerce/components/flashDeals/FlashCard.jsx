import { faHeart, faLongArrowAltLeft, faLongArrowAltRight, faPlus,faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Slider from 'react-slick';

const NextArrow = (props) => {
const {onClick} = props;
return(
    <div className="control-btn" onClick={onClick}>
        <button className="next">
        <span className="icon">
            <FontAwesomeIcon icon={faLongArrowAltLeft}/>
        </span>
        </button>
    </div>
)
}
const PrevArrow = (props) => {
const {onClick} = props;
return(
    <div className="control-btn" onClick={onClick}>
        <button className="prev">
        <span className="icon">
            <FontAwesomeIcon icon={faLongArrowAltRight}/>
        </span>
        </button>
    </div>
)
}


function FlashCard({productItems}) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
      };
    return (
        <>
        <Slider {...settings}>
        {
        productItems.map((productItem) => {
            return(
            <div className="box">
            <div className="product mtop">
                <div className="img">
                    <span className="discount">{productItem.discount}%oOff</span>
                    <img src={productItem.cover} alt="" />
                    <div className="product-like">
                        <label></label> <br />
                        <span className="fa-heart icon"><FontAwesomeIcon icon={faHeart}/></span>
                    </div>
                </div>
                <div className="product-details">
                    <h3>{productItem.name}</h3>
                    <div className="rate">
                        <span className="far-rate icon">
                            <FontAwesomeIcon icon={faStar}/>
                        </span>
                        <span className="far-rate icon">
                            <FontAwesomeIcon icon={faStar}/>
                        </span>
                        <span className="far-rate icon">
                            <FontAwesomeIcon icon={faStar}/>
                        </span>
                        <span className="far-rate icon">
                            <FontAwesomeIcon icon={faStar}/>
                        </span>
                        <span className="far-rate icon">
                            <FontAwesomeIcon icon={faStar}/>
                        </span>
                    </div>
                    <div className="price"></div>
                    <h4>{productItem.price}</h4>
                    <button>
                        <span className="icon fa-plus">
                            <FontAwesomeIcon icon={faPlus}/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
            )
        })
        }
         </Slider>
        </>
    );
}

export default FlashCard;