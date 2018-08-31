import React, { Component } from "react";
import FAQButton from "../Buttons/FAQButton";
import SocialMediaButtons from "../Content/SocialMediaButtons";

import "../../assets/stylesheets/Footer.css";
import DownloadAppButtons from "../Buttons/DownloadAppButtons";

class Footer extends Component{

    render(){

        return (
            <div className={'footer-container'} style={{minHeight: window.innerHeight}}>
                <div className={'footer-info'}>
                    <div className={'info-container'}>
                        <div className={'download-container'}>
                            <div style={{marginLeft: "calc(50% - 115px)"}}>
                                <DownloadAppButtons/>
                            </div>
                        </div>
                        <div className={'faq-container'}>

                            <FAQButton link={'/FAQ'}/>

                        </div>
                    </div>
                </div>
                <div className={'social-media-container'}>
                    <SocialMediaButtons/>
                </div>
            </div>
        )
    }
}

export default Footer;