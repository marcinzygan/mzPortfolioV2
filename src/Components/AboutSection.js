import Heading from "./Heading";
import AboutImg from "../Images/marcin.jpg";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function AboutSection(props) {
  return (
    <section id="about" className="about__section">
      <Heading
        sectionHeading={"About Me"}
        sectionSubHeading={"Few words about myself."}
      />

      <div className="about__container">
        <motion.img
          src={AboutImg}
          alt="marcin zygan"
          className="about__img"
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 2, delay: 0.5 },
            },
            hidden: { opacity: 0, y: -100 },
          }}
        ></motion.img>

        <motion.div
          className="about__txt-top"
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
          <span className="span">{"<p>"}</span>
          <p className="about__txt ">
            <span className="about__span-title">Hello World ...</span> My name
            is Marcin Zygan and I am Front-end Developer and Graphic Designer.
            <br></br>
            <br></br>I created my first website in 2001 . <br></br>
            It was a website for Diablo 2 gaming community.<br></br>
            Althoug I didn't pursue a web developer career for many years.
            <br></br>I became a professional Chef instead .<br></br>I was still
            following how web design is evolving during these many years .
            <br></br>
            <br></br>
            In late 2021 I have decided that I want to become Front-end
            Developer. I started learning from basics Html , Css , and
            JavaScript , and in early 2022 I started a part-time career as a
            freelance Web Developer and Graphic Designer.<br></br>
            <br></br>I am highly motivated to switch from Chef to Front-end
            Developer full time , and Hopefully I will find my dream job so I
            can progress quicker .<br></br>
            <br></br>
            Currently I am learning React; in fact this website is fully powered
            by React.
          </p>
          <span className="span span__about-bottom">{"</p>"}</span>
          <br></br>
          <br></br>
        </motion.div>

        {/* Animation  */}
        <div className="about__animation-container">
          <div className="about__animation">
            <Icon
              icon="ci:file-html"
              className={
                !props.isHtmlIconClicked
                  ? "html__icon"
                  : "html__icon html__icon-active"
              }
              onClick={props.HtmlIconToggle}
            />
            <Icon
              icon="ion:logo-react"
              className={
                !props.isReactIconClicked
                  ? "react__icon"
                  : "react__icon react__icon-active"
              }
              onClick={props.ReactIconToggle}
            />
            <Icon
              icon="ci:file-css"
              className={
                !props.isCssIconClicked
                  ? "css__icon"
                  : "css__icon css__icon-active"
              }
              onClick={props.CssIconToggle}
            />

            <div className="inner__circle">
              {/* <img
                className="puppet"
                src="https://c.tenor.com/6On54eyPJNkAAAAC/run-forrest-puppet.gif"
                alt="puppet"
              ></img> */}
            </div>

            <div
              className={
                !props.isAllIconsClicked
                  ? "circle__about"
                  : "circle__about circle__about-active"
              }
            ></div>
          </div>
        </div>

        <div className="about__rectangle-container">
          <motion.div
            className="about__rectangle1"
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true }}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 2, delay: 0.5 },
              },
              hidden: { opacity: 0, y: -20 },
            }}
          >
            <div
              className={
                !props.isAllIconsClicked
                  ? "about__overlay"
                  : "about__overlay about__overlay-active"
              }
            ></div>
          </motion.div>
          <motion.div
            className="about__rectangle2"
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true }}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 2, delay: 1.5 },
              },
              hidden: { opacity: 0, y: -20 },
            }}
          >
            <div
              className={
                !props.isAllIconsClicked
                  ? "about__overlay"
                  : "about__overlay about__overlay-active"
              }
            ></div>
          </motion.div>
        </div>

        <motion.div
          className="about__txt-bottom"
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 2, delay: 0.5 },
            },
            hidden: { opacity: 0, y: -100 },
          }}
        >
          <span className="span">{"<p>"}</span>
          <p className="about__txt ">
            In my free time when it is windy enough , I am usually going for an
            amazing kiteboarding session .<br></br>
            <br></br>
            And when there is no wind, I have a backup plan. Standup paddle
            boarding .<br></br>
            <br></br>I also love running and to this day I have completed 1
            Marathon and 21 Half Marathons .<br></br>
          </p>
          <span className="span span__about-bottom">{"</p>"}</span>
        </motion.div>
      </div>
      <div className="section__number-container">
        <p className="section__number">02</p>
      </div>
    </section>
  );
}
