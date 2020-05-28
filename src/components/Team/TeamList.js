import React, { useContext } from "react"
import { TeamContext } from "./TeamProvider"
import Team from "./Team"
import "./Teams.css"

export default () => {
    const { teams } = useContext(TeamContext)

    return (
        <div className="teams">
            {
                teams.map(tem => <Team key={tem.id} team={tem} />)
            }
        </div>
    )
}