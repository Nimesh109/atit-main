import React from "react";

import "./createCourse.css";

const getRole = JSON.parse(localStorage.getItem("role"));

const CreateCourse = () => {
  return (
    <>
      {getRole === "teacher" && (
        <main>
          <div className="contact-page-container">
            <section className="contact-page-first-section">
              <h2 data-aos="zoom-in">Create Course</h2>
              <article className="underline"></article>
              <p>
                Home <strong> / </strong> Pages <strong> / </strong> Create
                Course
              </p>
            </section>
            <section className="contact-page-second-section">
              <article className="contact-page-heading animate__animated  animate__fadeInUp">
                <p>Upload Course</p>
                <h2>Create Course For Student</h2>
              </article>
              <article className="contact-page-form  animate__animated  animate__fadeInUp">
                <form
                  className="upload-course-form"
                  action="/api/course/createCourse"
                  method="POST"
                  encType="multipart/form-data"
                >
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Course Name"
                  />

                  <input
                    type="text"
                    id="video"
                    name="video"
                    placeholder="Video Link"
                  />

                  <div className="take-full-width-input">
                    <textarea
                      type="text"
                      id="courseDescription"
                      name="courseDescription"
                      placeholder="Course Description"
                      rows="5"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <label htmlFor="file">Upload Image</label>
                    <input
                      type="file"
                      id="file"
                      name="courseFile"
                      accept="image/x-png,image/gif,image/jpeg"
                      style={{
                        border: "none",
                        paddingLeft: "0px",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      // justifyContent: "center",
                      // alignItems: "center",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <label htmlFor="pdf">Upload PDF File</label>
                    <input
                      type="file"
                      id="pdf"
                      name="coursePdf"
                      accept="application/pdf"
                      style={{
                        border: "none",
                        paddingLeft: "0px",
                        cursor: "pointer",
                      }}
                    />
                  </div>

                  <div className="take-full-width-input">
                    <button className="btn" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </article>
            </section>
          </div>
        </main>
      )}
    </>
  );
};

export default CreateCourse;
