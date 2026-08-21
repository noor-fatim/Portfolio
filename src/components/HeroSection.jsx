import React from "react";
import hero from "../assets/images/hero.svg";
import { motion, useAnimation } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="left-content">
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2>
                  Hello I'm <span className="lg-bold">Noor Fatima</span>.<br />
                  <span className="lg-bold">MERN Stack</span>{" "}
                  <span className="border-text">Developer</span>
                </h2>
              </motion.div>
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <p>
                  MERN Stack Developer with experience building responsive,
                  full-stack web applications using MongoDB, Express.js, React,
                  and Node.js. Interested in creating efficient and
                  user-friendly interfaces, building RESTful APIs, and
                  contributing to real-world projects while improving technical
                  skills.
                </p>
              </motion.div>
              <div className="icon-wrapper">
                <a href="https://www.linkedin.com/in/noor-fatima-0-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/noor-fatim">
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-img">
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img src={hero} alt="Hero" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
