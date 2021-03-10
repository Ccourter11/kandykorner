import React from "react"

export const ProductCard = (props) => (
    <div className="product">
      <h2 className="product__name">{props.products.name}</h2>
      <div className="product__price">Price: ${props.products.price.toFixed(2)}</div>
      <div className="product__type">Type: {props.productType.type}</div>
    </div>
  )