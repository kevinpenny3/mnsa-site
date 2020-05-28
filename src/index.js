import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom";
import Mnsa from "./components/Mnsa";

ReactDOM.render(
    <Router>
        <Mnsa />
    </Router>
    , document.getElementById("root"))

