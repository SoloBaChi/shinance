import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt} from '@fortawesome/free-solid-svg-icons';
import FlashCard from './FlashCard';

function FlashDeals({productItems}) {
    return (
        <div>
          <section className="flash background">
            <div className="container">
            <div className="heading f_flex">
                <span className="icon"><FontAwesomeIcon icon={faBolt}/></span>
                <h1>Flash Deals</h1>
            </div>
            <FlashCard productItems={productItems}/>
            </div>
          </section>
        </div>
    );
}

export default FlashDeals;