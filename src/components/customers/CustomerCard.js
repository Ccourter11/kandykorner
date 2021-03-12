import React from "react"
import "./Customer.css";

export const CustomerCard = (props) => (
    <div className="customer">
      <h2 className="customer__name">{props.customer.name}</h2>
      <h3 className="customer__id">{props.customer.id}</h3>
    </div>
  )