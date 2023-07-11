import React, { Fragment, useRef, useState } from "react";
import axios from "axios";

import "./Contact.css";
import { useInView } from "react-intersection-observer";
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [refSection2, inViewSection2] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const nameInputRef = useRef();
  const emailRef = useRef();
  const phoneNumRef = useRef();
  const messageRef = useRef();

  const onContactSubmit = async (e) => {
    e.preventDefault();
    const contactDetails = {
      nameInput: nameInputRef.current.value,
      emailInput: emailRef.current.value,
      phoneInput: phoneNumRef.current.value,
      messageInput: messageRef.current.value,
    };

    setLoading(true);
    try {
      const response = await axios.post(
        "https://portfoliocontact-cd60c-default-rtdb.firebaseio.com/contact.json",
        contactDetails
      );

      setLoading(false);
      alert("Message Sent Successfully");
      const responseData = await response.data;
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <section>
        <div className="ContactHeading" id="section-3" ref={refSection2}>
          <div>
            <h2>Get In Touch</h2>
            <h3>Let's make something special!</h3>
            <p>Send me an email.👋</p>
          </div>
          <div>
            <form onSubmit={onContactSubmit}>
              <div className=" form-control-action input">
                <input
                  type="email"
                  ref={nameInputRef}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Your Name"
                  required
                ></input>
              </div>

              <div className=" form-control-action input">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Your Email"
                  ref={phoneNumRef}
                  required
                ></input>
              </div>
              <div className=" form-control-action input">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  ref={emailRef}
                  placeholder="Your Phone"
                  required
                ></input>
              </div>
              <div className="textarea-control">
                <textarea
                  ref={messageRef}
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="action-control">
                <button type="button" className="btn btn-success">
                  Send Message
                </button>
              </div>
              {loading && <p>sending request...</p>}
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
