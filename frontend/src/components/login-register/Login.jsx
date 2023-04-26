import React, { useEffect, useState } from "react";

import { AiFillCheckCircle, AiOutlineCloseCircle } from "react-icons/ai"

import { useNavigate } from "react-router-dom";

import axios from "axios";

import { BsFillPersonFill } from "react-icons/bs";

import { AiFillLock, AiOutlineExclamation } from "react-icons/ai";

import "./login.css";

const Login = () => {
  const nagivate = useNavigate();

  // const [userData, setUserData] = useState({});

  const [user, setUser] = useState({ email: "", password: "" });

  const [responseMessage, setResponseMessage] = useState({ msg: "", sucess: false, unSucess: false, role: "" })

  const [passNotMatch, setPassNotMatch] = useState(false);

  const checkIfLogin = (role) => {
    console.log(role);
    if (role) {
      localStorage.setItem("role", JSON.stringify(role));
    } else {
      setPassNotMatch(true);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/login", user);
    if (response.data.role) {
      checkIfLogin(response.data.role)
    }
    if (response.data.data === "Unsucessfull") {
      setResponseMessage({ msg: "Invalid Credentials", unSucess: true })
    } else if (response.data.data === "sucess") {
      setResponseMessage({ msg: "Sucessfully!!!, Logged In", sucess: true, role: response.data.role })
      setTimeout(() => {
        window.location.reload(nagivate("/"));
      }, 2000)
    }
  };

  useEffect(() => {
    const Timer = setTimeout(() => {
      setResponseMessage({ msg: "", sucess: false, unSucess: false })
    }, 2000)

    return (() => { clearTimeout(Timer) })
  }, [responseMessage])

  return (
    <>
      <main>
        <div className="login-container animate__animated animate__fadeInUp">
          <h1>Login</h1>
          <span>
            {" "}
            <AiOutlineExclamation className="exclamation-icon" />
          </span>
          <section className="register-form">
            <form className="register" onSubmit={handleSubmit}>
              <BsFillPersonFill className="email-icon input-icon" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <br />

              <AiFillLock className="password-icon input-icon" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={(e) => {
                  handleChange(e);
                }}
                onClick={() => {
                  setPassNotMatch(false);
                }}
              />
              <br />

              <div className="btn-pass">
                <button type="submit" className="btn">
                  Submit
                </button>

                {passNotMatch && (
                  <p style={{ color: "red" }}>
                    Please check password and email
                  </p>
                )}
              </div>
            </form>
            {/* <!--End of form section--> */}
          </section>
          <a href="forgetPassword">Forget Password?</a>
          {
            responseMessage.sucess && (
              <>
                <article className="pop-up">
                  <AiFillCheckCircle size={100} color="#0d6efd" />
                  <h2>{responseMessage.msg} as a " {responseMessage.role} ".</h2>
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

export default Login;
