import React from 'react';
import "./Shopez.css";
import shopezimg from "../../images/shopezimg.png";
import {Link} from "react-router-dom";

const Shopez = () => {
  return (
    <div className="shopez-card">
      <div className="shopez-front">

        <div className="leftshop">
          <img src={shopezimg} alt="" width={800} className='shopezimg'/>
        </div>
        <div className="rightshop">
          <h1>SHOPEZ</h1>
        </div>
      </div>

      <div className="shopez-back">
        <div className="left-matter">
          <span className='items'>
            <h1>Date-</h1>
            <p>June-August[2024]</p>
          </span>
          <span className='items'>
            <h1>Type-</h1>
            <p>Online shopping web application</p>
          </span>
          <span className='items'>
            <h1>Mode-</h1>
            <p>Team of 4</p>
          </span>
          <span className='items'>
            <h1>Myhand-</h1>
            <p>Frontend, DataBase[Not much]</p>
          </span>
          <span className='items'>
            <h1>Coding-</h1>
            <p>ReactJS, MongoDB</p>
          </span>
        </div>
        <div className="right-matter">
          <p>SHOPEZ is a MERN project using ReactJS,MongoDB,ExpressJS and NodeJS. Along with project code there was some paper work which was just like SE development in real time. This helped in gaining a hands on experince with working as team and also division of work among Team....</p>
          <p>Check out more info in <Link className='link' to="https://github.com/Aquibyounis/Shop-EZ">GITHUB</Link></p>
        </div>
      </div>

    </div>
  );
};

export default Shopez;
