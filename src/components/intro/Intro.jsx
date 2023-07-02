import React from 'react'
import './intro.css'

const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, my name is</h2>
                <h1 className="i-name">John D.</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Full-Stack Web Developer</div>
                        <div className="i-title-item">UI/UX Developer</div>
                        <div className="i-title-item">Writer</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="i-right">right</div>
    </div>
  )
}

export default Intro