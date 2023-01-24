import React from "react";
import Navbar from "./Components/Navbar";
import DotMenu from "./Components/DotMenu";
import Hero from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import WorkSection from "./Components/WorkSection";
import ConstactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";

export default function App() {
  //Set state for opening the navigation
  const [navOpen, setNavOpen] = React.useState(false);
  //Function to toggle state
  function toggleNavigation() {
    setNavOpen((prevState) => !prevState);
  }
  //Set state for footer date
  const year = new Date().getFullYear();
  const [currentYear] = React.useState(year);

  //  Set state for icons in About section
  const [isHtmlIconClicked, setIsHtmlIconClicked] = React.useState(false);
  const [isReactIconClicked, setIsReactIconClicked] = React.useState(false);
  const [isCssIconClicked, setIsCssIconClicked] = React.useState(false);
  //Toggle functions for icons in About section
  function HtmlIconToggle() {
    setIsHtmlIconClicked((prevState) => !prevState);
  }
  function ReactIconToggle() {
    setIsReactIconClicked((prevState) => !prevState);
  }
  function CssIconToggle() {
    setIsCssIconClicked((prevState) => !prevState);
  }

  //Set state for allIcons clicked in About section.
  const [isAllIconsClicked, setIsAllIconsClicked] = React.useState(false);

  // Check if icons are clicked if yes set the state of all icons to true .
  React.useEffect(() => {
    if (isHtmlIconClicked && isCssIconClicked && isReactIconClicked === true) {
      setIsAllIconsClicked(true);
    } else {
      setIsAllIconsClicked(false);
    }
  }, [
    isReactIconClicked,
    isCssIconClicked,
    isHtmlIconClicked,
    isAllIconsClicked,
  ]);

  return (
    <>
      <header>
        <Navbar navOpen={navOpen} onClick={toggleNavigation} />
      </header>
      <DotMenu />
      <Hero />
      <WorkSection
      // workSectionShapesRef={ref}
      // workSectionShapesIntersecting={isIntersecting}
      />
      <AboutSection
        HtmlIconToggle={HtmlIconToggle}
        ReactIconToggle={ReactIconToggle}
        CssIconToggle={CssIconToggle}
        isHtmlIconClicked={isHtmlIconClicked}
        isReactIconClicked={isReactIconClicked}
        isCssIconClicked={isCssIconClicked}
        isAllIconsClicked={isAllIconsClicked}
      />
      <ConstactSection />
      <Footer currentYear={currentYear} />
    </>
  );
}
