import React from "react";

import { ImLocation } from "react-icons/im";

import { FiPhoneCall } from "react-icons/fi";

import {
  AiOutlineMail,
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

import { BsChevronRight } from "react-icons/bs";

import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container" data-aos="fade-in">
          <section className="left-section-footer">
            <section className="get-in-touch">
              <section className="heading">
                <h2>Get In Touch</h2>
              </section>
              <section className="context">
                <p>
                  <ImLocation /> Gyaneshwor street,ktm,Nepla
                </p>
                <p>
                  <FiPhoneCall /> +977 9841234456
                </p>
                <p>
                  <AiOutlineMail /> lekhPadh@gmail.com
                </p>
              </section>
              <section className="social-links">
                <AiFillTwitterCircle className="footer-icon" />
                <AiFillFacebook className="footer-icon" />
                <AiFillYoutube className="footer-icon" />
                <AiFillInstagram className="footer-icon" />
              </section>
            </section>
            <section className="popular-link">
              <section className="heading">
                <h2>Popular Link</h2>
              </section>
              <section className="context">
                <p>
                  <BsChevronRight /> About us
                </p>
                <p>
                  <BsChevronRight /> Contact us
                </p>
                <p>
                  <BsChevronRight /> Privacy Policy
                </p>
                <p>
                  <BsChevronRight /> Terms & Condition
                </p>
                <p>
                  <BsChevronRight /> Career
                </p>
              </section>
            </section>
          </section>
          <section className="right-section-footer">
            <section className="popular-link">
              <section className="heading"></section>
              <section className="footer-gallery">
                <img
                  src={require("../images/portfolio-1.jpg").default}
                  alt=""
                  width="60px"
                />
                <img
                  src={require("../images/portfolio-1.jpg").default}
                  alt=""
                  width="60px"
                />
                <img
                  src={require("../images/portfolio-1.jpg").default}
                  alt=""
                  width="60px"
                />
                <img
                  src={require("../images/portfolio-1.jpg").default}
                  alt=""
                  width="60px"
                />
                <img
                  src={require("../images/portfolio-1.jpg").default}
                  alt=""
                  width="60px"
                />
                <img
                  src={require("../images/portfolio-1.jpg").default}
                  alt=""
                  width="60px"
                />
              </section>
            </section>
            <section className="newsletter">
              <section className="heading">
                <h2>Newsletter</h2>
              </section>
              <section className="context">
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non vulpu
                </p>
              </section>
            </section>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
