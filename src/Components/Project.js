

export default function Project(props){


    return(
        <>
        <div 
         className="project__container" 
         onClick={props.onClick}
        >
            <img className="project__img" src={props.projectImg} alt={props.alt} ></img>
            <div className="project__overlay">{props.projectName}</div>
        </div>

          </>
    )
}