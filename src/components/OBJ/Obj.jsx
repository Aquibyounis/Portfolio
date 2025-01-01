import React from 'react'
import imgpic from "../../images/Objimg.jpg";
import "./Obj.css";
import {Link} from "react-router-dom";

const Obj = () => {
  return (
    <div className='obj'>
        <div className="upperobj">
            <div className="rightpic">
                <img className='imgpic' src={imgpic} width={600} height={350} alt="" />
            </div>
            <div className="lefthead">
                <h1>Object detection using Deep Learning</h1>
            </div>
        </div>
        <div className="lowerobj">
            <div className="leftobj">
                <span className='itemsobj'>
                    <h1>Date-</h1>
                    <p>Aug-Nov[2022]</p>
                </span>
                <span className='itemsobj'>
                    <h1>Type-</h1>
                    <p>Model training using Deep learning</p>
                </span>
                <span className='itemsobj'>
                    <h1>Mode-</h1>
                    <p>Team of 4</p>
                </span>
                <span className='itemsobj'>
                    <h1>Myhand-</h1>
                    <p>Coding, Annotations</p>
                </span>
                <span className='itemsobj'>
                    <h1>Coding-</h1>
                    <p>Python, Google colab(GPU)</p>
                </span>
            </div>
            <div className="rightobj">
            <p>Object detection is done on Weather detection. This is project made with my sem class team. Which didn't match upto my expectations. Although I didn't have Knowledge about DL. This project helped me a lot in understanding new unexplored of AI...</p>
            <p>Check out more info in <Link className='linkobj' to="https://drive.google.com/drive/folders/12Hhw37UvApFXi1A5-Z6bDI8NH2ZUJyq5?usp=sharing">GoogleDrive</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Obj