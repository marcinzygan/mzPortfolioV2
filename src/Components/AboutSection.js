import Heading from "./Heading"
import AboutImg from "../Images/marcin.jpg"
import { Icon } from "@iconify/react"





export default function AboutSection(props){




    return(
<section id="about" className="about__section">

        <Heading
        sectionHeading={"About Me"}
        />

    <div className="about__container">

    
        <img src={AboutImg} alt="marcin zygan" className="about__img"></img>

    
       
        <div className="about__txt-top">
        <span className="span">{"<p>"}</span>
            <p className="about__txt ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus id id viverra enim turpis nulla. Consectetur id scelerisque lacus diam quam aliquam pharetra urna. Habitasse mi cursus id vitae. Eget aenean in vestibulum platea eget nulla dignissim pulvinar. Amet aliquam cras non tincidunt gravida enim est mattis. Facilisi blandit id et risus sit. Rhoncus iaculis elementum pretium nullam tortor arcu. Ultricies ut arcu.</p>
        <span className="span span__about-bottom">{"</p>"}</span><br></br><br></br>
        </div>

         {/* Animation  */}
         <div className="about__animation-container" >
         <div className="about__animation">
        <Icon 
        icon="ci:file-html" 
        className={!props.isHtmlIconClicked ? "html__icon" : "html__icon html__icon-active"}
        onClick={props.HtmlIconToggle}
        
        />
        <Icon 
        icon="ion:logo-react" 
        className={!props.isReactIconClicked ? "react__icon" : "react__icon react__icon-active"}
        onClick={props.ReactIconToggle}
        
        />
        <Icon 
        icon="ci:file-css" 
        className={!props.isCssIconClicked ? "css__icon" : "css__icon css__icon-active"}
        onClick={props.CssIconToggle}
        />
        <div className="inner__circle"></div>
        <div className={!props.isAllIconsClicked ? "rectangle__about" : "rectangle__about rectangle__about-active"}></div>
        </div>

        </div>
        <div className="about__txt-bottom">
        <span className="span">{"<p>"}</span>
            <p className="about__txt ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus id id viverra enim turpis nulla. Consectetur id scelerisque lacus diam quam aliquam pharetra urna. Habitasse mi cursus id vitae. Eget aenean in vestibulum platea eget nulla dignissim pulvinar. Amet aliquam cras non tincidunt gravida enim est mattis. Facilisi blandit id et risus sit. Rhoncus iaculis elementum pretium nullam tortor arcu. Ultricies ut arcu.</p>
        <span className="span span__about-bottom">{"</p>"}</span>
        </div>
   
        


            
    </div>
    <div className="section__number-container">
    <p className="section__number">02</p>
    </div>
</section>
    )
}