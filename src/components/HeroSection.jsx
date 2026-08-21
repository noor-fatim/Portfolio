import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import heroImg from "../assets/images/hero.jpeg";

const fade = (delay = 0) => ({
  initial: { y: 28, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

export default function HeroSection() {
  return (
    <section id="top" className="pf-hero">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <motion.p {...fade(0)} className="pf-eyebrow">
              MERN Stack Developer
            </motion.p>

            <motion.h1 {...fade(0.06)}>
              Hello, I&apos;m Noor Fatima —
              <br />I build <em>fast</em>,{" "}
              <span className="pf-outline">thoughtful</span> web products.
            </motion.h1>

            <motion.p {...fade(0.12)} className="pf-hero__lead">
              Full-stack developer working with MongoDB, Express.js, React and Node.js.
              I care about efficient interfaces, clean REST APIs and code that stays
              readable long after it ships.
            </motion.p>

            <motion.div {...fade(0.18)} className="pf-hero__meta">
              <a className="pf-btn" href="#projects">
                View Work
              </a>
              <a className="pf-btn pf-btn--ghost" href="#contact">
                Get in touch
              </a>
              <div className="pf-socials">
                <a
                  href="https://www.linkedin.com/in/noor-fatima-0-"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/noor-fatim"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <BsGithub />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-5">
            <motion.div {...fade(0.1)} className="pf-hero__art">
              <img
                src={heroImg}
                alt="Illustration of Noor Fatima working at a laptop"
                width={1024}
                height={1024}
              />
              <div className="pf-hero__badge">
                1+ yr
                <small>Building for the web</small>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
