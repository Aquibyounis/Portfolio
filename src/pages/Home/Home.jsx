import React from 'react'
import "../Home/Home.css"
import Profile from "../../components/Profile/Profile";
import Contact from '../../components/Contact/Contact';
import Notice from '../../components/Notice/Notice';

const Home = () => {
  return (
    <div className='home'>
      <Profile/>
      <Notice/>
      <Contact/>
    </div>
  )
}

export default Home