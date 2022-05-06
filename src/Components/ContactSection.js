import Form from "./Form"
import Heading from "./Heading"
import { Icon } from "@iconify/react"



export default function ConstactSection(){
    return(
        <section id="contact" className="contact__section">
        
    <div className="contact__container-left">      
        
        <Heading
        sectionHeading={"Contact"}
        sectionSubHeading={"Feel free to contact me through any method listed below."}
        />
        
        <Form/>
        <div className="details__container">
            <p className="details__txt">Marcin Zygan</p>
            <p className="details__txt">Phone: +44 123 456 789</p>
            <p className="details__txt">Email: zygandesign@gmail.com</p>
            <div className="socials__container">
            <Icon icon="entypo-social:facebook-with-circle" />
            <Icon icon="entypo-social:linkedin-with-circle" />
            <Icon icon="ant-design:twitter-circle-filled" />
            <Icon icon="fa-brands:github" />
            </div>
        </div>
    </div> 
    <div className="contact__container-right">
        <img src="/" alt="/"></img>
    </div>

        <div className="section__number-container">   
            <p className="section__number">03</p>
        </div>

        
        </section>
    )
}