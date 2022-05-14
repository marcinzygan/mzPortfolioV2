import React from "react";
import { ProjectsData } from "./ProjectsData";
import Heading from "./Heading";
import Project from "./Project";
import Modal from "./Modal";
import Shapes from "../Images/about__shapes.svg";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function WorkSection(props) {
  // Set the state for the dynamic change of the content inside modal
  const [modalContent, setModalContent] = React.useState([]);
  //Set state to check if modal is opened
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Function to change content inside modal
  const modalContentChange = (data) => {
    setModalContent([data]);
    setIsModalOpen(true);
  };
  // Function to close and open modal
  function modalToggle() {
    setIsModalOpen((prevState) => !prevState);
  }

  //Map over the data array any create <Project> component for each item .

  const allProjects = ProjectsData.map((data, index) => (
    <motion.div
      key={data.id}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
      variants={{
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 1.5, delay: index * 0.2 },
        },
        hidden: { opacity: 0, x: 10 },
      }}
    >
      <Link
        onClick={() => modalContentChange(data)}
        to="work"
        smooth={true}
        offset={-15}
      >
        <Project
          // key={data.id}
          projectImg={data.mainImage}
          images={data.images}
          alt={data.name}
          projectName={data.name}
          // projectContent={data.content}
          // projectContent2={data.content2}
          // projectContent3={data.content3}
          onClick={() => modalContentChange(data)}
        />
      </Link>
    </motion.div>
  ));

  return (
    <section id="work" className="work__section">
      <Heading
        sectionHeading={"My Work"}
        sectionSubHeading={"Projects that I am proud of ."}
      />
      <div className="work__container">
        <div className="project__background">
          {/* Displays all data mapped as a project component */}
          {allProjects}

          {/* Conditionaly renders modal if its true (open) */}
          {/* {isModalOpen && */}

          <Modal
            modalContent={modalContent}
            onClick={modalToggle}
            isModalOpen={isModalOpen}
          />
        </div>

        <motion.div
          className="about__shapes-container"
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
          variants={{
            visible: {
              opacity: 0.8,
              x: 0,
              transition: { duration: 3, delay: 0.2 },
            },
            hidden: { opacity: 0, x: -10 },
          }}
        >
          <img
            src={Shapes}
            alt="geometric shapes"
            className="work__shapes-img"
          ></img>
        </motion.div>
      </div>

      <div className="section__number-container">
        <p className="section__number">01</p>
      </div>
    </section>
  );
}
