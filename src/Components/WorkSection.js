import Heading from "./Heading"
import { ProjectsData } from "./ProjectsData"
import Project from "./Project"
import Modal from "./Modal"
import React from "react"




export default function WorkSection(){

// Set the state for the dynamic change of the content inside modal 
const [modalContent , setModalContent] = React.useState([])
//Set state to check if modal is opened
const [isModalOpen , setIsModalOpen] = React.useState(false)

// Function to change content inside modal
const modalContentChange = (data) => {
    setModalContent([data])
    setIsModalOpen(true)
}
// Function to close and open modal 
 function modalToggle(){
    setIsModalOpen(prevState => !prevState)
    }
   
    //Map over the data array any create <Project> component for each item . 
const allProjects = ProjectsData.map(data => 
    <Project
        key={data.id}
        projectImg={data.mainImage}
        images={data.images}
        alt={data.name}
        projectName={data.name}
        projectContent={data.content}
        projectContent2={data.content2}
        
        onClick={()=>modalContentChange(data)}  
    />
    )


    return(
    <section id="work" className="work__section" >

        <Heading
        sectionHeading={"My Work"}
        sectionSubHeading={"Projects that I am proud of ."}
        />

    <div className="project__background">
        {/* Displays all data mapped as a project component */}
        {allProjects}

        {/* Conditionaly renders modal if its true (open) */}
        {isModalOpen &&
        <Modal
        modalContent={modalContent}
        onClick={modalToggle}
        />
        }
        
    </div>
    
    <div className="section__number-container">
    <p className="section__number">01</p>
        </div>
    </section>
    )
}