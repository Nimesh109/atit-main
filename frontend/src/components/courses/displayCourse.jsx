import React, { useEffect, useState } from "react";

import { AiFillCheckCircle, AiOutlineCloseCircle } from "react-icons/ai"


import axios from "axios";

import "./displayCourse.css";

const role = JSON.parse(localStorage.getItem("role"))

const DisplayCourse = () => {
  const [courseData, setCourseData] = useState([]);

  const [success, setSucess] = useState(false)

  const [unSuccessfull, setUnSucessfull] = useState(false)

  const fetchAllCourse = async () => {
    try {
      const response = await axios.get("/api/createCourse");
      setCourseData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const enrollCourse = async (courseId) => {
    try {
      const response = await axios.get(`/api/enrollStudent/${courseId}`);
      if (response.data === "Sucess") {
        setSucess(true)

      } else if (response.data === "UnSucessfull") {
        setUnSucessfull(true)

      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllCourse();
  }, []);

  useEffect(() => {

    const timer = setTimeout(() => {
      setSucess(false)
      setUnSucessfull(false)
    }, 2000)

    return (() => { clearTimeout(timer) })

  }, [success, unSuccessfull])


  return (
    <main>
      <div className="display-course-page-container">
        <section className="contact-page-first-section">
          <h2 data-aos="zoom-in">Course</h2>
          <article className="underline"></article>
          <p>
            Home <strong> / </strong> Pages <strong> / </strong> Course
          </p>
        </section>
        <section className="display-course-section-section">
          {/* {
            (role === "teacher") && (
              <>
                <article className="course-items">
                  {
                    courseData.map((item, index) => {
                      const { _id, courseName, courseDescription, courseImage, } = item;
                      return (
                        <article className="course-item" key={_id}>
                          <article className="course-heading">
                            <img src={`http://localhost:8000/${courseImage}`} alt="" />
                            <h2>{courseName}</h2>
                          </article>
                          <article className="course-description">
                            <p>{courseDescription}</p>
                          </article>
                          <article className="course-lisnk">
                            <a href={`/specificCourse/${_id}`}>View Course</a>
                          </article>
                        </article>
                      )
                    })
                  }
                </article>
              </>
            )
          } */}

          <article className="course-items">
            {courseData.map((item, index) => {
              const { _id, courseName, courseDescription, courseImage } = item;
              return (
                <article className="course-item" key={_id}>
                  <article className="course-heading">
                    <img src={`http://localhost:8000/${courseImage}`} alt="" />
                    <h2>{courseName}</h2>
                  </article>
                  <article className="course-description">
                    <p>{courseDescription}</p>
                  </article>
                  <article className="course-link">
                    <button
                      className="enroll-course"
                      type="submit"
                      onClick={() => {
                        enrollCourse(_id);
                      }}
                    >
                      Enroll Course
                    </button>
                  </article>
                </article>
              );
            })}
          </article>

        </section>
        {
          success && (
            <article className="pop-up">
              <AiFillCheckCircle size={100} color="#0d6efd" />
              <h2>Sucessfully!!!, You have Enroll the Course</h2>
            </article>
          )
        }
        {
          unSuccessfull && (
            <article className="pop-up" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem", flexDirection: "column" }}>
              <AiOutlineCloseCircle size={100} color="red" />
              <h2 style={{ color: "red" }}>Unsucessfull!!!, You have Already Enrolled Course</h2>
            </article>
          )
        }
      </div>
    </main >
  );
};

export default DisplayCourse;
