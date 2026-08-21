import { motion } from "framer-motion";
import aboutImg from "../assets/images/about.jpeg";

export default function AboutMe() {
  return (
    <section id="about" className="pf-section pf-section--light">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="pf-about__art"
            >
              <img
                src={aboutImg}
                alt="Illustration of a developer beside a monitor showing code"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </motion.div>
          </div>

          <div className="col-lg-6 offset-lg-1">
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p className="pf-eyebrow">About</p>
              <h2 className="pf-title">
                Turning ideas into <em>refined</em> interfaces
              </h2>
              <p className="mb-3">
                I&apos;m a frontend-focused developer with a strong bias toward modern,
                responsive and genuinely usable web interfaces — visually considered,
                functional and quick.
              </p>
              <p className="mb-3">
                Over the years I&apos;ve sharpened my skills in HTML, CSS, JavaScript
                and frameworks like React and Bootstrap, which lets me build seamless,
                interactive websites end to end.
              </p>
              <p>
                I take pride in clean, maintainable code and smooth user experiences,
                and I work closely with designers, developers and clients to ship work
                that meets expectations.
              </p>

              <div className="pf-about__stats">
                <div>
                  <strong>9+</strong>
                  <small>Technologies</small>
                </div>
                <div>
                  <strong>2</strong>
                  <small>Shipped apps</small>
                </div>
                <div>
                  <strong>100%</strong>
                  <small>Responsive builds</small>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}