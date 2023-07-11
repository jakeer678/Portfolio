import React from "react";
import { useInView } from "react-intersection-observer";
import "./About.css";
import { Button } from "@mui/material";
import LinearWithValueLabel from "./LinearWithValueLabel";
const About = () => {
  const [refSection2, inViewSection2] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section>
      <div id="section-2" ref={refSection2} className="aboutPage">
        <div>
          <h1>About Me</h1>
          <div className="aboutText">
            <p>
              I have rich experience in programming and developing websites
              which are scalable and mobile friendly. Using Libraries like
              React, Bootstrap, Tailwind CSS. I build online presense for your
              business. The websites are built to run across all platforms and
              are mobile friendly.
            </p>
            <div className="btn">
              <Button variant="contained" color="warning">
                Contact Me
              </Button>
            </div>
            <div>
              <LinearWithValueLabel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
