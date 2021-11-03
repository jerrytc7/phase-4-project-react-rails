import React from 'react'

function Teacher({teacher:{name, grade, age}}) {
    return (
        <div className="card">
            <h1>{name}</h1>
            <div>Grade: {grade}</div>
            <div>Age: {age}</div>
        </div>
    )
}

export default Teacher
