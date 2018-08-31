import React, { Component } from "react";

import img from "../../assets/images/fingerprint.PNG";
import "../../assets/stylesheets/Services.css";

class FingerPrintService extends Component {
    render(){

        return (
            <div style={{textAlign: 'center'}}>
                <h1 style={{color: '#FE7F01'}}>Finger Print Scanning</h1>
                <div className="services-row">
                    <div className="services-description">
                        <h3 className="services-description-text">
                            Our urKARD app utilizing IOS only, can scan a fingerprint and produce a digital image and transfer it to a plastic card that can help in the identification of individuals.                        </h3>
                    </div>
                    <div className="services-media-container">
                        <img style={{width: '300px',  maxWidth: window.innerWidth - 100}} src={img} alt="finger print"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default FingerPrintService;