import React from "react"

export default function Project(props){

    // const [isModalOpen , setIsModalOpen] = React.useState(false)   

    // function modalToggle(){
        
    //     setIsModalOpen(prevState => !prevState)
        
        
    // }
    return(
        <>
        <div className="project__container" onClick={props.onClick}>
            <img className="project__img" src={props.projectImg} alt={props.alt} ></img>
            <div className="project__overlay">{props.projectName}</div>
        </div>

          {/* <Modal
          id={props.id}
          isModalOpen={isModalOpen}
          onClick={modalToggle}
          modalContent={props.projectContent}
          modalContent2={props.projectContent2}
          projectName={props.projectName}
          images={props.images}
          /> */}
          </>
    )
}