import React from "react"
import { Route } from "react-router-dom"
import ApplicationViews from "./ApplicationViews"
import NavBar from "./NavBar/NavBar"
import "./Mnsa.css"

export default () => (
    <>
        <Route render={() => {
            return (
                <>
                    <Route render={props => <NavBar {...props} />} />
                    <Route render={props => <ApplicationViews {...props} />} />
                </>
            )
        }} />
    </>
)