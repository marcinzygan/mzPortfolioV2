import Heading from "./Heading"
import AboutImg from "../Images/marcin.jpg"
import { Icon } from "@iconify/react"





export default function AboutSection(props){




    return(
    <section id="about" className="about__section">

        <Heading
        sectionHeading={"About Me"}
        sectionSubHeading={"Few words about myself."}
        />

    <div className="about__container">

    
        <img src={AboutImg} alt="marcin zygan" className="about__img"></img>

        <div className="about__txt-top">

            <span className="span">{"<p>"}</span>
            <p className="about__txt ">
            My name is Marcin Zygan
            and I am a passionate graphic designer and web developer with lots of innovative ideas and unique approach to visuals.
            <br></br>
            <br></br>
            I have a solid understanding of design principles but also marketing and advertising techniques.
            <br></br>
            <br></br>
            In my work I am always keeping attention to details and I have a great passion to keep clients satisfied with every project.
            </p>
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
            `<Icon 
            icon="ci:file-css" 
            className={!props.isCssIconClicked ? "css__icon" : "css__icon css__icon-active"}
            onClick={props.CssIconToggle}
            />

            <div className="inner__circle">
                <img  className="puppet"src="https://c.tenor.com/6On54eyPJNkAAAAC/run-forrest-puppet.gif" alt="puppet"></img>
            </div>
        
             <div className={!props.isAllIconsClicked ? "circle__about" : "circle__about circle__about-active"}>
            </div>
        </div>
        </div>

        <div className="about__rectangle-container">
            <div className="about__rectangle1">   
                <div className={!props.isAllIconsClicked ? "about__overlay" : "about__overlay about__overlay-active"}></div>
            </div>
            <div className="about__rectangle2"> 
                <div className={!props.isAllIconsClicked ? "about__overlay" : "about__overlay about__overlay-active"}></div>
            </div>
        </div>

        <div className="about__txt-bottom">
            <span className="span">{"<p>"}</span>
                <p className="about__txt ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Cras faucibus id id viverra enim turpis nulla. 
                 Consectetur id scelerisque lacus diam quam aliquam pharetra urna. 
                 Habitasse mi cursus id vitae. Eget aenean in vestibulum platea eget nulla dignissim pulvinar.
                  Amet aliquam cras non tincidunt gravida enim est mattis. Facilisi blandit id et risus sit. 
                  Rhoncus iaculis elementum pretium nullam tortor arcu. Ultricies ut arcu.</p>
            <span className="span span__about-bottom">{"</p>"}</span>
        </div>
       
    </div>
         <div className="section__number-container">
            <p className="section__number">02</p>
        </div>
</section>
    )
}