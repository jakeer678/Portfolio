import React, { Fragment } from "react";
import "./Home.css";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const [refSection3, inViewSection3] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <Fragment>
      <div id="section-1" ref={refSection3} className="sectionHome">
        <div className="profile">
          <img src="jakee.png" alt="profile" />
        </div>
        <div className="profile_heading">
          <h2>
            I'm a Software Developer having experience in <br></br>working
            across the front-end technologies <br></br>such as React.js,
            Javascript, Tailwind CSS, Bootstrap, Material-UI, CSS, HTML5.
          </h2>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
