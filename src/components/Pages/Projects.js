import React, { useState } from "react";
import { projects } from "../assests/assests";
import { useInView } from "react-intersection-observer";
import "./Projects.css";
import Button from "@mui/material/Button";
const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [projectsRef, inViewProjects] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div id="projects" ref={projectsRef} className="projects">
      <div className="projectsList">
        <h1>Projects</h1>
        {projects.map((item, index) => (
          <div key={index}>
            <div
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={`image ${hoveredIndex === index ? "hovered" : ""}`}
            >
              <p className="btnimage">{item.ecommerce}</p>
              <img src={item.Ecommerce} alt="" className="image" />
            </div>

            <div
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={`image ${hoveredIndex === index ? "hovered" : ""}`}
            >
              <p className="btnimage">{item.Expense}</p>
              <img src={item.ExpenseTracker} alt="" />
            </div>

            <div
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={`image ${hoveredIndex === index ? "hovered" : ""}`}
            >
              <p className="btnimage">{item.MailBox}</p>
              <img src={item.Mailboxclient} alt="" />
            </div>

            <div
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={`image ${hoveredIndex === index ? "hovered" : ""}`}
            >
              <p className="">{item.restaurantName}</p>
              <img src={item.restaurant} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
