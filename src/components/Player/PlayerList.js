import React, { useContext } from "react"
import { PlayerContext } from "./PlayerProvider"
import Player from "./Player"
import "./Players.css"

export default () => {
    const { players } = useContext(PlayerContext)

    return (
        <div className="players">
            {
                players.map(ply => <Player key={ply.id} player={ply} />)
            }
        </div>
    )
}