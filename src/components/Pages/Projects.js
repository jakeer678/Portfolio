import React from "react";
import { useInView } from "react-intersection-observer";
import "./Projects.css";
import { projects } from "../assests/assests";
import { Button } from "@mui/material";

const Projects = () => {
  const [projectsRef, inViewProjects] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div id="projects" ref={projectsRef} className="projects-conn">
      <div className="projectsList">
        <h1>PROJECTS ⬇</h1>

        <div>
          {projects?.map((item) => (
            <div key={item.id} className="image-container">
              <div className="sub-contaner">
                <a
                  href="https://github.com/jakeer678/Expense-Tracker"
                  className="text-overlay"
                >
                 {item.Expense}
                </a>
                <img src={item.ExpenseTracker} alt="" />
              </div>
              <div className="sub-contaner">
                <a
                  href="https://github.com/jakeer678/Mail-Box-Client"
                  className="text-overlay"
                >
                  {item.MailBox}
                </a>

                <img src={item.Mailboxclient} alt="" />
              </div>
              <div className="sub-contaner">
                <a
                  href="https://github.com/jakeer678/Ecommerce-website-/tree/master"
                  className="text-overlay"
                >
                 {item.ecommerce}
                </a>

                <img src={item.Ecommerce} alt="" />
              </div>
              <div className="sub-contaner">
                <a
                  href="https://github.com/jakeer678/Restaurant"
                  className="text-overlay"
                >
                 {item.Restuarant}
                </a>

                <img src={item.restaurant} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
