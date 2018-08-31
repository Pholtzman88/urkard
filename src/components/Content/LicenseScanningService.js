import React, { Component } from "react";

import VideoPlayer from "../VideoPlayers/VideoPlayer";
import video from "../../assets/videos/License.mp4";
import poster from "../../assets/images/licenseScanning.PNG";

import "../../assets/stylesheets/Video.css";
import "../../assets/stylesheets/Services.css";


class LicenseScanningService extends Component {
    render(){

        return (
        <div style={{textAlign: 'center'}}>
            <h1 style={{color: '#FE7F01'}}>License Scanning</h1>
            <div className="services-row">
                <div className="services-media-container">
                    <VideoPlayer class={"services-video"} poster={poster} src={video}/>
                </div>
                <div className="services-description">
                    <h3 className="services-description-text">
                        Our urKARD app can scan any US or Canadian driver's license and input the data on our information screen so the customer does not have to waste time in filling out the data.  This license scanning feature is perfect for Casino's and can also be used for verification of customer's age and validation of the driver's licence.                    </h3>
                </div>
            </div>
        </div>
        )
    }
}

export default LicenseScanningService;