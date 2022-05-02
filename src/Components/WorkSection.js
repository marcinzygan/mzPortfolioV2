import Heading from "./Heading"
import { ProjectsData } from "./ProjectsData"
import Project from "./Project"




export default function WorkSection(){

const allProjects = ProjectsData.map(data => 
    <Project
        key={data.id}
        // id={data.id}
        projectImg={data.mainImage}
        images={data.images}
        alt={data.name}
        projectName={data.name}
        projectContent={data.content}  
    />
    )


    return(
    <section id="work" className="work__section" >

        <Heading
        sectionHeading={"My Work"}
        />

    <div className="project__background">
        {/* Displays all data mapped as a project component */}
        {allProjects}
    </div>
  
    <div className="section__number">01</div>

    </section>
    )
}