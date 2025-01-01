import React from 'react'
import "./Work.css";
import Shopez from "../../components/Shopez/Shopez";
import Obj from '../../components/OBJ/Obj';

const Work = () => {
  return (
    <div className='work'>
        <div className="gap"></div>
        <div className="inside">
            <Shopez/>
            <Obj/>
        </div>
    </div>
  )
}

export default Work