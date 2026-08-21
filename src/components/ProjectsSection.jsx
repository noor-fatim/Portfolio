import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const PROJECTS = [
  {
    index: "01",
    title: "ChatApp",
    body: "A real-time chat application with a simple, easy-to-use interface. Responsive and fast, so conversations stay smooth on any device.",
    tags: ["React", "Realtime", "Responsive"],
    href: "https://app-my-chat.netlify.app/",
  },
  {
    index: "02",
    title: "To-Do App",
    body: "A Firebase-backed task manager where users create, edit and delete tasks with real-time storage — built to keep people organised and productive.",
    tags: ["React", "Firebase", "CRUD"],
    href: "https://app-todo-add.netlify.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="pf-section">
      <div className="container">
        <div className="row align-items-end g-4 mb-4">
          <div className="col-lg-7">
            <p className="pf-eyebrow">Selected Work</p>
            <h2 className="pf-title mb-0">
              Projects I&apos;ve <em>built</em>
            </h2>
          </div>
        </div>

        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: i * 0.06 }}
            className="pf-project"
          >
            <div className="row align-items-center g-4 g-lg-5">
              <div className={`col-lg-6 ${i % 2 ? "order-lg-2" : ""}`}>
                <a
                  className="pf-project__shot d-block"
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{p.title}</span>
                </a>
              </div>
              <div className={`col-lg-5 ${i % 2 ? "order-lg-1" : "offset-lg-1"}`}>
                <div className="pf-project__index">{p.index}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <div className="pf-project__tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <a
                  className="pf-btn pf-btn--ghost"
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live site <FaArrowUpRightFromSquare />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}