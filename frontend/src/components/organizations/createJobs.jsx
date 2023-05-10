import React from "react";

import "./createJobs.css"

const CreateJobs = () => {
 return (
  <>
   <main>
    <div className="contact-page-container">
     <section className="contact-page-first-section">
      <h2 data-aos="zoom-in">Create Jobs</h2>
      <article className="underline"></article>
      <p>
       Home <strong> / </strong> Pages <strong> / </strong> Create
       Jobs
      </p>
     </section>
     <section className="contact-page-second-section">
      <article className="contact-page-heading animate__animated  animate__fadeInUp">
       <p>Upload Jobs through organization Login</p>
       <h2>Create Jobs For Teacher and Student</h2>
      </article>
      <article className="contact-page-form  animate__animated  animate__fadeInUp">
       <form
        className="upload-course-form"
        action="/api/job/createJobs"
        method="POST"
        encType="multipart/form-data"
       >
        <input
         type="text"
         id="name"
         name="name"
         placeholder="Job Vacancy Name"
        />

        <input
         type="number"
         id="participants"
         name="participants"
         placeholder="Total participants"
        />

        <div className="take-full-width-input">
         <textarea
          type="text"
          id="jobDescrition"
          name="jobDescription"
          placeholder="Job Description"
          rows="5"
         />
        </div>

        <div
         style={{
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          flexDirection: "column",
          gap: "1rejobUploadm",
         }}
        >
         <label htmlFor="jobPdf">Upload PDF File</label>
         <input
          type="file"
          id="jobPdf"
          name="jobPdf"
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
  </>
 )
}
export default CreateJobs