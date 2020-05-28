import React, { useState } from "react"
import { Route } from "react-router-dom"
import TeamList from "./Team/TeamList"
import PlayerList from "./Player/PlayerList"
import ProviderProvider from "./providerProvider/ProviderProvider"
import Dashboard from "./Dashboard/Dashboard"

export default (props) => {
    return (
        <>
            <ProviderProvider>
                <Route exact path="/" render={
                    props => <Dashboard {...props} />
                } />

                <Route exact path="/teams" render={
                    props => <TeamList {...props} />
                } />

                <Route exact path="/players" render={
                    props => <PlayerList {...props} />
                } />


            </ProviderProvider>

        </>
    )
}
