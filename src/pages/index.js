import React from "react"
import Jumbotron from "../components/jumbotron"
import Works from "../components/works"
import Skills from "../components/skills"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default () => (
    <div>
        <div id="jumbotron" className="fullWidth">
            <Jumbotron />
        </div>
        <div id="works" className="fullWidth">
            <div id="worksWrapper" className="center">
                <h1>Works</h1>
                <Works 
                showcaseImg="https://source.unsplash.com/random/600x300"
                showcaseHeadline="alppis.github.io"
                showcaseDesc="GatsbyJS based homepage project"/>
                <Works 
                showcaseImg="https://source.unsplash.com/random/600x300"
                showcaseHeadline="Chatbot API"
                showcaseDesc="RESTful Web Chatbot API built using NodeJS"/>
                <Works 
                showcaseImg="https://source.unsplash.com/random/600x300"
                showcaseHeadline="Bootstrap 4 demo"
                showcaseDesc="Company website demo made with Bootstrap 4"/>
            </div>
        </div>
        <div id="skills">
            <Skills />
        </div>
        <div id="contact" className="fullWidth">
            <Contact />
        </div>
        <div id="footer">
            <Footer />
        </div>
    </div>
)
