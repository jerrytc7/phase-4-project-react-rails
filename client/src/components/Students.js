import React, { useState, useEffect } from "react";
import Student from "./Student";

function Students() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3000/students")
        .then((res) => res.json())
        .then((data) => setStudents(data));
    }, []);
    
  
    return (
        <div className="card-container">
          {
            students.map(student => (
            <Student student={student}/>
            ))
          }  
      </div>
    );
}
export default Students