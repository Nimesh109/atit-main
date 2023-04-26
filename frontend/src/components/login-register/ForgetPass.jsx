import React, { useEffect, useState } from "react";

import axios from 'axios'

import { BsFillPersonFill } from "react-icons/bs"

import { AiOutlineExclamation, AiFillCheckCircle, AiOutlineCloseCircle } from "react-icons/ai"

import './login.css'

const ForgetPass = () => {

 const [email, setEmail] = useState("");

 const [success, setSucess] = useState(false)

 const [unSuccessfull, setUnSucessfull] = useState(false)


 const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(email)
  const response = await axios.post("/api/sendResetPasswordLink", { email: email })
  console.log(response.data)
  if (response.data === "Unsucessfull") {
   setUnSucessfull(true)
  }
  else if (response.data === "Sucess") {
   setSucess(true)
  }
 }

 useEffect(() => {
  const timer = setTimeout(() => {
   setSucess(false)
   setUnSucessfull(false)
  }, 2000)
  return (() => { clearTimeout(timer) })
 }, [success, unSuccessfull])

 return (<>
  <main>
   <div className="login-container animate__animated animate__fadeInUp" >
    <h1>Forget Password</h1>
    <span> <AiOutlineExclamation className="exclamation-icon" /></span>
    <section className="register-form">
     <form className="register" onSubmit={handleSubmit}>
      <BsFillPersonFill className="email-icon input-icon" />
      <input type="email" id="email" name="email" placeholder="Email"
       value={email}
       onChange={(e) => { setEmail(e.target.value) }}
      />
      <br />
      <div className="btn-pass">
       <button type="submit" className="btn">Submit</button>
      </div>
     </form>
     {/* <!--End of form section--> */}
    </section>
    {
     success && (
      <article style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem", flexDirection: "column" }}>
       <AiFillCheckCircle size={100} color="#0d6efd" />
       <h2 style={{ color: "#0d6efd" }}>Sucessfully!!!, Please Check Your Email For Verifications</h2>
      </article>
     )
    }
    {
     unSuccessfull && (
      <article style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem", flexDirection: "column" }}>
       <AiOutlineCloseCircle size={100} color="red" />
       <h2 style={{ color: "red" }}>Unsucessfull!!!, Please Check Your Email</h2>
      </article>
     )
    }
   </div>
  </main >
 </>)
}

export default ForgetPass;