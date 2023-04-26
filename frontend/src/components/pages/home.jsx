import React from "react";

import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineCheck,
  AiFillHome,
} from "react-icons/ai";

import "./home.css";

const Home = () => {
  return (
    <main>
      <div className="home-page-container">
        <section className="homepg-first-section">
          <article className="online-course-hm-left">
            <article className="online-course-heading-home-pg">
              <h2 className="animate__animated animate__zoomIn"> LekhPadh</h2>
            </article>
            <article className="heading-home-pg-content">
              <article className="online-course-paragraph">
                <p className="animate__animated animate__zoomIn">
                  “LekhPadh” an online learning and free-lancing platform where
                  student, teacher and organization can use the application as
                  their preferences. Students are able to enroll to interested
                  subject and teacher can structure their courses as per their
                  will. Organization are able to announce for vacancy for
                  rightful person and provide projects as well. Both the teacher
                  and students are able to bid for the projects. Here User can
                  work in their specialized field as per their will.
                </p>
              </article>
              <article className="online-course-links">
                <div className="animate__animated  animate__fadeInLeft">
                  <a href="/login">Join Course</a>
                </div>
                <div className="animate__animated  animate__fadeInRight">
                  <a href="/contact" className="homepg-contactUs-link">
                    Contact Us
                  </a>
                </div>
              </article>
            </article>
          </article>
          <article className="online-course-hm-right">
            <img src={require("../images/nav-image/hero.png").default} alt="" />
          </article>
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

        <section className="homepg-third-section">
          <article
            className="homepg-system-features-heading"
            data-aos="fade-up"
          >
            <p>Our Servies</p>
            <h2>What We Provide</h2>
          </article>
          <article className="system-features-homepg">
            <article className="system-features" data-aos="zoom-in">
              <img
                src={require("../images/icon-shape-primary.png").default}
                alt=""
              />
              <AiFillHome className="home-icon" />
              <h2 style={{ color: "black" }}> Free Education Info</h2>
              <p>
                LekhPadh provides access to high-quality educational resources,
                regardless of a person's geographic location or financial
                situation. This accessibility helps to level the playing field
                and promote lifelong learning, allowing individuals to improve
                their skills and knowledge for personal and professional
                development.
              </p>
              <button className="readmore-btn">Read More</button>
            </article>
            <article className="system-features" data-aos="zoom-in">
              <img
                src={require("../images/icon-shape-primary.png").default}
                alt=""
              />
              <AiFillHome className="home-icon" />
              <h2 style={{ color: "black" }}>Vacancy Announcement</h2>
              <p>
                LekhPadh provides qualified candidates to choose from,
                increasing the likelihood of finding the best fit for the job.
                They also provide job seekers with an opportunity to learn about
                job openings and apply for positions that match their skills and
                qualifications.
              </p>
              <button className="readmore-btn">Read More</button>
            </article>
            <article className="system-features" data-aos="zoom-in">
              <img
                src={require("../images/icon-shape-primary.png").default}
                alt=""
              />
              <AiFillHome className="home-icon" />
              <h2 style={{ color: "black" }}>Announcement Details</h2>
              <p>
                As an organization yoy are allowed to announce any kind of event
                that your firm is about to organize so the intrested candidate
                can actively participate in firm activity.
              </p>
              <button className="readmore-btn">Read More</button>
            </article>
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

export default Home;
