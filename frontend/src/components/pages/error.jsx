import React from "react";

import { BiError } from "react-icons/bi";

import "./error.css";

const ErrorPage = () => {
  return (
    <main>
      <div className="error-page-container">
        <section className="error-page-first-section">
          <h2 data-aos="zoom-in">Not Found</h2>
          <article className="underline"></article>
          <p>
            Home <strong> / </strong> Pages <strong> / </strong> 404
          </p>
        </section>
        <section className="error-page-second-section">
          <article className="error-logo">
            <BiError size={"100px"} color="blue" />
          </article>
          <article className="error-page-second-section-heading">
            <h2>404</h2>
            <h3>Page Not Found</h3>
            <p>
              We’re sorry, the page you have looked for does not exist in our
              website! Maybe go to our home page or try to use a search?
            </p>
          </article>
          <article className="error-page-btn">
            <a href="/">
              <button className="error-btn" type="submit">
                Go Back To Home
              </button>
            </a>
          </article>
        </section>
      </div>
    </main>
  );
};

export default ErrorPage;
