import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const TeamContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const TeamProvider = (props) => {
    const [teams, setTeams] = useState([])

    const getTeams = () => {
        return fetch("http://localhost:8088/teams")
            .then(res => res.json())
            .then(setTeams)
    }

    const addTeam = team => {
        return fetch("http://localhost:8088/teams", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(team)
        })
            .then(getTeams)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getTeams()
    }, [])

    useEffect(() => {
        console.log("****  team APPLICATION STATE CHANGED  ****")
    }, [teams])

    return (
        <TeamContext.Provider value={{
            teams, addTeam
        }}>
            {props.children}
        </TeamContext.Provider>
    )
}