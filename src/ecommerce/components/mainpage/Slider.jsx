import React from 'react';
import SlideCard from './SlideCard';

function Slider(props) {
    return (
        <>
          <section className="homeSlide contentWidth">
            <div className="container">
                <SlideCard/>
            </div>
        </section>   
        </>
    );
}

export default Slider;