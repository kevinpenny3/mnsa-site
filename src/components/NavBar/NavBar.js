import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export default (props) => {
    return (
        <div className="sidebar">
            <ul className="navbarList">
                <li className="navbar__item">
                    <Link className="navbar__link" to="/">Home</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/teams">Teams</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/players">Players</Link>
                </li>
            </ul>
        </div>
    )
}