import React from "react"

export const ProductCard = ({ product, productType }) => (
    <div className="product">
      <h2 className="product__name">{product.name}</h2>
      <div className="product__price">Price: ${product.price.toFixed(2)}</div>
      <div className="product__type">Type: {productType.type}</div>
    </div>
  )