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
const [isHtmlIconClicked , setIsHtmlIconClicked] = React.useState(false)
const [isReactIconClicked , setIsReactIconClicked] = React.useState(false) 
const [isCssIconClicked ,setIsCssIconClicked] = React.useState(false)
function HtmlIconToggle(){
  setIsHtmlIconClicked(prevState => !prevState)  
}
function ReactIconToggle(){
  setIsReactIconClicked(prevState =>!prevState)
}
function CssIconToggle(){
  setIsCssIconClicked(prevState=>!prevState)
}
const [isAllIconsClicked , setIsAllIconsClicked]= React.useState(false)
React.useEffect(()=>{
if(isHtmlIconClicked && isCssIconClicked && isReactIconClicked === true){
  setIsAllIconsClicked(true)
  console.log(isAllIconsClicked)
} else{
  setIsAllIconsClicked(false)
}
},[isReactIconClicked , isCssIconClicked , isHtmlIconClicked , isAllIconsClicked])
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
    HtmlIconToggle={HtmlIconToggle}
    ReactIconToggle={ReactIconToggle}
    CssIconToggle={CssIconToggle}
    isHtmlIconClicked={isHtmlIconClicked}
    isReactIconClicked={isReactIconClicked}
    isCssIconClicked={isCssIconClicked}
    isAllIconsClicked={isAllIconsClicked}
    />
    <ConstactSection/>
    </>
  )
}