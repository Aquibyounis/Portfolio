import React from 'react'
import "./Contact.css";

const Contact = () => {
  return (
    <div className='contact'>
        <div className="leftcon">
            <div className="email">
                <span className='heading'>
                    <i className="fa-solid fa-envelope"></i>
                    <h1>GMAIL</h1>
                </span>
                <span className='m'>
                    <p>Gmail 1</p>
                    <a href="mailto:aquibyounis2@gmail.com?subject=Subject%20Here&body=Body%20Text%20Here">aquibyounis2@gmail.com</a>
                </span>
                <span className='m'>
                    <p>Gmail 2</p>
                    <a href="mailto:aquibyounis3@gmail.com?subject=Subject%20Here&body=Body%20Text%20Here">aquibyounis3@gmail.com</a>
                </span>
            </div>

            <div className="phone">
                <span className='heading'>   
                    <i class="fa-solid fa-phone"></i>
                    <h1>Mobile number</h1>
                </span>
                <p>7981172728</p>
            </div>
        </div>
        <div className="rightcon">
            <h1>CONTACT</h1>
            <h5>INFO</h5>
        </div>
    </div>
  )
}

export default Contact