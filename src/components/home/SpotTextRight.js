import React, {PropTypes} from 'react';
import { Parallax } from 'react-parallax';

const SpotTextRight = ({spotInfo}) => {
  return (
    <div className="container spot-container">
      <div className="row">
        <div className="col-xs-6 col-xs-offset-1 spot-img-container">
          <img className="power-at-scale-img" src={spotInfo.img}></img>
        </div>
        <div className="col-xs-4">
          <h3 className="spot-header-text">{spotInfo.header}</h3>
          <p className="spot-info-text">{spotInfo.info}</p>
          <p className="spot-light-text">{spotInfo.light}</p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

SpotTextRight.propTypes = {
   spotInfo: React.PropTypes.object.isRequired
};

export default SpotTextRight;
