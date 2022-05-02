import Modal from "./Modal"
import React from "react"

export default function Project(props){

    const [isModalOpen , setIsModalOpen] = React.useState(false)   

    function modalToggle(){
        setIsModalOpen(prevState => !prevState)
        
    }
    return(
        <>
        <div className="project__container" >
            <img className="project__img" src={props.projectImg} alt={props.alt} onClick={modalToggle}></img>
        </div>

          <Modal
          id={props.id}
          isModalOpen={isModalOpen}
          onClick={modalToggle}
          modalContent={props.projectContent}
          projectName={props.projectName}
          images={props.images}
          />
          </>
    )
}