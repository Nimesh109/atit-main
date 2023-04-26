import React, { useState, useEffect } from "react";

import { AiFillCheckCircle } from "react-icons/ai"


import axios from "axios";

import "./profile.css";

const Profile = () => {
  const [courseData, setCourseData] = useState([]);

  const [success, setSucess] = useState(false)


  const [userData, setUserData] = useState({})

  const fetchAllCourse = async () => {
    try {
      const response = await axios.get("/api/getEnrolledCourse");
      setCourseData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get("/api/getUserInformation");
      setUserData(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  const unEnrollCourse = async (courseId) => {
    try {
      const response = await axios.get(`/api/unEnrollCourse/${courseId}`);
      console.log(response.data)
      if (response.data === "sucess") {
        setSucess(true)
        fetchAllCourse();
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setSucess(false)
    }, 2000)
    return (() => { clearTimeout(timer) })
  }, [success])



  useEffect(() => {
    fetchAllCourse();
    fetchUserData()
  }, []);

  return (
    <main>
      <div className="display-course-page-container">
        <section className="contact-page-first-section">
          <h2 data-aos="zoom-in">Course</h2>
          <article className="underline"></article>
          <p>
            Home <strong> / </strong> Pages <strong> / </strong> Profile
          </p>
        </section>
        <section className="display-course-user-details-section">
          <p><b>Name: </b>{userData.name}</p>
          <p><b>Role: </b>{userData.role}</p>
          <p><b>Number: </b> {userData.number}</p>
          <p><b>Email: </b> {userData.email}</p>
        </section>
        <section className="display-course-section-section">
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
                    <a href={`/specificCourse/${_id}`}>
                      <button
                        className="enroll-course"
                        type="submit"
                      >
                        View Course
                      </button>
                    </a>
                    <button
                      className="enroll-course"
                      type="submit"
                      onClick={() => {
                        unEnrollCourse(_id);
                      }}
                      style={{
                        backgroundColor: "red"
                      }}
                    >
                      Unenroll Course
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
              <h2>Sucessfully!!!, You have UnEnroll the Course</h2>
            </article>
          )
        }
      </div>
    </main>
  );
};

export default Profile;
