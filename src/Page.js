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

//  Set state for icons in About section
const [isIconClicked , setIsIconClicked] = React.useState(false)   
function toggleIcons(id){
  setIsIconClicked(prevState => 
    id === id ?
    !prevState :
    prevState
  )
    
  console.log(id)
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
    <AboutSection
    onClick={toggleIcons}
    isIconClicked={isIconClicked}
    
    />
    <ConstactSection/>
    </>
  )
}