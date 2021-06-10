import React from 'react'
import { Button } from '../Button';
import '../../App.css';
import './Hero.css';


function Hero() {
  return (
    <div className="hero-container">
      <video src='/videos/Saint-Barthelemy_2.mov' autoPlay loop muted />
      <h1>I am a developer</h1>
      <p>Let's work together!</p>
        <div className="hero-btns">
          <Button 
          className="btns" 
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          >
            GET STARTED
          </Button>
          <Button 
          className="btns" 
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          >
            WATCH TRAILER <i className='far fa-play-circle' />
          </Button>

        </div>
    </div>
  )
}

export default Hero;