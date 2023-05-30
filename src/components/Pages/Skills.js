import React from "react";
import { assets } from "../assests/assests";
import "./Skill.css";
import { useInView } from "react-intersection-observer";
import Projects from "./Projects";

const Skills = () => {
  const [skills, inViewSection3] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div>
      
      <div id="skills-section" ref={skills} className="headingSkill">
        <h1>Skills</h1>
        <div className="skillList">
          {assets.map((item) => (
            <div key={item.id} className="skillList-row">
              <div>
                <img src={item.htmlImg} alt="" className="item" />
                <img src={item.cssImg} alt="" className="item" />
              </div>
              <div>
                <img src={item.javascriptImg} alt="" className="item" />
                <img src={item.react} alt="" className="item" />
              </div>
              <div>
                <img src={item.tailwind} alt="" className="item" />
                <img src={item.material} alt="" className="item" />
              </div>
              <div>
                <img src={item.bootstrap} alt="" className="item" />
                <img src={item.gitHub} alt="" className="item" />
              </div>
            </div>
          ))}
        </div>
      </div>
    
    </div>
  );
};

export default Skills;
