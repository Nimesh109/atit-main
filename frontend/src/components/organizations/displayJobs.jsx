import React, { useEffect, useState } from "react";

import axios from "axios"

import { AiFillCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

import "./displayJobs.css"

const DisplayJobs = () => {

 const [allJobs, setAllJobs] = useState([])

 const [responseMessage, setResponseMessage] = useState({ msg: "", sucess: false, unSucess: false })


 const fetchAllJobs = async () => {
  const response = await axios.get("/api/job/allJobs");
  setAllJobs(response.data.getAllJobs)
 }

 const applyJobs = async (id) => {
  const response = await axios.get(`/api/job/applyJob/${id}`);
  if (response.data === "Unsuccessful") {
   setResponseMessage({ msg: "You Have Already Applied For Job", unSucess: true })
  } else if (response.data === "Successful") {
   setResponseMessage({ msg: "You Have Sucessfully, Applied For Job", sucess: true })
  }
 }

 useEffect(() => {
  fetchAllJobs();
 }, [])

 useEffect(() => {
  const timer = setTimeout(() => {
   setResponseMessage({ msg: "", sucess: false, unSucess: false })

  }, 2000);

  return () => clearTimeout(timer);

 }, [responseMessage]);


 return (
  <main>
   <div className="display-jobs-container">
    <section className="job-items">
     {
      allJobs.map((item) => {
       const { _id, name, jobDescription, participants } = item;
       return (
        <article className="job-item" key={_id}>

         <p>Name: {name}</p>
         <p>Job Description: {jobDescription}</p>
         <p>Total Participants: {participants}</p>
         <button className="job-btn" onClick={() => { applyJobs(_id) }}>Apply Job</button>
        </article>
       )
      }
      )
     }
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
export default DisplayJobs;