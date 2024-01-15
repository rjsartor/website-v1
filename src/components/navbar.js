import React from 'react';
import { Link
  // , animateScroll as scroll 
} from 'react-scroll';
import '../stylesheets/top-nav.css'

export default class Navbar extends React.Component{
  constructor() {
    super();
    this.state = {className: 'nav-white'}
  }
  
  handleSetActiveWhite() {
    this.setState({className: 'nav-white'});
  }

  handleSetActiveBlack() {
    this.setState({className: 'nav-black'});
  }

  handleSetActiveAbout() {
    this.setState({className: 'nav-white dark-background'});
  }

  render() {

    return (
    <nav className={this.state.className} id='navbar'>
      <ul className='nav-items'>
        <li className='logo-div'>
          <Link
            href="introduction"
            activeClass='active'
            to='introduction'
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            id="RSlogo"
            onSetActive={() => this.handleSetActiveWhite()}>
          RS
          </Link>
        </li>
        <article className='buttons-div'>
          <li className='nav-item'>
              <Link
                activeClass='active'
                href='about'
                to='about'
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                onSetActive={() => this.handleSetActiveAbout()}
              >
              About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                href='projects'
                activeClass='active'
                to='projects'
                spy={true}
                smooth={true}
                offset={-115}
                duration={1000}
                onSetActive={() => this.handleSetActiveBlack()}

              >
              Projects
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link
                activeClass='active'
                to='experience'
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
              Experience
              </Link>
            </li> */}
            <li className='nav-item'>
            <Link
              href='contact'
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              onSetActive={() => this.handleSetActiveBlack()}
            >
            Contact
            </Link>
          </li>
        </article>
      </ul>
    </nav>
    )
  }
}