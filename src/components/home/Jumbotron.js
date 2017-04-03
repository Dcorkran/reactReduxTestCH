import React, {PropTypes} from 'react';
import { Parallax } from 'react-parallax';

const Jumbotron = () => {
    return (
        <Parallax className="jumbo" bgHeight={'200'} bgImage={require("../../img/homepage-hero-bg.jpg")} strength={400}>
          <br/>
          <div className="jumbo-text-container">
            <h1> Digital Advertising Made Easy&trade; </h1>
          </div>
        </Parallax>
    );
};

export default Jumbotron;
