import React from "react";
import about from "../assets/images/about.svg";
import { motion, useAnimation } from "framer-motion";

function AboutMe() {
  return (
    <section id="about" className="hero-section about-me-section">
      <div className="container">
        <div className="row  align-items-center">
          <div className="col-md-6">
            <div className="right-img">
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img src={about} alt="About Me" />
              </motion.div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="left-content">
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2>
                  About <span className="lg-bold">Me</span>
                </h2>
              </motion.div>
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <p>
                  I am a passionate Frontend Developer with a strong focus on
                  creating modern, responsive, and user-friendly web interfaces.
                  I enjoy transforming ideas into high-quality web experiences
                  that are visually appealing, functional, and efficient.
                </p>
              </motion.div>
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <p>
                  Over the years, I have honed my skills in HTML, CSS,
                  JavaScript, and popular frameworks like React and Bootstrap,
                  allowing me to build seamless and interactive websites.
                </p>
              </motion.div>
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <p>
                  I take pride in writing clean, maintainable code and designing
                  smooth, intuitive user experiences. Collaborative by nature, I
                  work well with designers, developers, and clients to deliver
                  web applications that meet expectations and delight users.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
