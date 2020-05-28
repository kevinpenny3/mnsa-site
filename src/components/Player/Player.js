import React from "react"
import "./Players.css"


export default ({ player }) => (
    <section className="player">
        <h3 className="player__name">{player.firstname} {player.lastname}</h3>
        <p className="player__address">Team: {player.team.name}</p>
    </section>
)