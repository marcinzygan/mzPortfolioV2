import Heading from "./Heading"
import AboutImg from "../Images/marcin.jpg"
import { Icon } from "@iconify/react"



export default function AboutSection(){
    return(
<section id="about" className="about__section">

        <Heading
        sectionHeading={"About Me"}
        />

    <div className="about__container">

    <div className="photo__about-container">
        <img src={AboutImg} alt="photo of marcin zygan" className="about__img"></img>

    </div>
       

        <span className="span">{"<p>"}</span>
            <p className="about__txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus id id viverra enim turpis nulla. Consectetur id scelerisque lacus diam quam aliquam pharetra urna. Habitasse mi cursus id vitae. Eget aenean in vestibulum platea eget nulla dignissim pulvinar. Amet aliquam cras non tincidunt gravida enim est mattis. Facilisi blandit id et risus sit. Rhoncus iaculis elementum pretium nullam tortor arcu. Ultricies ut arcu.</p>
        <span className="span span__about-bottom">{"</p>"}</span><br></br><br></br>

         {/* Animation  */}
         <div className="about__animation">
        <Icon icon="ci:file-html" className="html__icon"/>
        <Icon icon="ion:logo-react" className="react__icon"/>
        <Icon icon="ci:file-css" className="css__icon"/>
        <div className="inner__circle"></div>
        <div className="triangle__about"></div>
        
        </div>

        <span className="span">{"<p>"}</span>
            <p className="about__txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus id id viverra enim turpis nulla. Consectetur id scelerisque lacus diam quam aliquam pharetra urna. Habitasse mi cursus id vitae. Eget aenean in vestibulum platea eget nulla dignissim pulvinar. Amet aliquam cras non tincidunt gravida enim est mattis. Facilisi blandit id et risus sit. Rhoncus iaculis elementum pretium nullam tortor arcu. Ultricies ut arcu.</p>
        <span className="span span__about-bottom">{"</p>"}</span>
        
   
        


            
    </div>
    <p className="section__number">02</p>
</section>
    )
}