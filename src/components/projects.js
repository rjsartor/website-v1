import React from 'react';
import '../stylesheets/projects.css'

export default class Projects extends React.Component {
  render() {
    const bold = {fontWeight: 'bold'}

    return (
      <div className='projects'>
        <h1>Projects</h1>
        <ul id='projects-list'>
          <li className='project-item'>
            <a href="https://mealcraft.herokuapp.com/" className="picture-link" target="_blank" rel="noopener noreferrer"><img src={require('../images/landing-page-small.png')} alt='mealcraft project' className='responsive'></img></a>   
              <div className='project-info'>
                <h2>
                  <a href="https://mealcraft.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-link">MealCraft</a>
                  <span><a className='github-icon' href="https://github.com/thinkful-ei26/randys-mealcraft-client" target="_blank" rel="noopener noreferrer"><i class="devicon-github-plain"></i></a></span>
                </h2>
                <p className='project-description'>Find and save your next meal searching from over 300,000 of the internets best recipes!</p>
                <p><i class="devicon-javascript-plain colored"></i> , <i class="devicon-react-original colored"></i> <i class="devicon-mongodb-plain colored"></i> <i class="devicon-nodejs-plain colored"></i> <i class="devicon-heroku-plain colored"></i> </p>
              </div>  
          </li>
          <li className='project-item'>
              <a href="https://frenchmate.herokuapp.com/" className="picture-link" target="_blank" rel="noopener noreferrer"><img src={require('../images/frenchMate.png')} alt='mealcraft project' className='responsive'></img></a>  
              <div className='project-info'>
                <h2>
                  <a href="https://frenchmate.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-link">FrenchMate</a>
                  <span><a className='github-icon' href="https://github.com/thinkful-ei26/Barrett-RandyS-spacedRep-client" target="_blank" rel="noopener noreferrer"><i class="devicon-github-plain"></i></a></span>
                </h2>
                <p className='project-description'>Simple word learning app, using a spaced repetition algorithm to maximize efficiency.</p>
                <p><span style={bold}> TechStack: </span>React/Redux for frontend, Node.js/MongoDB for backend and databse management. Hosted on Heroku.</p>
              </div>  
          </li>
        </ul>    
      </div>
    )

  }
   
}
