import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const PlayerContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const PlayerProvider = (props) => {
    const [players, setPlayers] = useState([])

    const getPlayers = () => {
        return fetch("http://localhost:8088/players?_expand=team")
            .then(res => res.json())
            .then(setPlayers)
    }

    const addPlayer = player => {
        return fetch("http://localhost:8088/players", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(player)
        })
            .then(getPlayers)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getPlayers()
    }, [])

    useEffect(() => {
        console.log("****  player APPLICATION STATE CHANGED  ****")
    }, [players])

    return (
        <PlayerContext.Provider value={{
            players, addPlayer
        }}>
            {props.children}
        </PlayerContext.Provider>
    )
}