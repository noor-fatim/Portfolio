import React from "react";
import project from "../assets/images/project.png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import todoImg from "../assets/images/todo.png";

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="hero-section experience-section projects-section"
    >
      <div className="container">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2>
            My <span className="lg-bold">Projects</span>
          </h2>
        </motion.div>
        <div className="projects-wrapper">
          <div className="project-div">
            <div className="row align-items-center mb-5">
              <div className="col-md-6">
                <div className="img-section">
                  <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <img src={project} alt="Project" />
                  </motion.div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-section">
                  <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <span>01</span>
                  </motion.div>
                  <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <h3>ChatApp</h3>
                  </motion.div>
                  <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <p>
                      I built a chat app where users can send messages in
                      real-time through a simple and easy-to-use interface. The
                      app is responsive and fast, making it smooth for users to
                      connect and chat seamlessly.
                    </p>
                    <a href="https://app-my-chat.netlify.app/">
                      <FaArrowUpRightFromSquare />
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="row align-items-center mt-5">
              <div className="col-md-6">
                <div className="text-section">
                  <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <span>02</span>
                  </motion.div>
                  <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <h3>To-Do App (Firebase-Based)</h3>
                  </motion.div>
                  <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <p>
                      I developed a to-do app that allows users to create, edit,
                      and delete tasks with real-time data storage using
                      Firebase. The app is responsive and user-friendly, helping
                      users stay organized and productive.
                    </p>
                    <a href="https://app-todo-add.netlify.app/">
                      <FaArrowUpRightFromSquare />
                    </a>
                  </motion.div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-section">
                  <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <img src={todoImg} alt="Project" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
