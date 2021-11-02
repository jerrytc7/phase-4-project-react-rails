import React, { useState, useEffect } from "react";

function Teachers() {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3000/teachers")
        .then((res) => res.json())
        .then((data) => setTeachers(data));
    }, []);
    
  
    return (
        <div>
        <h1> 
          {
            teachers.map(teacher => (
              <li key={teacher.id}> {teacher.name} </li>
            ))
          } 
        </h1>
      </div>
    );
}
export default Teachers