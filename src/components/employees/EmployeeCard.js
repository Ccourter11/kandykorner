import React from "react"

export const EmployeeCard = (props) => {
  return (
    <div className="employee">
      <div className="employee__name">Name: {props.employee.name}</div>
      <div className="employee__location">Location: {props.location.address}</div>
      <div className="employee__manager"> Manager: {props.employee.manager ? "Manager" : "Staff"}</div>
      <div className="employee__fullTime">Full or Part: {props.employee.fullTime ? "Full-time" : "Part-time"}</div>
      <div className="employee__rate">Hourly: {parseInt(props.employee.hourlyRate).toFixed(2)}</div>
    </div>
  )
}
