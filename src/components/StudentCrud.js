import axios from "axios";
import './StudentCrud.css'; // Import CSS file for styling
import {Link,Element} from "react-scroll"


import { useEffect, useState } from "react";

function StudentCrud() {
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

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("https://localhost:7018/api/Student/AddStudent", {
        stname: stname,
        course: course,
      });
      alert("Student Registration Successful");
      clearForm();
      Load();
    } catch (err) {
      alert(err);
    }
  }

  async function editStudent(student) {
    setId(student.id);
    setName(student.stname);
    setCourse(student.course);
  }

  async function deleteStudent(id) {
    try {
      await axios.delete(`https://localhost:7018/api/Student/DeleteStudent/${id}`);
      alert("Student deleted successfully");
      Load();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  }

  function clearForm() {
    setId("");
    setName("");
    setCourse("");
  }

  return (
    <Element name="contact">
    <div className="container">
    <h1>Student Details</h1>
    <div className="form-container">
      <form>
        <div>
          <label>Student Name</label>
          <input
            type="text"
            value={stname}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label>Course</label>
          <input
            type="text"
            value={course}
            onChange={(event) => setCourse(event.target.value)}
          />
        </div>
        <div>
          <button onClick={save}>Register</button>
        </div>
      </form>
    </div>
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Course</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.stname}</td>
              <td>{student.course}</td>
              <td>
                <button onClick={() => editStudent(student)}>Edit</button>
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  </Element>
);
}


export default StudentCrud;
