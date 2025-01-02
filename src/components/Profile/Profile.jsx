import React from 'react'
import img from "../../images/profile.jpg";
import "./Profile.css";
import {Link} from "react-router-dom";

const Profile = () => {
  return (
    <>
    <h1 className='myself'>Myself</h1>
    <div className='profile'>
        <div className="leftside">
            <img src={img} className='img' alt='' width={400} height={500}/>
        </div>
        <div className="rightside">
            <Link to="https://drive.google.com/file/d/1Xrr-5Rp0j-4W0b73rg3TS1hTZwRnaVRE/view" className='h1head'><h1>AQUIB YOUNIS</h1></Link>
            <span className='motto'>
                <h3>Aspiring software engineer</h3>
                <p>+ Explorer</p>
                <p>+ A student of Vellore institute of technology</p>
                <p>+ With high excitement to catch up in technology...</p>
            </span>
        </div>
    </div>
    </>
  )
}

export default Profile