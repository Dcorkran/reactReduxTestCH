import React from 'react';
import {Link} from 'react-router';
import Jumbotron from './Jumbotron';
import JumboLabel from './JumboLabel';
import SpotTextLeft from './SpotTextLeft';
import SpotTextRight from './SpotTextRight';
import FlexPlatImg from '../../img/flexplat.png';
import PowerAtScaleImg from '../../img/PowerAtScale.png';
import Support from '../../img/support.png';
import DataImg from '../../img/data.png';


class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      spotInfo1 : {
        header:"Ad Buying Power at Scale",
        info:"Real-time programmatic advertising platform built for simple operation, yet powerful enough to handle campaigns of any size.",
        light:"Find out why Choozle is the world's fastest growing digital marketing platform.",
        img:PowerAtScaleImg
      },
      spotInfo2 : {
        header:"Flexible Ad Buying Platform",
        info:"No minimum ad spend. Unlimited advertiser accounts. Simple pay-as-you-go subscriptions for ad buying and data products. Self-serve or fully-managed.",
        light:"The only platform that blends power and sophistication with simple operation.",
        img:FlexPlatImg
      },
      spotInfo3 : {
        header:"Superior Support & Quick Set-Up",
        info:"Take the wheel and drive yourself in no time. We will ride shotgun as long as you need. Unlimited training, webinars and video courses.",
        light:"Say no to the black box—unparalleled transparency and control in both self-service and fully-managed mode.",
        img:Support
      },
      spotInfo4 : {
        header:"Premium Data at Your Fingertips",
        info:"Access to 50+ premium data providers who represent over 100,000 targeting segments, including website visitor and CRM matching.",
        light:"Effective and efficient targeting for ad campaigns of any size.",
        img:DataImg
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
        <SpotTextRight
          spotInfo={this.state.spotInfo4}/>
        <SpotTextLeft
          spotInfo={this.state.spotInfo2}/>
        <SpotTextRight
          spotInfo={this.state.spotInfo3}/>
      </div>
    );
  }
}

export default HomePage;
