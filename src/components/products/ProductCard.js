import React from "react"

export const ProductCard = ({ product, productType }) => (
    <div className="product">
      <h2 className="product__name">{product.name}</h2>
      <div className="product__price">Price: ${product.price}</div>
      <div className="product__type">Type: {product.productType}</div>
    </div>
  )