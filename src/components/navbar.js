import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../stylesheets/top-nav.css'

export default class Navbar extends React.Component{
  render() {
    return (
    <nav className='nav' id='navbar'>
      <ul className='nav-items'>
        <li className='logoDiv'>
          <h2>RS</h2>
        </li>
        <li className='buttons-div'>

          <li className='nav-item'>
              <Link
                activeClass='active'
                to='about'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
              About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='projects'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='experience'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
              Experience
              </Link>
            </li>
            <li className='nav-item'>
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
            Contact
            </Link>
          </li>

        </li>

          
      </ul>
    </nav>
    )
  }
}