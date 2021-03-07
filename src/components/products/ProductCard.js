import React from "react"

export const ProductCard = (props) => (
    <div className="product">
      <h2 className="product__name">{props.product.name}</h2>
      <div className="product__price">Price: ${props.product.price.toFixed(2)}</div>
      <div className="product__type">Type: {props.type.type}</div>
    </div>
  )