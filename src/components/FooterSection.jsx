import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

export default function FooterSection() {
  return (
    <footer className="pf-footer">
      <div className="container">
        <div className="pf-footer__inner">
          <p>© {new Date().getFullYear()} Designed &amp; built by Noor Fatima</p>
          <div className="pf-footer__links">
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
        </div>
      </div>
    </footer>
  );
}
