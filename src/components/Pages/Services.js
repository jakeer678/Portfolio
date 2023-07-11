import React from "react";
import { useInView } from "react-intersection-observer";
import "./Services.css";
import { Button } from "@mui/material";
import { Link } from "react-scroll";

const Services = () => {
  const [servicesSection, inViewSection2] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section>
      <div id="services" ref={servicesSection} className="serviceSection">
        <h1>Services</h1>
        <div className="servicesecton">
          <div className="serviceSection_details">
            <div className="imageUi">
              <img
                src="	https://www.govardhini.com/assets/images/service-1.svg"
                alt="imageui"
              />
            </div>

            <h2>UI/UX design</h2>
            <p>
              Create intuitive design for your website including branding and
              style guide, custom iconography, Social Media buttons and lot
              more.
            </p>
          </div>
          <div className="serviceSection_1">
            <div className="serviceSection_details_devlopement">
              <div className="imageUi">
                <img
                  src="https://www.govardhini.com/assets/images/service-2.svg"
                  alt="imageui"
                />
              </div>

              <h2>Development</h2>
              <p>
                Create online presense for your brand using websites, that are
                optimized for speed, fully mobile responsive and adaptive for
                all devices.
              </p>
            </div>
          </div>
        </div>

        <div className="custom">
          <p>Looking for a custom job?</p>
        </div>
        <div className="btn">
          <Button variant="contained" color="warning">
            <Link to="section-3" smooth={true} duration={1000}>Contact Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
