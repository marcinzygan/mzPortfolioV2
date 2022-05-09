import {Link} from "react-scroll"

export default function Footer (props){
    return(
    <section className="footer">
        <div className="footer__background">
        <div className="pixel pixel1"></div>
        <div className="pixel pixel2"></div>
        <div className="pixel pixel3"></div>
        <div className="pixel pixel4"></div>
        <div className="footer__nav">
            <div className="footer__nav-container">
            <p className="footer__nav-title">EXPLORE</p>
            <div className="footer__nav-item">
                <Link to="home" className="footer__nav-link" spy={true} smooth={true} offset={-100} >Home </Link>    
            </div>

            <div className="footer__nav-item">
            <Link to="work" className="footer__nav-link" spy={true} smooth={true} offset={-30} >My Work </Link>
            </div>

            <div className="footer__nav-item">
            <Link to="about" className="footer__nav-link" spy={true} smooth={true} offset={-30} > About Me</Link>
            </div>
            
            <div className="footer__nav-item">
            <Link to="contact" className="footer__nav-link" spy={true} smooth={true} offset={-30} > Contact</Link>
            </div>
            </div>
            <div className="footer__nav-socials">
            <p className="footer__nav-title">FOLLOW</p>
            <a className="footer__nav-link" href="https://facebook.com/ZyganDesign">Facebook</a>
            <a className="footer__nav-link" href="https://github.com/marcinzygan">Github</a>
            <a className="footer__nav-link" href="https://www.linkedin.com/in/marcin-zygan/">LinkedIn</a>
            <a className="footer__nav-link" href="https://twitter.com/MarcinZygan">Twitter</a>
            </div>
        </div>

            <div className="footer__info">
                <p className="footer__txt">{props.currentYear}</p>
                <p className="footer__txt">© Designed and Developed by : </p>
                <p className="footer__txt">Marcin Zygan </p>
            </div>

        </div>
    </section>
    )
}