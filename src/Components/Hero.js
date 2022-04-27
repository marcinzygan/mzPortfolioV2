import HeroAnimation from "./HeroAnimation"
export default function Hero(){
    return(
    <section>
        <div className="hero__intro">

                <h1 className="hero__h1">
                    <span className="span span__dark">{"<h1>"}</span>
                    Hello <br></br>
                    World...
                    <span className="span span__dark">{"</h1>"}</span>
                </h1>

                <h2 className="hero__h2">
                <span className="span">{"<h2>"}</span>
                <span className="span__name">I am Marcin Zygan </span><br></br>
                <span className="span">{"<span>"}</span>
                Front end Developer 
                <span className="span">{"</span>"}</span> <br></br>
                <span className="span">{"<h2>"}</span> 
                </h2>
        </div>
        <HeroAnimation/>
        <a href="#work" className="btn">My Work</a>
    </section>
    )
}