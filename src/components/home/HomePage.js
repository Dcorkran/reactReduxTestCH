import React from 'react';
import {Link} from 'react-router';
import Jumbotron from './Jumbotron';
import JumboLabel from './JumboLabel';
import SpotTextLeft from './SpotTextLeft';


class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      spotInfo1 : {
        header:"Ad Buying Power at Scale",
        info:"Real-time programmatic advertising platform built for simple operation, yet powerful enough to handle campaigns of any size.",
        light:"Find out why Choozle is the world's fastest growing digital marketing platform."
      },
      spotInfo2 : {
        header:"Flexible Ad Buying Platform",
        info:"No minimum ad spend. Unlimited advertiser accounts. Simple pay-as-you-go subscriptions for ad buying and data products. Self-serve or fully-managed.",
        light:"The only platform that blends power and sophistication with simple operation."
      }
    };
  }
  render() {
    return (
      <div className="homepage-bg">
        <Jumbotron className="jumbo"/>
        <JumboLabel/>
        <SpotTextLeft
          spotInfo={this.state.spotInfo1}/>
        <SpotTextLeft
          spotInfo={this.state.spotInfo2}/>
        <h1>sss</h1>
        <h1>sss</h1>
        <h1>sss</h1>
        <h1>sss</h1>
        <h1>sss</h1>
        <h1>sss</h1>
        <h1>sss</h1>
        <h1>sss</h1>
        <h1>sss</h1>
        <h1>sss</h1>
        <h1>sss</h1>
        <h1>sss</h1>
        <h1>sss</h1>
      </div>
    );
  }
}

export default HomePage;
