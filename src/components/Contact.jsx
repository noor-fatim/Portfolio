import { motion } from "framer-motion";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import contactImg from "@/assets/images/contact.jpeg";

export default function Contact() {
  return (
    <section id="contact" className="pf-section pf-section--light">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p className="pf-eyebrow">Contact</p>
              <h2 className="pf-title">
                Let&apos;s build something <em>together</em>
              </h2>
              <p>
                I&apos;m always open to new projects, opportunities or collaborations.
                Whether you have a question, an idea, or just want to say hi — reach
                out and I&apos;ll reply as quickly as I can.
              </p>

              <ul className="pf-contact__list">
                <li>
                  <MdEmail />
                  <div>
                    <small>Email</small>
                    <a href="mailto:noorf52431@gmail.com">noorf52431@gmail.com</a>
                  </div>
                </li>
                <li>
                  <MdPhone />
                  <div>
                    <small>Phone</small>
                    <a href="tel:+923097695097">+92 309 7695097</a>
                  </div>
                </li>
                <li>
                  <FaLinkedin />
                  <div>
                    <small>LinkedIn</small>
                    <a
                      href="https://www.linkedin.com/in/noor-fatima-0-"
                      target="_blank"
                      rel="noreferrer"
                    >
                      linkedin.com/in/noor-fatima-0
                    </a>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="col-lg-5 offset-lg-1">
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="pf-contact__art"
            >
              <img
                src={contactImg}
                alt="Illustration of a person beside a phone with a mail icon"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}