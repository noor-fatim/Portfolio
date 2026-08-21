import { motion } from "framer-motion";

const ROLES = [
  {
    title: "Frontend Developer at GMZ",
    period: "Nov 1st — Present",
    body: "Frontend Developer at Genius Mind Zone, creating modern, responsive and easy-to-use websites. Experienced in turning ideas into reliable, high-quality web experiences with a focus on clean, efficient and maintainable code.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="pf-section">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <p className="pf-eyebrow">Experience</p>
            <h2 className="pf-title mb-0">
              Where I&apos;ve <em>worked</em>
            </h2>
          </div>

          <div className="col-lg-7 offset-lg-1">
            {ROLES.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="pf-exp-card"
              >
                <div className="pf-exp-card__meta">
                  <h3>{role.title}</h3>
                  <span>{role.period}</span>
                </div>
                <p>{role.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}