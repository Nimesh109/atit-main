import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";


import ReactPlayer from "react-player";

import axios from "axios";

import "./specificCourse.css";

const getRole = JSON.parse(localStorage.getItem("role"));

const SpecificCourse = () => {
  const { courseId } = useParams();

  const [courseData, setCourseData] = useState([]);

  const [userID, setUserID] = useState(null)

  const [pdfPath, setPdfPath] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await axios.get(`/api/course/getSpecificCourse/${courseId}`);
      setCourseData(response.data.data);
      setUserID(response.data.userId)
    };
    fetchUserData();
  }, [courseId]);

  useEffect(() => {
    // Make a request to the backend API to get the PDF file path
    axios.get("http://localhost:8000/courses/1682526085651.pdf", { responseType: "blob" }).then((response) => {
      // Create a Blob object from the response data
      const blob = new Blob([response.data], { type: "application/pdf" });

      // Create a URL object from the Blob object
      const url = URL.createObjectURL(blob);

      setPdfPath(url);
    });
  }, []);

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

        <section className="specific-course-display-contents">
          {courseData.map((item, index) => {
            const { userId, videoLink, coursePdf } = item;
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
                    const getPath = pdfItem.split("/")
                    let path = getPath[2]
                    return <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem", padding: "20px" }} key={index}>
                      <a
                        href={`http://localhost:8000/courses/${path}`}
                        download
                        target="_blank"
                      >
                        {path}
                      </a>
                      <br />
                      <a
                        href={pdfPath}
                        download
                        target="_blank"
                      >
                        Download PDF
                      </a>
                    </div>
                  })}
                </article>

                {(getRole === "teacher" && userId === userID) && (
                  <section className="specific-course-upload-contents">
                    <form
                      method="POST"
                      action={`/api/course/createPdfAndFile/${courseId}`}
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

              </article>

            );
          })}
        </section>
      </div>
    </main>
  );
};

export default SpecificCourse;
