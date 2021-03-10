import React, { useContext, useEffect } from "react"
// import { ProductTypeContext } from "./ProductTypeProvider"
import { ProductCard } from "./ProductCard"
import { ProductContext } from "./ProductsProvider"

export const ProductList = () => {
  const {products, getProducts} = useContext(ProductContext)

// import { LocationCard } from "./LocationCard"
  // The useContext hook allows you to use data structures and functions that a parent provider component exposes.
    // To start, you need to import the context object you created in the provider 
    // component so that the Context hook can access the objects it exposes.
  // This state changes when `getproducts()` is invoked below

  useEffect(() => {
    getProducts()
  }, [])
  //   The useEffect hook allows the component to reach out into the world for anything 
//   that cannot be handled during render. In this case, it is the API call for the products.




//  Use the .map() array method to iterate the array of products and  generate HTML for each one by invoking the ProductCard component function
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

// *Note that even though it looks like you are specifying an HTML component, you are actually invoking a function. Also, the key and location arguments look like HTML attributes here, but they actually become properties on an object that gets passed as an argument.