import React from 'react';
import "../Links/Links.css";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <>
        <div className='links'>
            <div className="box">
                <i className="fa-brands fa-youtube"></i>
                <Link className='l' to="https://www.youtube.com/channel/UCynAxHTTMS9zdGxY8tZkaQg" target="_blank" rel="noopener noreferrer">YOUTUBE</Link>
            </div>
            <div className="box">
                <i className="fa-brands fa-square-threads">@</i>
                <Link className='l' to="https://www.threads.net/@interstellar_programer" target="_blank" rel="noopener noreferrer">THREADS</Link>
            </div>
            <div className="box">
                <i className="fa-brands fa-linkedin-in"></i>
                <Link className='l' to="https://www.linkedin.com/in/aquib-younis-pula-6b205b275/" target="_blank" rel="noopener noreferrer">LINKEDIN</Link>
            </div>
            <div className="box">
                <i className="fa-le fa-solid fa-code"></i>
                <Link className='l' to="https://leetcode.com/u/aquibyounis1/" target="_blank" rel="noopener noreferrer">LEETCODE</Link>
            </div>
            <div className="box">
                <i className="fa-brands fa-instagram"></i>
                <Link className='l' to="https://www.instagram.com/interstellar_programer" target="_blank" rel="noopener noreferrer">INSTAGRAM</Link>
            </div>
            <div className="box">
                <i className="fa-brands fa-github"></i>
                <Link className='l' to="https://github.com/Aquibyounis" target="_blank" rel="noopener noreferrer">GITHUB</Link>
            </div>
            <div className="box">
                <i className="fa-brands fa-telegram"></i>
                <Link className='l' to="https://t.me/aquib_younis" target="_blank" rel="noopener noreferrer">TELEGRAM</Link>
            </div>
        </div>
    </>
  );
}

export default Links;
