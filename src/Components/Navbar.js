import { Icon } from '@iconify/react';
import logo from "../Images/logo.svg"
import React from 'react';
import {Link} from "react-scroll"



export default function Navbar(props){
 




    return(
        
    <nav className="nav">

      <Link to="home"  spy={true} smooth={true} offset={-100} className="logo">  
            <img src={logo} alt="marcin zygan logo" ></img>
        </Link>
     
        <button onClick={props.onClick} className="nav__button" aria-label="toggle navigation">
            <Icon icon="ri:menu-4-line" /> 
        </button>

            <ul className={!props.navOpen ?  "nav__list" : "nav__open nav__list"}>
                <li className="nav__li" ><Link  onClick={props.onClick} to="home" className='nav__link' spy={true} smooth={true} offset={-100}>Home</Link></li>
                <li className="nav__li" ><Link onClick={props.onClick} to="work" className='nav__link' spy={true} smooth={true} offset={-30}>Work</Link></li>
                <li className="nav__li" ><Link onClick={props.onClick} to="about" className='nav__link' spy={true} smooth={true} offset={-30}>About</Link></li>
                <li className="nav__li" ><Link onClick={props.onClick} to="contact" className='nav__link' spy={true} smooth={true} offset={-30}>Contact</Link></li>
            </ul>
    </nav>
    )
}