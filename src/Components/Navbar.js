import { Icon } from '@iconify/react';
import logo from "../Images/logo.svg"
import React from 'react';




export default function Navbar(){
 
    // //Set state for opening the navigation
  const [navOpen , setNavOpen] = React.useState(false)
   function toggleNavigation(){
        setNavOpen(prevState => !prevState)
        console.log(navOpen)
    }




    return(
        
    <nav className="nav">

        <div className="logo">
            <img src={logo} alt="marcin zygan logo" ></img>
        </div>
     
        <button onClick={toggleNavigation} className="nav__button" aria-label="toggle navigation">
            <Icon icon="ri:menu-4-line" /> 
        </button>

            <ul className={navOpen? "nav__open nav__list" : "nav__list"}>
                <li className="nav__li">HOME</li>
                <li className="nav__li">ABOUT</li>
                <li className="nav__li">WORK</li>
                <li className="nav__li">CONTACT</li>
            </ul>
    </nav>
    )
}