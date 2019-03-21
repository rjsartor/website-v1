import React from 'react';
import '../stylesheets/contact.css'
// import Form  from './form';

export default function Contact() {
  return (
    <section className='contact'>
      <h1>Contact Me</h1>
      <p>Thanks for visiting my page! I'd love to hear from you.
      </p>

      <p>If you'd like to chat, drop me a line at <a id='email' href="mailto:randal.sartor@gmail.com">randal.sartor@gmail.com</a></p>
      <article className='contact-logos'>
        <a className='contact-icon' href="https://github.com/thinkful-ei26/randys-mealcraft-client" target="_blank" rel="noopener noreferrer"><i className="devicon-github-plain"></i></a>
        <a className='contact-icon' href="https://www.linkedin.com/in/randal-sartor-6a377844/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
      </article>

      {/* <Form /> */}
    </section>
  )
}