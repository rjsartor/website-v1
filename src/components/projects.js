import React from 'react';
import '../stylesheets/projects.css'

export default class Projects extends React.Component {
  render() {
    return (
      <main className='projects'>
        <h1>Projects</h1>
        <ul id='projects-list'>
          <li className='project-item'>
            <article className='picture-wrap'>
              <a href="https://road-rate-client.herokuapp.com/" className="picture-link" target="_blank" rel="noopener noreferrer">
                <img src={require('../images/roadRate.png')} alt='roadRate dashboard' className='responsive'></img>
                <article className='overlay'>
                  <article className='text'>
                    Check me out!
                  </article>
                </article>
              </a>   
            </article>    
            <article className='project-info'>
              <h2>
                <a href="https://road-rate-client.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-link">RoadRate</a>
                <span><a className='github-icon' href="https://github.com/thinkful-ei26/roadrate-client" target="_blank" rel="noopener noreferrer"><i className="devicon-github-plain"></i></a></span>
              </h2>
              <p className='project-description'>The internet's first public drivers database. Rate, review, and register license plates!</p>
              <p><i className="devicon-javascript-plain colored"></i> <i className="devicon-react-original colored"></i> <i className="devicon-mongodb-plain colored"></i> <i className="devicon-nodejs-plain colored"></i> <i className="devicon-heroku-plain colored"></i> </p>
            </article>  
          </li>
          <li className='project-item'>
            <article className='picture-wrap'>
              <a href="https://mealcraft.herokuapp.com/" className="picture-link" target="_blank" rel="noopener noreferrer">
                <img src={require('../images/mealcraft.png')} alt='mealcraft project' className='responsive'></img>
                <article className='overlay'>
                  <article className='text'>
                    Check me out!
                  </article>
                </article>
              </a>   
            </article>
            <article className='project-info'>
              <h2>
                <a href="https://mealcraft.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-link">MealCraft</a>
                <span><a className='github-icon' href="https://github.com/thinkful-ei26/randys-mealcraft-client" target="_blank" rel="noopener noreferrer"><i className="devicon-github-plain"></i></a></span>
              </h2>
              <p className='project-description'>Find and save your next meal searching from over 300,000 of the internets best recipes!</p>
              <p><i className="devicon-javascript-plain colored"></i> <i className="devicon-react-original colored"></i> <i className="devicon-mongodb-plain colored"></i> <i className="devicon-nodejs-plain colored"></i> <i className="devicon-heroku-plain colored"></i> </p>
            </article>  
          </li>
          <li className='project-item'>
            <article className='picture-wrap'>
              <a href="https://frenchmate.herokuapp.com/" className="picture-link" target="_blank" rel="noopener noreferrer"><img src={require('../images/frenchMate.png')} alt='frenchMate landingpage' className='responsive'></img>
                <article className='overlay'>
                  <article className='text'>
                    Check me out!
                  </article>
                </article>
              </a>  
            </article>
            <article className='project-info'>
              <h2>
                <a href="https://frenchmate.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-link">FrenchMate</a>
                <span><a className='github-icon' href="https://github.com/thinkful-ei26/Barrett-RandyS-spacedRep-client" target="_blank" rel="noopener noreferrer"><i className="devicon-github-plain"></i></a></span>
              </h2>
              <p className='project-description'>Simple word learning app, using a spaced repetition algorithm to maximize efficiency.</p>
              <p><i className="devicon-javascript-plain colored"></i> <i className="devicon-react-original colored"></i> <i className="devicon-mongodb-plain colored"></i> <i className="devicon-nodejs-plain colored"></i> <i className="devicon-heroku-plain colored"></i> </p>
              {/* <p><span style={bold}> TechStack: </span>React/Redux for frontend, Node.js/MongoDB for backend and databse management. Hosted on Heroku.</p> */}
            </article>  
          </li>
        </ul>    
      </main>
    )
  }  
}
