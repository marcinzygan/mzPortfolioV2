import Circle from "../Images/circle.png"
import Hero1 from "../Images/hero1.jpg"
import Hero2 from "../Images/hero2.jpg"
import Hero3 from "../Images/hero3.jpg"
import Triangle from "../Images/triangle.svg"
export default function HeroAnimation(){
    return(
        <div className="block__container">
        <div className="circle__container">
            <img src={Circle} alt="black and white cirlce" className="circle__img"></img>
            <img src={Hero1} className="hero__img" alt="man looking into black window"></img>
            <img src={Hero2} className="hero__img hero__img2" alt="man in black gray fog"></img>
            <img src={Hero3} className="hero__img hero__img3" alt="black and white stripes with man in background"></img>
            <div className="line"></div>
            <img src={Triangle} className="triangle" alt="triangle"></img>
            
        </div>
        
        </div>
    )
} 