import HeroAnimation from "./HeroAnimation"
import {Link} from "react-scroll"
import { motion } from "framer-motion"
export default function Hero(){
    
    return(
<div className="hero__section">
    <div id="home" className="hero__container">
        <div className="hero__intro">

                <motion.h1 
                className="hero__h1"
                initial={{x:-400 ,opacity:0}}
                animate={{x:0 , opacity:1}}
                transition={{duration:2 , delay:1.2}}
                >
                    <span className="span span__dark">{"<h1>"}</span>
                    Hello <br></br>
                    World...
                    <span className="span span__dark">{"</h1>"}</span>
                </motion.h1>
                
            <motion.h2 
                className="hero__h2"
                initial={{y:400 ,opacity:0}}
                animate={{y:0 , opacity:1}}
                transition={{duration:2 ,delay:1.2}}
        >
            <div className="span__space">
                <span className="span">{"<h2>"}</span>
                <span className="span__name">I am Marcin Zygan </span></div>
            <div className="span__space">
                <span className="span">{"<span>"}</span><br></br>
                <p className="job__title">Front end Developer , Graphic Designer</p>
                <span className="span">{"</span>"}</span> </div>
                
                <span className="span">{"<h2>"}</span> 
        </motion.h2>
        <motion.div
         initial={{x:-400 ,opacity:0}}
         animate={{x:0 , opacity:1}}
         transition={{duration:2 ,delay:3}}
        ><Link to="work" className="btn" spy={true} smooth={true} offset={-30} >My Work</Link></motion.div>
    </div>
        
        <HeroAnimation/>
        
    </div>
    <span className="span span__bottom" >{"</section>"}</span>
</div>
    )
}