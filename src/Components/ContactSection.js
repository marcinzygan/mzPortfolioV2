import Form from "./Form";
import Heading from "./Heading";
import { Icon } from "@iconify/react";
import contactImg from "../Images/contact.svg";
import { motion } from "framer-motion";

export default function ConstactSection() {
  return (
    <section id="contact" className="contact__section">
      <Heading
        sectionHeading={"Contact"}
        sectionSubHeading={
          "Feel free to contact me through any method listed below."
        }
      />

      <div className="contact__container">
        <motion.div
          className="contact__container-right"
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.5 },
            },
            hidden: { opacity: 0, y: -100 },
          }}
        >
          <Form />
        </motion.div>
        <motion.div
          className="contact__container-left"
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.5 },
            },
            hidden: { opacity: 0, y: -100 },
          }}
        >
          <img
            className="contact__img"
            src={contactImg}
            alt="geometric shapes"
          ></img>
          <div className="details__container">
            <p className="details__txt">Marcin Zygan</p>
            <p className="details__txt">Phone: +44 123 456 789</p>
            <p className="details__txt">Email: zygandesign@gmail.com</p>

            <div className="socials__container">
              <a href="https://facebook.com/ZyganDesign">
                <Icon
                  icon="entypo-social:facebook-with-circle"
                  className="social__icon"
                />
              </a>
              <a href="https://www.linkedin.com/in/marcin-zygan/">
                <Icon
                  icon="entypo-social:linkedin-with-circle"
                  className="social__icon"
                />
              </a>
              <a href="https://twitter.com/MarcinZygan">
                <Icon
                  icon="ant-design:twitter-circle-filled"
                  className="social__icon"
                />
              </a>
              <a href="https://github.com/marcinzygan">
                <Icon icon="fa-brands:github" className="social__icon" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="section__number-container">
        <p className="section__number">03</p>
      </div>
    </section>
  );
}
