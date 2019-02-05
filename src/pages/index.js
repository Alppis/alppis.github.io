import React from "react"
import Jumbotron from "../components/jumbotron"
import Works from "../components/works"
import Contact from "../components/contact"

export default () => (
    <div>
        <Jumbotron />
        <h1>Works</h1>
        <div>
            <Works />
        </div>
        <Contact />
    </div>
)
