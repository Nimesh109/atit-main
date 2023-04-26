import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import ReactPlayer from "react-player";

import axios from "axios";

import "./specificCourse.css";

const getRole = JSON.parse(localStorage.getItem("role"));

const SpecificCourse = () => {
  const { courseId } = useParams();

  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await axios.get(`/api/getSpecificCourse/${courseId}`);
      setCourseData(response.data);
    };
    fetchUserData();
  }, [courseId]);
  return (
    <main>
      <div className="contact-page-container">
        <section className="contact-page-first-section">
          <h2 data-aos="zoom-in">Course Content</h2>
          <article className="underline"></article>
          <p>
            Home <strong> / </strong> Pages <strong> / </strong> Course Content
          </p>
        </section>

        {getRole === "teacher" && (
          <section className="specific-course-upload-contents">
            <form
              method="POST"
              action={`/api/createPdfAndFile/${courseId}`}
              encType="multipart/form-data"
            >
              <label htmlFor="pdf">Click me to upload pdf file</label>
              <input
                type="file"
                id="pdf"
                name="coursePdf"
                accept="application/pdf"
                style={{ display: "none", border: "none" }}
              />
              <br />

              <input
                type="text"
                id="video"
                name="video"
                placeholder="Video Link"
              />
              <br />

              <button className="btn" type="submit">
                Submit
              </button>
            </form>
          </section>
        )}

        <section className="specific-course-display-contents">
          {courseData.map((item, index) => {
            const { videoLink, coursePdf } = item;
            return (
              <article className="course-contents-section" key={index}>
                <article className="course-video-contents">
                  <h2>Youtube Links</h2>
                  {videoLink.map((videoItem, index) => {
                    return <ReactPlayer url={`${videoItem}`} key={index} />;
                  })}
                </article>
                <article className="course-pdf-contents">
                  <h2>Pdf Contents</h2>
                  {coursePdf.map((pdfItem, index) => {
                    return <ReactPlayer url={`${pdfItem}`} key={index} />;
                  })}
                </article>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default SpecificCourse;
