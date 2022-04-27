import { Icon } from '@iconify/react';
import logo from "../Images/logo.svg"
import React from 'react';




export default function Navbar(props){
 




    return(
        
    <nav className="nav">

        <div className="logo">
            <img src={logo} alt="marcin zygan logo" ></img>
        </div>
     
        <button onClick={props.onClick} className="nav__button" aria-label="toggle navigation">
            <Icon icon="ri:menu-4-line" /> 
        </button>

            <ul className={!props.navOpen ?  "nav__list" : "nav__open nav__list"}>
                <li className="nav__li" onClick={props.onClick}><a href='#home'>HOME</a></li>
                <li className="nav__li" onClick={props.onClick}><a href='#about'>ABOUT</a></li>
                <li className="nav__li" onClick={props.onClick}><a href='#work'>WORK</a></li>
                <li className="nav__li" onClick={props.onClick}><a href='#contact'>CONTACT</a></li>
            </ul>
    </nav>
    )
}