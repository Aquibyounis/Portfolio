import React from 'react'
import "./Interests.css";
import {Link} from "react-router-dom";

const Interests = () => {
  return (
    <div className='interests'>
        <div className="inner">
            <section className="languages">
                <span className='headinglan'>
                    <h1>Languages</h1>
                </span>
                <ul>
                    <li>JAVA</li>
                    <li>Python</li>
                    <li>ReactJS</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SQL</li>
                    <li>MongoDB</li>
                    <li>JS</li>
                </ul>
            </section>
            <section className="hr">
                <div className="hobbies">
                    <p>Independent & team +</p>
                    <p>New projects +</p>
                    <p>Creative Designs +</p>
                    <p>ASMR +</p>
                    <p>Pencil sketch +</p>
                </div>
                <div className="resume">
                    <Link className='resume2' to="https://drive.google.com/file/d/1Xrr-5Rp0j-4W0b73rg3TS1hTZwRnaVRE/view?usp=sharing">RESUME</Link>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Interests