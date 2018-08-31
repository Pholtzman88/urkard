import React, { Component } from "react";

import VideoPlayer from "../VideoPlayers/VideoPlayer";
import video from "../../assets/videos/harley.mp4";
import poster from "../../assets/images/eventMarketing.PNG";

import "../../assets/stylesheets/Video.css";
import "../../assets/stylesheets/Services.css";

class EventMarketingService extends Component {
    render(){

        return (
            <div style={{textAlign: 'center'}}>
                <h1 style={{color: '#FE7F01'}}>Event Marketing</h1>
                <div className="services-row">
                    <div className="services-description">
                        <h3 className="services-description-text">
                            Imagine the ability to sign up thousands of customers at an event - get all their information that you require - and then send them an email and mail them a loyalty card the next day.  Or have the ability to sign up customers onsite and give them their card in less than 30 seconds.  urKARD and Direct Image Cards Inc can help you with your event marketing to increase your customer penetration and to capture data on your customers in a interactive way where your customer responds willingly to the marketing efforts.
                        </h3>
                    </div>
                    <div className="services-media-container">
                        <VideoPlayer class={"services-video"} poster={poster} src={video}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventMarketingService;