import React from 'react';
import '../stylesheets/about.css'


export default function About() {
  return (
    <div className='about'>
          <div className='about-text'>
            <h2>About me.</h2>
            <p id='me'>I'm Randy Sartor, a 27-year old aspiring fullstack developer.</p>
            <p>
              I've always been fascinated by the endless flow of human ideas.
              I decided to become a developer so I could help people turn those ideas from
              abstract and intangible thoughts, into real-world, living and breathing experiences.
              I'm just begnning my journey and I'm searching for the right team to help nuture 
              and develop my growth as a coder and shares my commitment to changing the world through great ideas.
            </p>
          </div>
          
         <div className='skills'>
            <h2>Skills</h2>
            <div className='skills-lists'>
              <ul className='skill-list'>
                <h3>Front end</h3>
                <li><i class="devicon-javascript-plain colored"></i> Javascript</li> 
                <li><i class="devicon-react-original colored"></i> React/Redux</li> 
                
                <li><i class="devicon-vuejs-plain colored"></i> Vue</li>
                <li><i class="devicon-html5-plain colored"></i> HTML5</li> 
                <li><i class="devicon-css3-plain colored"></i> CSS</li> 
              </ul>    

              <ul className='skill-list'>
                <h3>Back end</h3>
                <li><i class="devicon-nodejs-plain colored"></i> NodeJS</li> 
                <li><i class="devicon-mongodb-plain colored"></i> MongoDB</li> 
                <li><i class="devicon-postgresql-plain colored"></i> PostgreSQL</li> 
                <li><i class="devicon-mocha-plain colored"></i> Mocha/Chai</li> 
              </ul>
              
              <ul className='skill-list'>
                <h3>Dev Tools</h3>
                <li><i class="devicon-git-plain colored"></i> Git</li> 
                <li><i class="devicon-github-plain"></i> Github</li> 
                <li><i class="devicon-heroku-plain colored"></i> Heroku</li> 
                <li><i class="devicon-travis-plain colored"></i> TravisCI</li>
              </ul>     
            </div>
         </div>     
    </div>
  )
}

// clean, responsive 
// eslint-disable-next-line no-lone-blocks
