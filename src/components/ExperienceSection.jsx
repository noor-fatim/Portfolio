import React from "react";
import { motion, useAnimation } from "framer-motion";

function ExperienceSection() {
  return (
    <section className="hero-section experience-section">
      <div className="container">
        <h2>
          My <span className="lg-bold">Experience</span>
        </h2>
        <div className="experience-wrapper">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="experience-card">
              <div className="top-content">
                <h3>Frontend Developer at GMZ</h3>
                <span>Nov 1st - Present</span>
              </div>
              <p>
                Frontend Developer at Genius Mind Zone, creating modern,
                responsive, and easy-to-use websites. Experienced in turning
                ideas into reliable, high-quality web experiences. Enjoy making
                smooth, user-friendly designs. Focused on writing clean,
                efficient, and easy-to-maintain code.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
