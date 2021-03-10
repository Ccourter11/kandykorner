import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { ProductTypesProvider } from "./products/ProductTypeProvider"
import { ProductList } from "./products/ProductList"
import { ProductProvider } from "./products/ProductsProvider";
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"



export const ApplicationViews = () => {
    return (
      <>
        <LocationProvider>
        <Route exact path="/locations">
            <LocationList />
        </Route>
      </LocationProvider>

      <ProductTypesProvider>
      <ProductProvider>
        <Route exact path="/products">
          <ProductList />
        </Route>
        </ProductProvider>
      </ProductTypesProvider>

      <EmployeeProvider>
            <Route exact path ="/employees">
                <EmployeeList />
            </Route>
            <Route path="employees/create">
                <></>
            </Route>
        </EmployeeProvider>
      </>
    )
  } 