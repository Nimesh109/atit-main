import React from "react";

import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineCheck,
} from "react-icons/ai";

import "./about.css";

const About = () => {
  return (
    <main>
      <div className="about-page-container">
        <section className="contact-page-first-section">
          <h2 data-aos="zoom-in">About Us</h2>
          <article className="underline"></article>
          <p>
            Home <strong> / </strong> Pages <strong> / </strong> About
          </p>
        </section>
        <section className="homepg-second-section">
          <article className="homepg-second-section-left" data-aos="fade-up">
            <article className="homepg-about-us">
              <article className="homepg-about-us-heading">
                <p>About Us</p>
                <h2>The best solution for your academic carrer</h2>
              </article>
              <article className="homepg-about-us-content">
                <article className="text">
                  <p>
                    LekhPadh offer advantages like including the ability to
                    learn from anywhere with an internet connection, flexible
                    scheduling to fit students' busy lives, and access to a
                    diverse range of tutors from around the world with various
                    expertise and teaching styles. These apps often provide
                    interactive learning tools, such as video, academic
                    documents to enhance the learning experience and facilitate
                    better communication between tutors and students.
                  </p>
                </article>
                <article className="features">
                  <article className="features-left">
                    <p>
                      {" "}
                      <AiOutlineCheck
                        strokeWidth="100"
                        style={{
                          color: "rgb(33, 36, 177)",
                          marginRight: "0.5rem",
                        }}
                      />
                      24/7 Support
                    </p>
                    <p>
                      <AiOutlineCheck
                        strokeWidth="100"
                        style={{
                          color: "rgb(33, 36, 177)",
                          marginRight: "0.5rem",
                        }}
                      />
                      Free Courses
                    </p>
                  </article>
                  <article className="features-right">
                    <p>
                      <AiOutlineCheck
                        strokeWidth="100"
                        style={{
                          color: "rgb(33, 36, 177)",
                          marginRight: "0.5rem",
                        }}
                      />
                      Professional Staff
                    </p>
                  </article>
                </article>
                <article className="social-links">
                  <button className="read-more-btn">Read More</button>
                  <a href="www.facebook.com" target="_blank">
                    <AiFillFacebook />
                  </a>
                  <a href="www.twitter.com">
                    <AiFillTwitterCircle />
                  </a>
                  <a href="www.instagram.com">
                    <AiFillInstagram />
                  </a>
                  <a href="www.linked.com">
                    <AiFillLinkedin />
                  </a>
                </article>
              </article>
            </article>
          </article>
          <article className="homepg-second-section-right" data-aos="zoom-in">
            <img src={require("../images/about.jpg").default} alt="" />
          </article>
        </section>
        <section className="homepg-fourth-section">
          <article className="homepg-our-teams-heading" data-aos="fade-up">
            <p>Our Teams</p>
            <h2>Meet Our Team Members</h2>
          </article>
          <article className="homepg-our-teams-contents" data-aos="fade-up">
            <article className="homepg-our-teams-box">
              <article className="social-links">
                <AiFillFacebook size={"30px"} />
                <AiFillTwitterCircle size={"30px"} />
                <AiFillInstagram size={"30px"} />
                <AiFillLinkedin size={"30px"} />
              </article>
              <article className="text">
                <h2 style={{ fontWeight: "400" }}>Jhon Doe</h2>
                <p style={{ color: "#888", fontSize: "14px" }}>CEO</p>
              </article>
              <article className="image">
                <img src={require("../images/team-1.jpg").default} alt="" />
              </article>
            </article>
            <article className="homepg-our-teams-box" data-aos="fade-up">
              <article className="social-links">
                <AiFillFacebook size={"30px"} />
                <AiFillTwitterCircle size={"30px"} />
                <AiFillInstagram size={"30px"} />
                <AiFillLinkedin size={"30px"} />
              </article>
              <article className="text">
                <h2 style={{ fontWeight: "400" }}>Jhon Doe</h2>
                <p style={{ color: "#888", fontSize: "14px" }}>CEO</p>
              </article>
              <article className="image">
                <img src={require("../images/team-1.jpg").default} alt="" />
              </article>
            </article>{" "}
            <article className="homepg-our-teams-box" data-aos="fade-up">
              <article className="social-links">
                <AiFillFacebook size={"30px"} />
                <AiFillTwitterCircle size={"30px"} />
                <AiFillInstagram size={"30px"} />
                <AiFillLinkedin size={"30px"} />
              </article>
              <article className="image">
                <img src={require("../images/team-1.jpg").default} alt="" />
              </article>
              <article className="text">
                <h2 style={{ fontWeight: "400" }}> Jhon Doe</h2>
                <p style={{ color: "#888", fontSize: "14px" }}>CEO</p>
              </article>
            </article>
          </article>
        </section>
      </div>
    </main>
  );
};

export default About;
