import React, { Component } from "react";

import VideoPlayer from "../VideoPlayers/VideoPlayer";
import Video from "../../assets/videos/aboutUrKard.m4v";

import "../../assets/stylesheets/Video.css";
import "../../assets/stylesheets/About.css";

class WhatIsUrKard extends Component {

    render(){

        return (
            <div className={'what-is-container'} style={{minHeight: window.innerHeight}}>
                <h1 className={'title'}>What is <strong style={{color: "#FE7F01"}}>urKARD</strong></h1>
                <VideoPlayer class={"aboutUrKardVideo"} src={Video}/>
                <p className={'description'}>
                    <strong style={{color: "#FE7F01"}}>urKARD</strong> is a mobile app on the App Store and Google Play store that prints plastic cards to any thermal image printer in the world as well as sending out a digital copy of the card as well.  <strong style={{color: "#FE7F01"}}>urKARD</strong> can capture pictures, scan driver’s licenses, capture video and process it to a QR code on a plastic card, can capture signatures, and can capture data on any individual and print a plastic card anywhere.  <strong style={{color: "#FE7F01"}}>urKARD</strong> is available for a free download on the App Store and the Google Play Store.
                </p>
            </div>
        )
    }
}

export default WhatIsUrKard;