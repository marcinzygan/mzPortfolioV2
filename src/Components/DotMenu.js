import React from "react"
import "./DotMenuStyle.css"
export default function DotMenu(){

    const [dotActive , setDotActive] = React.useState(false)
    
    function activeDot(){
      setDotActive(prevState => !prevState)
  }
 
    return(
       
        <nav className="dot__nav">
            <div className="dot__item">
                <a href="#home" className={!dotActive ? "dot__link" : "dot__link dot__link-selected"} onClick={activeDot}> </a>
                <span className="dot__label">Home</span>
            </div>

            <div className="dot__item">
                <a href="#about" className="dot__link" > </a>
                <span className="dot__label">About Us</span>
            </div>

            <div className="dot__item">
                <a href="#work" className="dot__link"> </a>
                <span className="dot__label">My Work</span>
            </div>

            <div className="dot__item">
                <a href="#contact" className="dot__link"> </a>
                <span className="dot__label">Get In Touch</span>
            </div>
        </nav>
    )
}