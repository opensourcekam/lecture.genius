import React, {PropTypes} from 'react';
import '../public/main.css';

export default class Home extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <section id='header'>
          <div className='inner'>
            <span className='icon major fa-cloud' />
            <h1>Meet <strong>Brain Swarm</strong><br /> a fun and collaborative
                    learning network.
                  </h1>
            <br />
            <p>Created by Kameron, Denzel, and Imauri.<br />
            </p>
            <ul className='actions'>
              <li>
                <a href='/lectures' className='button scrolly'>Discover</a>
              </li>
            </ul>
          </div>
        </section>
        <section id='one' className='main style1'>
          <div className='container'>
            <div className='row 150%'>
              <div className='6u 12u$(medium)'>
                <header className='major'>
                  <h2>Highlight and Unite<br />
                  </h2>
                </header>
                <p>Feauturing Genius annotation capability to annotate your professor's confusing lectures.
                    </p>
              </div>
              <div className='6u$ 12u$(medium) important(medium)'>
                <span className='image fit'><img src='images/brainswarm.png' alt='' /></span>
              </div>
            </div>
          </div>
        </section>

        <section id='four' className='main style2 special'>
          <div className='container'>
            <header className='major'>
              <h2>Are you ready to collaborate on our notes?</h2 > </header> <p> Lets brain swarm < /p>
            <ul className='actions uniform'>
              <li>
                <a href='#' className='button special'>Sign Up</a > </li> < li > <a href='#' className='button'>Learn More</a> < /li>
            </ul > </div> </section>

        <section id='footer'>
          <ul className='icons'>
            <li>
              <a href='#' className='icon alt fa-twitter'>
                <span className='label'>Twitter</span > </a> < /li>
            <li>
              <a href='#' className='icon alt fa-facebook'>
                <span className='label'>Facebook</span > </a> < /li>
            <li>
              <a href='#' className='icon alt fa-instagram'>
                <span className='label'>Instagram</span > </a> < /li>
            <li>
              <a href='#' className='icon alt fa-github'>
                <span className='label'>GitHub</span > </a> < /li>
            <li>
              <a href='#' className='icon alt fa-envelope'>
                <span className='label'>Email</span > </a> < /li>
          </ul > <ul className='copyright'>
            <li>&copy; Untitled</li>
            <li>Design:
                <a href='http://html5up.net'>HTML5 UP</a>
            </li>
          </ul>
        </section>
      </div>
    );
  }
                }
