import React, { useState, useEffect } from "react";

function Students() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3000/students")
        .then((res) => res.json())
        .then((data) => setStudents(data));
    }, []);
    
  
    return (
        <div>
        <h1> 
          {
            students.map(student => (
              <li key={student.id}> {student.name} </li>
            ))
          } 
        </h1>
      </div>
    );
}
export default Students