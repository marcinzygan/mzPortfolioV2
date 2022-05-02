import Heading from "./Heading"

import Project from "./Project"
import projectImg1 from "../Images/project1.jpg"



export default function WorkSection(){




    return(
        <section id="work" className="work__section" >

        <Heading
        sectionHeading={"My Work"}
        />
    <div className="project__background">
        <Project
        projectImg={projectImg1}
        alt={"ProjectAlt1"}
        projectName={"Art Website"}
        projectContent={"Lorem22"}  
        />

        <Project
        projectImg={projectImg1}
        alt={"ProjectAlt2"}
        projectName={"Project 2"}
        projectContent={"Lorem33"}
        />

        <Project
        projectImg={projectImg1}
        alt={"ProjectAlt3"}
        projectName={"Project 3"}
        projectContent={"Lorem44"}
        />

        <Project
        projectImg={projectImg1}
        alt={"ProjectAlt4"}
        projectName={"Project 3"}
        projectContent={"Lorem55"}
        />
    </div>
  
    <div className="section__number">01</div>
        </section>
    )
}