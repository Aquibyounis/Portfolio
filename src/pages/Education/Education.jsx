import React from 'react'
import "./Education.css";
import Interests from '../../components/Interests/Interests';
import Skills from '../../components/Skills/Skills';

const Education = () => {
  return (
    <div className='education_page'>
      <div className="gape"></div>
      <Interests/>
      <Skills/>
    </div>
  )
}

export default Education