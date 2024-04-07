import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faTimes ,faBars,faBorderAll,faXmark, faX} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom"

function Navbar(props) {
 const [MobileMenu,setMobileMenu] = useState(false)
    return (
        <>
        <header className="header">
            <div className="container d_flex">
                <div className="categories d_flex">
                    <span className="border-all"><FontAwesomeIcon icon={faBorderAll}/></span>
                    <h4>Categories <span className='icon'><FontAwesomeIcon icon={faChevronDown}/></span></h4>
                </div>

                <div className="navlink">
                    <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} 
                    onClick={() => setMobileMenu(false)}>
                        <li>
                            <Link to="/">home</Link>
                        </li>
                        <li>
                            <Link to="/pages">pages</Link>
                        </li>
                        <li>
                            <Link to="/user">user account</Link>
                        </li>
                        <li>
                            <Link to="/vendor">vendor account</Link>
                        </li>
                        <li>
                            <Link to="/track">track my order</Link>
                        </li>
                        <li>
                            <Link to="/contact">contact</Link>
                        </li>
                    </ul>
                    <button className="toggle" onClick={()=> setMobileMenu(!MobileMenu)}>
                        {
                        MobileMenu ? <span><FontAwesomeIcon className='close home-btn' icon={faTimes}/> </span>
                        : 
                        <span><FontAwesomeIcon className='open' icon={faBars}/></span>
                        }
                    </button>
                </div>
            </div>
        </header>
        </>
    );
}

export default Navbar;