import React from 'react';
import '../stylesheets/about.css'


export default function About() {
  return (
    <div className='about'>
      <div className='about-text'>
        <p id='me'>I'm Randy Sartor, a 27 year-old full-stack developer.</p>
        <p>
          I've always been fascinated by the endless flow of human ideas.
          I decided to become a developer so I could help people turn those ideas from
          abstract and intangible thoughts, into real-life experiences.
          I'm just beginning my journey and I'm searching for the right company and team that shares my commitment to changing the world through great ideas.
        </p>
      </div>
      
      <div className='skills'>
        <h1>Skills</h1>
        <div className='skills-lists'>
          <ul className='skill-list'>
            <h3>Front end</h3>
            <li><i className="devicon-javascript-plain colored"></i> Javascript</li> 
            <li><i className="devicon-react-original colored"></i> React/Redux</li> 
            
            <li><i className="devicon-vuejs-plain colored"></i> Vue</li>
            <li><i className="devicon-html5-plain colored"></i> HTML5</li> 
            <li><i className="devicon-css3-plain colored"></i> CSS</li> 
          </ul>    

          <ul className='skill-list'>
            <h3>Back end</h3>
            <li><i className="devicon-nodejs-plain colored"></i> NodeJS</li> 
            <li><i className="devicon-mongodb-plain colored"></i> MongoDB</li> 
            <li><i className="devicon-postgresql-plain colored"></i> PostgreSQL</li> 
            <li><i className="devicon-mocha-plain colored"></i> Mocha/Chai</li> 
          </ul>
          
          <ul className='skill-list'>
            <h3>Dev Tools</h3>
            <li><i className="devicon-git-plain colored"></i> Git</li> 
            <li><i className="devicon-github-plain"></i> Github</li> 
            <li><i className="devicon-heroku-plain colored"></i> Heroku</li> 
            <li><i className="devicon-travis-plain colored"></i> TravisCI</li>
          </ul>     
        </div>
      </div>     
    </div>
  )
}