import React, { useEffect, useState } from "react";

import { BsFillPersonFill } from "react-icons/bs";

import { IoIosContact } from "react-icons/io";

import { TiContacts } from "react-icons/ti";

import { AiFillLock, AiOutlineExclamation, AiFillCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import "./login.css";

const Register = () => {
  const nagivate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    role: "teacher",
  });


  const [responseMessage, setResponseMessage] = useState({ msg: "", sucess: false, unSucess: false })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const respose = await axios.post("/api/register", user);
    setUser({
      name: "",
      number: "",
      email: "",
      password: "",
      role: "teacher",
    });
    if (respose.data === "Unsucessfull") {
      setResponseMessage({ msg: "Cannot Register, Please fill properly", unSucess: true })
    } else if (respose.data === "Sucess") {

      setTimeout(() => {
        window.location.reload(nagivate("/login"))
      }, 2000)
      setResponseMessage({ msg: "Please Check your Email For Verifications", sucess: true })
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setResponseMessage({ msg: "", sucess: false, unSucess: false })

    }, 2000);

    return () => clearTimeout(timer);

  }, [responseMessage]);

  return (
    <>
      <main>
        <div className="login-container">
          <h1>Register</h1>
          <span>
            {" "}
            <AiOutlineExclamation className="exclamation-icon" />
          </span>
          <section className="register-form">
            <form className="register" onSubmit={handleSubmit}>
              <div className="register-name">
                <IoIosContact className="name-icon register-icon" />
                <input
                  type="name"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={user.name}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <br />
              </div>

              <div className="register-number">
                <TiContacts className="name-icon register-icon" />
                <input
                  type="number"
                  id="number"
                  name="number"
                  placeholder="Number"
                  value={user.number}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <br />
              </div>

              <div className="register-password">
                <BsFillPersonFill className="email-icon register-icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={user.email}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <br />
              </div>

              <div className="register-password">
                <AiFillLock className="password-icon register-icon" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <br />
              </div>

              <div className="register-role">
                <select
                  name="role"
                  className="role"
                  value={user.role}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                >
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                  <option value="organization">Organization</option>
                </select>
              </div>

              <div className="btn-pass">
                <button type="submit" className="btn">
                  Submit
                </button>
              </div>
            </form>
          </section>
          {
            responseMessage.sucess && (
              <>
                <article className="pop-up">
                  <AiFillCheckCircle size={100} color="#0d6efd" />
                  <h2>{responseMessage.msg}.</h2>
                </article>
              </>
            )
          }
          {
            responseMessage.unSucess && (
              <>
                <article className="pop-up" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem", flexDirection: "column" }}>
                  <AiOutlineCloseCircle size={100} color="red" />
                  <h2 style={{ color: "red" }}>{responseMessage.msg}</h2>
                </article>
              </>
            )
          }
        </div>
      </main>
    </>
  );
};

export default Register;
