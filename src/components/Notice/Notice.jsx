import React from 'react'
import "./Notice.css"

const Notice = () => {
  return (
    <div className='notice'>
        <div className="board">
            <h1>NOTICE BOARD</h1>
            <section className='notes'>
                <div className="boxes">
                    <i class="fa-solid pin fa-thumbtack"></i>
                    <p>Started a Threads account for sharing daily progress of my work...</p>
                </div>
                <div className="boxes">
                    <i class="fa-solid pin fa-thumbtack"></i>
                    <p>Posted new Videos in YOUTUBE "@interstellar_coder"</p>
                </div>
                <div className="boxes">
                    <i class="fa-solid pin fa-thumbtack"></i>
                    <p>Account got Restricted.....for some unknown reason...'(＞︿＜)'</p>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Notice