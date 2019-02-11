import React from 'react';
import '../stylesheets/contact.css'
import Form  from './form';

export default function Contact() {
  return (
    <div className='contact'>
      <h1>Contact Me</h1>
      <p>Thanks for visiting my page! I'd love to hear from you.
      </p>

      <p>If you'd like to chat, drop me a line at randal.sartor@gmail.com</p>
      <div className='contact-logos'>
        <a className='contact-icon' href="https://github.com/thinkful-ei26/randys-mealcraft-client" target="_blank" rel="noopener noreferrer"><i class="devicon-github-plain"></i></a>
        <a className='contact-icon' href="https://www.linkedin.com/in/randal-sartor-6a377844/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
      </div>

      {/* <Form /> */}
    </div>
  )
}