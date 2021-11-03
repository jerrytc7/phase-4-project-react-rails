import React from 'react'

function Student({student}) {
    return (
        <div className="card">
            <h1>{student.name}</h1>
            <div>
                grade:{student.grade}
            </div>
        </div>
    )
}

export default Student
