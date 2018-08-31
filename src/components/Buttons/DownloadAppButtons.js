import React, { Component } from "react";

import GoogleImg from "../../assets/images/GooglePlayStore.png";
import AppleImg from "../../assets/images/AppleStore.png";
import "../../assets/stylesheets/Footer.css";

class DownloadAppButtons extends Component{
    render(){
        return (
                <div className="download-btn-container">
                    <a href="https://play.google.com/store/search?q=urkard&hl=en&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                        <img className={'download-btn google-download-btn'} src={GoogleImg} alt={'download google'}/>
                    </a>
                    <a href="https://itunes.apple.com/us/app/urkard/id970590094?mt=8">
                        <img className={'download-btn apple-download-btn'} src={AppleImg} alt={'download apple'} />
                    </a>
                </div>
        );
    }
}

export default DownloadAppButtons;