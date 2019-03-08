import React from 'react';
import '../stylesheets/landing-screen.css'

export default function LandingScreen(props) {
  return (
    <section className='introduction'>
      <article className='intro-text'>
        <header>
          <h1>Randy J Sartor</h1>
        </header>
        <article className='description'>
          <p>Traveler, learner, developer</p>
        </article>
      </article>
    </section>
  )
}

