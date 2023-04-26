import React, { useEffect, useState } from "react";

import { AiFillCheckCircle, AiOutlineCloseCircle } from "react-icons/ai"

import { useNavigate } from "react-router-dom";

import axios from "axios"

import "./contact.css"

const Contact = () => {
 const nagivate = useNavigate();

 const [user, setUser] = useState({ name: "", email: "", subject: "", message: "" })

 const [responseMessage, setResponseMessage] = useState({ msg: "", sucess: false, unSucess: false, })

 const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setUser({ ...user, [name]: value })
 }

 const handleSubmit = async (e) => {
  e.preventDefault()
  const response = await axios.post("/api/createContact", user)
  if (response.data === "Sucess") {
   setResponseMessage({ msg: "Your Response Had been Forwarded", sucess: true })
   setTimeout(() => {
    window.location.reload(nagivate("/"))
   }, 2000)
  }
 }

 useEffect(() => {
  const Timer = setTimeout(() => {
   setResponseMessage({ msg: "", sucess: false, unSucess: false })
  }, 2000)

  return (() => { clearTimeout(Timer) })

 }, [responseMessage])

 return (
  <main>
   <div className="contact-page-container">
    <section className="contact-page-first-section">
     <h2 data-aos="zoom-in">Contact Us</h2>
     <article className="underline">
     </article>
     <p>Home <strong> / </strong> Pages <strong> / </strong> Contact</p>
    </section>
    <section className="contact-page-second-section">
     <article className="contact-page-heading animate__animated  animate__fadeInUp">
      <p>Contact Us</p>
      <h2>contact for any query</h2>
     </article>
     <article className="contact-page-form  animate__animated  animate__fadeInUp">
      <form onSubmit={handleSubmit}>
       <div className="same-line-input">

        <input type="text" id="name" name="name" placeholder="Your Name"
         value={user.name}
         onChange={(e) => { handleChange(e) }}
         required />

        <input type="email" id="email" name="email" placeholder="Your Email"
         value={user.email}
         onChange={(e) => { handleChange(e) }}
         required />

       </div>
       <div className="take-full-width-input">

        <input type="text" id="subject" name="subject" placeholder="Subject"
         value={user.subject}
         onChange={(e) => { handleChange(e) }}
         required />

        <textarea type="text" rows="5" cols="40" name="message" placeholder="Message"
         value={user.message}
         onChange={(e) => { handleChange(e) }}
         required>

        </textarea>
        <button className="btn" type="submit">Send Message</button>
       </div>
      </form>
     </article>
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
  </main >
 )
}

export default Contact;