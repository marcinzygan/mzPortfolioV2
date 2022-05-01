export default function Project(props){
    return(
        <div className="project__container">
            <img className="project__img" src={props.projectImg} alt={props.alt}></img>
        </div>
    )
}