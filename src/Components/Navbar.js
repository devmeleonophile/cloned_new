import "../Styles/Navbar.css";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

function Navbar({ fetchData }) {
  const [show, handleShow] = useState(false);
  const [teams, setTeams] = useState({
    objects: [
      { name: "Creative & Content", id: 1 },
      { name: "print", id: 2 },
      { name: "Digital", id: 3 },
      { name: "Moving Images", id: 4 },
      { name: "Languages", id: 5 },
      { name: "Quality", id: 6 },
      { name: "Operation Excellence", id: 7 },
      { name: "Human Resources", id: 8 },
      { name: "Facilities", id: 9 }
    ]
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <>
      <header
        className="Banner_header"
        style={{
          backgroundRepeat: "no-repeat",

          backgroundPosition: "center center",
          height: "96px",
          objectFit: "contain"
        }}
      >
        <div className={`nav ${show && "nav_bg"}`}>
          <h2 className="logo">HOGARTH</h2>
          <ul className="profile">
            <li>career framework</li>
            <li>Best Practices</li>
            <li>Guides</li>
            <li>Login</li>
          </ul>
        </div>
      </header>
      <section className="section-part">
        <div className="center_content grow">
          <h1 className="center-part">
            Carrer <br /> Framework
          </h1>
        </div>
        <p
          style={{
            textAlign: "left",
            color: "gray",
            marginLeft: "50px",
            marginTop: "10px"
          }}
        >
          step by step guides and paths to learn career framework tools
        </p>
      </section>
      <div className="main-container">
        {teams.objects.map((item, index) => {
          return (
            <div className="parent-item">
              <div key={item.id} className="teams" id={`team${index}`}>
                {item.name}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Navbar;
