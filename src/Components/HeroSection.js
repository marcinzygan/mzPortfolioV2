import HeroAnimation from "./HeroAnimation"
import {Link} from "react-scroll"
export default function Hero(){
    return(
<div className="hero__section">
    <div id="home" className="hero__container">
        <div className="hero__intro">

                <h1 className="hero__h1">
                    <span className="span span__dark">{"<h1>"}</span>
                    Hello <br></br>
                    World...
                    <span className="span span__dark">{"</h1>"}</span>
                </h1>
                
        <h2 className="hero__h2">
            <div className="span__space">
                <span className="span">{"<h2>"}</span>
                <span className="span__name">I am Marcin Zygan </span></div>
            <div className="span__space">
                <span className="span">{"<span>"}</span>
                Front end Developer 
                <span className="span">{"</span>"}</span> </div>
                <span className="span">{"<h2>"}</span> 
        </h2><Link to="work" className="btn" spy={true} smooth={true} offset={-30} >My Work</Link>
    </div>
        
        <HeroAnimation/>
        
    </div>
    
</div>
    )
}