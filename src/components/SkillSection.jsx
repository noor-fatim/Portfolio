import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiSass,
  SiTailwindcss,
  SiGit,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const SKILLS = [
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiReact, label: "React" },
  { icon: SiBootstrap, label: "Bootstrap" },
  { icon: SiSass, label: "Sass / SCSS" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiGit, label: "Git" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiExpress, label: "Express.js" },
  { icon: SiMongodb, label: "MongoDB" },
];

export default function SkillSection() {
  return (
    <section id="skills" className="pf-section pf-section--light">
      <div className="container">
        <div className="row align-items-end g-4 mb-5">
          <div className="col-lg-6">
            <p className="pf-eyebrow">Toolkit</p>
            <h2 className="pf-title mb-0">
              Technologies I <em>work with</em>
            </h2>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <p>
              A stack chosen for speed and maintainability — from crafting interfaces
              to shipping the API behind them.
            </p>
          </div>
        </div>

        <div className="row g-3 g-md-4">
          {SKILLS.map(({ icon: Icon, label }, i) => (
            <div className="col-6 col-md-4 col-lg-3" key={label}>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="pf-skill-card"
              >
                <Icon />
                <h5>{label}</h5>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}