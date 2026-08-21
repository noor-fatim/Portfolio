import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const openResume = () => window.open("/Noor Fatima_cv.pdf", "_blank");

  return (
    <header className="pf-nav">
      <div className="container">
        <div className="pf-nav__inner">
          <a href="#top" className="pf-brand">
            Noor<span>.</span>Fatima
          </a>

          <nav className="pf-nav__links">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <button className="pf-btn pf-nav__cta" onClick={openResume}>
            Resume <MdOutlineFileDownload />
          </button>

          <button
            className="pf-burger"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>

        {open && (
          <div className="pf-mobile-menu">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <button onClick={openResume}>Resume</button>
          </div>
        )}
      </div>
    </header>
  );
}