import React from 'react'
// import './Contact.css'; 
import axios from "axios";

import TeaImage from '../Images/Tea.jpg';
import { useEffect, useState } from "react";



const Contact = () => {
  const [id, setId] = useState("");
  const [stname, setName] = useState("");
  const [course, setCourse] = useState("");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    Load();
  }, []);

  async function Load() {
    try {
      const result = await axios.get("https://localhost:7018/api/Student/GetStudent");
      setStudents(result.data);
    } catch (error) {
      console.error("Error loading students:", error);
    }
  }

  async function submit(event) {
    event.preventDefault();
    try {
      await axios.post("https://localhost:7018/api/Student/AddStudent", {
        stname: stname,
        course: course,
      });
      alert("Student Registration Successful");
      Load();
    } catch (err) {
      alert(err);
    }
  }
  return (
    <div className='container'>
  <div><h1>Visit us or call us today</h1></div>
  <div className="content-wrapper">
    <div className="form-container">
  <div className='openhours'><p>Opening</p><h3>Hours</h3></div>
  <div><p>Tues-Thurs:9am to 5pm</p></div>
  <div className='tustext'><p>Tues:9am to 5pm /Thurs:9am to 5pm</p></div>
  <div className='suntext'><p>Sun-Mon:Closed</p></div>
<form>
      <div><input className='nametext' type="text" placeholder="Name" value={stname}
            onChange={(event) => setName(event.target.value)}/></div>
       <div> <input className='mailtext' type="text" placeholder="Email" /></div>
        <div><input className='messagetext' type="text" placeholder="Message" /></div>
        <div><button className='sbtbtn' onClick={submit}>Submit</button></div>
      </form>
    </div>
    <div className="image-container">
    <img src={TeaImage} alt="Tea" />
    </div>
  </div>
</div>

  )
}

export default Contact
