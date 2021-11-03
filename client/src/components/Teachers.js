import React, { useState, useEffect } from "react";
import Teacher from "./Teacher";

function Teachers() {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/teachers")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);


  return (
    <div className="card-container">
      {teachers.map(teacher => <Teacher teacher={teacher} />)}
    </div>
  );
}
export default Teachers