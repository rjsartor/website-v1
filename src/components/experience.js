import React from 'react';
import {connect} from 'react-redux';
import {showNortheasternInfo, showThinkfulInfo, showLewagonInfo} from '../actions/experience';
import '../stylesheets/experience.css'

export class Experience extends React.Component {
  showNortheastern() {
    this.props.dispatch(showNortheasternInfo());
  }

  showThinkful() {
    this.props.dispatch(showThinkfulInfo());
  }

  showLewagon() {
    this.props.dispatch(showLewagonInfo());
  }

  render() {
    let northeasternDates;
    let northeasternDescription;
    let thinkfulDates;
    let thinkfulDescription;
    let lewagonDates;
    let lewagonDescription;

    if (this.props.showNortheastern) {
      northeasternDates = (
        <article className='experience-dates'>
          <p>Boston, MA</p>
          <p>2010 - 2105</p>
        </article>
      )
      northeasternDescription = (
        <article className='experience-description'>
          <p>Bachelor’s Degrees in Philosophy and International Affairs</p>
        </article>
      )
    }
    if (this.props.showThinkful) {
      thinkfulDates = (
        <article className='experience-dates'>
          <p>Boston, MA</p>
          <p>October 2018 - March 2019</p>
        </article>
      )
      thinkfulDescription = (
        <article className='experience-description'>
          <p>Learned industry best practices and practical software development standards with a focus on HTML5, CSS3, JavaScript, jQuery, Node.js, React, Redux, and algorithms & data structures.</p>
        </article>
      )
    } 
    if (this.props.showLewagon) {
      lewagonDates = (
        <article className='experience-dates'>
          <p>Boston, MA</p>
          <p>October 2018 - March 2019</p>
      </article>
      )
      lewagonDescription = (
        <article className='experience-description'>
          <p> 9-week intensive coding bootcamp learning HTML, CSS, Bootstrap, JavaScript ES2015, SQL, git, GitHub, Heroku and Ruby on Rails.</p>
        </article>
      )
    }

    return (
      <section className='experience'>
        <h1>Experience</h1>
        <article className='experience-content'>
          <div className='northeastern experience-card' onClick={() => this.showNortheastern()}>
            <img className='experience-img' src={require('../images/neu-logo.png')} alt='northeastern university'>
            </img>
            <h3>Northeastern University</h3>
            {northeasternDates}
            {northeasternDescription}
          </div>     
          <div className='thinkful experience-card' onClick={() => this.showThinkful()}>
            <img className='experience-img'src={require('../images/thinkful-logo.png')} alt='northeastern university'>
            </img>
            <h3>Thinkful</h3>
            {thinkfulDates}
            {thinkfulDescription}
          </div>  
          <div className='lewagon experience-card' onClick={() => this.showLewagon()}>
            <img className='experience-img' src={require('../images/le-wagon-logo.png')} alt='northeastern university'>
            </img>
            <h3>Lewagon</h3>
            {lewagonDates}
            {lewagonDescription}
          </div>   
        </article>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  showNortheastern: state.portfolio.showNortheastern,
  showThinkful: state.portfolio.showThinkful,
  showLewagon: state.portfolio.showLewagon,
})

export default connect(mapStateToProps)(Experience);