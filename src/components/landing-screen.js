import React from 'react';
import '../stylesheets/landing-screen.css'

export default function LandingScreen(props) {
  return (
    <section className='introduction'>
      <div className='intro-text'>
        <header>
          <h1>Randy J Sartor</h1>
        </header>
        <div className='description'>
          <p>Traveler, learner, developer</p>
        </div>
      </div>
    </section>
  )
}

