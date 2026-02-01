import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import Dropdown from "react-bootstrap/Dropdown";

function Navbar() {
  const handlePdf = () => {
    const pdfUrl = "/Noor Fatima_cv.pdf";
    console.log("PDF URL:", pdfUrl);
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="container-fluid">
      <nav>
        <div className="row">
          <div className="col-md-4 col-6">
            <h1>Noor Fatima</h1>
          </div>
          <div className="col-md-8 col-6">
            <div className="tabs-wrapper">
              <div className="left-section">
                <a href="#about">About Me</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact Me</a>
              </div>
              <div>
                <button
                  onClick={handlePdf}
                  className="download-btn"
                  rel="noreferrer"
                >
                  Resume
                  <MdOutlineFileDownload />
                </button>
              </div>
            </div>

            <div className="small-screen-menu">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <IoMdMenu />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#about">About Me</Dropdown.Item>
                  <Dropdown.Item href="#skills">Skills</Dropdown.Item>
                  <Dropdown.Item href="#projects">Projects</Dropdown.Item>
                  <Dropdown.Item href="#contact">Contact Me</Dropdown.Item>
                  <Dropdown.Item onClick={handlePdf}>
                    Resume <MdOutlineFileDownload />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
