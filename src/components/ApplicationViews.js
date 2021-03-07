import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { ProductTypeProvider } from "./products/ProductTypeProvider"
import { ProductList } from "./products/ProductList"



export const ApplicationViews = () => {
    return (
      <>
        <LocationProvider>
        <Route exact path="/locations">
            <LocationList />
        </Route>
      </LocationProvider>

      <ProductTypeProvider>
        <Route exact path="./products">
          <ProductList />
        </Route>
      </ProductTypeProvider>
      </>
    )
  } 