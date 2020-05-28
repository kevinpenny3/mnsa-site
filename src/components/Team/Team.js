import React from "react"
import "./Teams.css"

export default ({ team }) => (
    <section className="team">
        <h3 className="team__name">Team: {team.name}</h3>
        <p className="team_coach">Coach: {team.coach}</p>
    </section>
)