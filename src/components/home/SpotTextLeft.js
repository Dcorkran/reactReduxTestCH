import React, {PropTypes} from 'react';
import { Parallax } from 'react-parallax';

const SpotTextLeft = ({spotInfo}) => {
  return (
    <div className="container spot-container">
      <div className="row">
        <div className="col-xs-4 col-xs-offset-1">
          <h3 className="spot-header-text">{spotInfo.header}</h3>
          <p className="spot-info-text">{spotInfo.info}</p>
          <p className="spot-light-text">{spotInfo.light}</p>
        </div>
        <div className="col-xs-6 spot-img-container">
          <img className="power-at-scale-img" src={require('../../img/PowerAtScale.png')}></img>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};


export default SpotTextLeft;
