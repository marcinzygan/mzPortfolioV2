import Heading from "./Heading"



export default function ConstactSection(){
    return(
        <section id="contact" className="contact__section">

        <Heading
        sectionHeading={"Contact"}
        />
        <div className="section__number-container">
            <p className="section__number">03</p>
        </div>
        </section>
    )
}