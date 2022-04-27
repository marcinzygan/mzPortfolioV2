
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero";

import React from "react";


export default function App() {
  
 //Set state for opening the navigation
 const [navOpen , setNavOpen] = React.useState(false)
 //Function to toggle state 
    function toggleNavigation(){
         setNavOpen(prevState => !prevState)
     }
 
    
 
  return(
    <>
    <header>
      <Navbar
      navOpen={navOpen}
      onClick={toggleNavigation}
      />
    </header>
    <Hero/>
    </>
  )
}