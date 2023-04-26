import React from "react";

import { AiFillHome } from "react-icons/ai";

import "./service.css";

const Service = () => {
  return (
    <main>
      <div className="service-page-container">
        <section className="contact-page-first-section">
          <h2 data-aos="zoom-in">Service </h2>
          <article className="underline"></article>
          <p>
            Home <strong> / </strong> Pages <strong> / </strong> Service
          </p>
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
      </div>
    </main>
  );
};

export default Service;
