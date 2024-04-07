import React from 'react';
import logo from "../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSearch, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Search(props) {
   window.addEventListener("scroll",function(){
    const search = document.querySelector(".search");
    search.classList.toggle("active",window.scrollY > 100)

   })
    return (
        <>
          <section className="search">
            <div className="container c_flex">
              <div className="logo width">
                {/* <img src={logo} alt="" /> */}
              </div>

              <div className="search-box f_flex">
                <span className='icon'><FontAwesomeIcon icon={faSearch}/></span>
                <input type="text" placeholder='Search and hit enter...' />
                <span className='text'>All Categry</span>
              </div>

              <div className="icon f_flex width">
                <span><FontAwesomeIcon className='icon_circle' icon={faUser}/></span>
                <div className="cart">
                  <Link to="/cart">
                    <span className='icon'><FontAwesomeIcon className='icon_circle' icon={faShoppingBag}/></span>
                    <span className='count'>0</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
    );
}

export default Search;