import React, { useContext, useEffect } from "react"
import { ProductTypeContext } from "./ProductTypeProvider"
import { ProductCard } from "./ProductCard"


export const ProductList = () => {
  const {products, getProducts} = useContext(ProductTypeContext)

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="products">
      {
      products.map(product => {
        return <ProductCard key={product.id} product={product} />
      })
      }
    </div>
  )
}