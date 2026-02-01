import React from "react";
import contact from "../assets/images/contact.svg";
import { motion, useAnimation } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="hero-section contact-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-text">
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2>
                  Contact <span className="lg-bold">Me</span>
                </h2>
              </motion.div>
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <p>
                  I’m always open to discussing new projects, opportunities, or
                  collaborations. Whether you have a question, an idea, or just
                  want to say hi, feel free to reach out. I’ll do my best to
                  respond as quickly as possible.
                </p>
              </motion.div>
              <ul>
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <li>
                    <span> Email:</span> noorf52431@gmail.com
                  </li>
                </motion.div>
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <li>
                    <span> Phone :</span> +92 309 7695097
                  </li>
                </motion.div>
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <li>
                    <span> LinkedIn :</span>{" "}
                    <a
                      href="https://www.linkedin.com/in/noor-fatima-0"
                      target="_blank"
                      rel="noreferrer"
                    >
                      www.linkedin.com/in/noor-fatima-0
                    </a>
                  </li>
                </motion.div>
              </ul>
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
                <img src={contact} alt="Contact" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
