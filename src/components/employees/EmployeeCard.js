import React from "react"
import "./Employee.css";

export const EmployeeCard = ({ employee }) => (
    <section className="employee">
        <h2>{employee.name}</h2>
        <h4>Postion: {employee.position}</h4>
        <p><b>City:</b> {employee.city}</p>
    </section>
)