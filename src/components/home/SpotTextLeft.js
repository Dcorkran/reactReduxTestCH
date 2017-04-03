import React, {PropTypes} from 'react';
import { Parallax } from 'react-parallax';

const SpotTextLeft = () => {
  return (
    <div className="container spot-container">
      <div className="row">
        <div className="col-xs-4 col-xs-offset-1">
          <h3>Ad Buying Power at Scale</h3>
          <p>Real-time programmatic advertising platform built for simple operation, yet powerful enough to handle campaigns of any size.</p>
          <p>Find out why Choozle is the world's fastest growing digital marketing platform.</p>
        </div>
        <div className="col-xs-6 spot-img-container">
          <img className="power-at-scale-img" src={require('../../img/PowerAtScale.png')}></img>
        </div>
      </div>
    </div>
  )
}

export default SpotTextLeft
