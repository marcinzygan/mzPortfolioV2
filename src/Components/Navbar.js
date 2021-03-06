import { Icon } from "@iconify/react";
import logo from "../Images/logo.svg";
import React from "react";
import { Link } from "react-scroll";

import { motion } from "framer-motion";

export default function Navbar(props) {
  return (
    <nav className="nav">
      <Link to="home" spy={true} smooth={true} offset={-100} className="logo">
        <img src={logo} alt="marcin zygan logo"></img>
      </Link>

      <motion.button
        onClick={props.onClick}
        className="nav__button"
        aria-label="toggle navigation"
        initial={{ x: 400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 3 }}
      >
        <Icon icon="ri:menu-4-line" />
      </motion.button>

      <ul className={!props.navOpen ? "nav__list" : "nav__open nav__list"}>
        <li className="nav__li">
          <Link
            onClick={props.onClick}
            to="home"
            className="nav__link"
            spy={true}
            smooth={true}
            offset={-130}
          >
            Home
          </Link>
        </li>
        <li className="nav__li">
          <Link
            onClick={props.onClick}
            to="work"
            className="nav__link"
            spy={true}
            smooth={true}
            offset={-30}
          >
            Work
          </Link>
        </li>
        <li className="nav__li">
          <Link
            onClick={props.onClick}
            to="about"
            className="nav__link"
            spy={true}
            smooth={true}
            offset={-30}
          >
            About
          </Link>
        </li>
        <li className="nav__li">
          <Link
            onClick={props.onClick}
            to="contact"
            className="nav__link"
            spy={true}
            smooth={true}
            offset={-30}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
