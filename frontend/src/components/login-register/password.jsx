import React, { useState } from "react";

import { useParams } from "react-router-dom"

import { AiFillLock, AiOutlineExclamation, } from "react-icons/ai"

import './login.css'

const url = "http://localhost:3000/api/changePassword"

const Password = () => {
 const [user, setUser] = useState({ email: "", password: "", re_password: "" })

 const { id } = useParams();

 const handleOnChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setUser({ ...user, [name]: value })
 }

 const handleSubmit = (e) => {
  e.preventDefault();
  //Passing the email received from url.
  user.email = id;
  if (user.password === user.re_password) {
   // Fetch code here...
   fetch(url, {
    method: "POST",
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
   }).then((response) => {
    return response.json()
   }).then((data) => {
    if (data.success) {
     window.location.href = "/"
    }
   }).catch((error) => {
    console.log(error)
   })
  } else {
   alert("Password did not match.");
  }
 }

 return (<>
  <main>
   <div className="login-container animate__animated animate__fadeInUp" >
    <h1>Login</h1>
    <span> <AiOutlineExclamation className="exclamation-icon" /></span>
    <section className="register-form">
     <form className="register" onSubmit={handleSubmit}>
      <AiFillLock className="password-icon input-icon" />
      <input
       type="password"
       id="password"
       name="password"
       placeholder="Password"
       value={user.password}
       onChange={handleOnChange}
      />
      <br />

      <AiFillLock className="email-icon input-icon" />
      <input
       type="password"
       id="re_password"
       name="re_password"
       placeholder="Retype Password"
       value={user.re_password}
       onChange={handleOnChange}
      />
      <br />
      <div className="btn-pass">
       <button type="submit" className="btn">Submit</button>
      </div>
     </form>
     {/* <!--End of form section--> */}
    </section>
   </div>
  </main>
 </>)
}

export default Password;