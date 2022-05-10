import React from "react"
import "./DotMenuStyle.css"
import {Link} from "react-scroll"



export default function DotMenu(){


 
    return(
       
        <nav className="dot__nav">
            <div className="dot__item">
                <Link to="home" activeClass="dot__link-selected" spy={true} smooth={true} offset={-130} className="dot__link"> </Link>
                <span className="dot__label">Home</span>
            </div>

            <div className="dot__item">
            <Link to="work" activeClass="dot__link-selected" spy={true} smooth={true} offset={-30} className="dot__link"> </Link>
                <span className="dot__label">My Work</span>
            </div>

            <div className="dot__item">
            <Link to="about" activeClass="dot__link-selected" spy={true} smooth={true} offset={-30} className="dot__link"> </Link>
                <span className="dot__label">About Me</span>
            </div>
            
            <div className="dot__item">
            <Link to="contact" activeClass="dot__link-selected" spy={true} smooth={true} offset={-30} className="dot__link"> </Link>
                <span className="dot__label">Contact</span>
            </div>
        </nav>
    )
}