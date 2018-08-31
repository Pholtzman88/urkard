import React, { Component } from "react";

import img from "../../assets/images/qrCode.PNG";
import "../../assets/stylesheets/Services.css";

class QRCodeService extends Component {
    render(){
        return (
            <div style={{textAlign: 'center'}}>
                <h1 style={{color: '#FE7F01'}}>QR Code Scanning</h1>
                <div className="services-row">
                    <div className="services-media-container">
                        <img style={{width: '400px', maxWidth: window.innerWidth - 100}} src={img} alt="qr code scanning"/>
                    </div>
                    <div className="services-description">
                        <h3 className="services-description-text">
                            Our urKARD app can take a 15 second video and produce a QR code digitally and transfer it to a plastic card that can help in the identification of individuals.  We can also add websites and videos and songs to plastic cards by way of our QR card technology.                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default QRCodeService;