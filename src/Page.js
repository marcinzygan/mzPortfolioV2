import React from "react";
import Navbar from "./Components/Navbar"
import DotMenu from "./Components/DotMenu";
import Hero from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import WorkSection from "./Components/WorkSection";
import ConstactSection from "./Components/ContactSection";




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
    <DotMenu/>
    <Hero/>
    <WorkSection/>
    <AboutSection/>
    <ConstactSection/>
    </>
  )
}