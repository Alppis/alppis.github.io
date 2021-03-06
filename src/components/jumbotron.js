import React from 'react'
import heroImg from '../img/hero.jpg'

export default () => (
    <div className='jumboCenter'>
        <img src={heroImg} id='hero'/>
        <div id='intro'>
            <h1>Miikka Alaperä</h1>
            <p>Information Processing Science student at the
                University of Oulu. Master's thesis currently in the
                making. Interested in UI/UX design, usability and web
                development. Skilled in UI design, user-centered design,
                usability testing and HTML5/CSS/Javascript programming.
                Always interested in new challenges. Currently getting
                started with React. Strong team player who is also
                comfortable working alone. Possess strong customer
                service skills. In spare time, enjoys gaming, music, disc golf and downhill skiing.
            </p>
        </div>
    </div>
)
