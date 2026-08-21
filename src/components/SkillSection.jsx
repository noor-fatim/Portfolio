import React from "react";
import jsImg from "../assets/images/js.png";
import reactImg from "../assets/images/react-img.png";
import saasImg from "../assets/images/saas-img.png";
import tailwindImg from "../assets/images/tailwind-img.png";
import gitImg from "../assets/images/git.png";
import bootstrapImg from "../assets/images/bootstrapImg.png";
import nodeImg from "../assets/images/nodedotjs.svg";
import expressImg from "../assets/images/express.svg";
import mongodbImg from "../assets/images/mongodb.svg";
import { motion, useAnimation } from "framer-motion";


function SkillSection() {

  return (
    <section id="skills" className="hero-section skill-section">
      <div className="container">
        <h2>
          My <span className="lg-bold">SKills</span>
        </h2>
        <div className="skill-wrapper">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="skill-card">
              <img src={jsImg} alt="JavaScript" />
              <h5>Javascript</h5>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="skill-card">
              <img src={reactImg} alt="React" />
              <h5>React</h5>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="skill-card">
              <img src={bootstrapImg} alt="Bootstrap" />
              <h5>Bootstrap</h5>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="skill-card">
              <img src={saasImg} alt="Sass" />
              <h5>Sass/Scss</h5>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="skill-card">
              <img src={tailwindImg} alt="Tailwind CSS" />
              <h5>Tailwind CSS</h5>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="skill-card">
              <img src={gitImg} alt="Git" />
              <h5>Git</h5>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="skill-card">
              <img src={nodeImg} alt="Node.js" />
              <h5>Node.js</h5>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="skill-card">
              <img src={expressImg} alt="Express.js" />
              <h5>Express.js</h5>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="skill-card">
              <img src={mongodbImg} alt="MongoDB" />
              <h5>MongoDB</h5>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
