import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Head(props) {
    return (
        <>
         <section className="head">
            <div className="container d_flex">
                <div className="left row">
                    <span className='icon'><FontAwesomeIcon icon={faPhone}/></span>
                    <label>+234 179 2839</label>
                    <span className='icon'><FontAwesomeIcon icon={faEnvelope}/></span>
                    <label>example@gmail.com</label>
                </div>
                <div className="row right RText">
                    <label>Theme FAQ's</label>
                    <label>Need Helps</label>
                    <span>&#x1F3F3;&#xFE0F;&#x200D;&#x26A7;&#xFE0F;</span>
                    <label htmlFor="">EN</label>
                    <span>&#x1F3F3;&#xFE0F;&#x200D;&#x26A7;&#xFE0F;</span>
                    <label htmlFor="">USD</label>
                </div>
            </div>
        </section>  
        </>
    );
}

export default Head;