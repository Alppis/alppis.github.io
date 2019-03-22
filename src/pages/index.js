import React from 'react'
import Jumbotron from '../components/jumbotron'
import Works from '../components/works'
import Skills from '../components/skills'
import Contact from '../components/contact'
import Footer from '../components/footer'

export default () => (
    <div>
        <nav>
            <a href='#jumbotron' className='mrAuto'>/MIIKKA ALAPERÄ</a>
            <a href='#works'>/WORKS</a>
            <a href='#skills'>/SKILLS</a>
            <a href='#contact'>/CONTACT</a>
        </nav>
        <div id='jumbotron' className='parallax'>
            <Jumbotron />
        </div>
        <div id='works'>
            <h1>Works</h1>
            <div id='worksWrapper'>
                <Works
                    showcaseImg='https://source.unsplash.com/random/600x300'
                    showcaseHeadline='alppis.github.io'
                    showcaseDesc='GatsbyJS based homepage project'/>
                <Works
                    showcaseImg='https://source.unsplash.com/random/600x300'
                    showcaseHeadline='Chatbot API'
                    showcaseDesc='RESTful Web Chatbot API built using NodeJS'/>
                <Works
                    showcaseImg='https://source.unsplash.com/random/600x300'
                    showcaseHeadline='Bootstrap 4 demo'
                    showcaseDesc='Company website demo made with Bootstrap 4'/>
            </div>
        </div>
        <div id='skills'>
            <h1>Skills</h1>
            <div id='skillsWrapper'>
                <div className='skill'>
                    <Skills
                        skillIcon='fab fa-html5'
                        skillName='HTML5'
                    />
                </div>
                <div className='skill'>
                    <Skills
                        skillIcon='fab fa-css3'
                        skillName='CSS3'
                    />
                </div>
                <div className='skill'>
                    <Skills
                        skillIcon='fab fa-js'
                        skillName='Javascript'
                    />
                </div>
                <div className='skill'>
                    <Skills
                        skillIcon='fab fa-react'
                        skillName='React'
                    />
                </div>
                <div className='skill'>
                    <Skills
                        skillIcon='fab fa-node'
                        skillName='NodeJS'
                    />
                </div>
                <div className='skill'>
                    <Skills
                        skillIcon='fas fa-database'
                        skillName='SQL'
                    />
                </div>
            </div>
        </div>
        <div id='contact'>
            <Contact />
        </div>
        <div id='footer'>
            <Footer />
        </div>
    </div>
)
