import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"

export const ApplicationViews = () => {
    return (
      <>
        <Route exact path="/locations">
          <LocationProvider>
            <LocationList />
          </LocationProvider>
        </Route>
      </>
    )
  } 