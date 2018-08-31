import React, { Component} from "react";
import LicenseScanningService from "../Content/LicenseScanningService";
import FingerPrintService from "../Content/FingerPrintService";
import QRCodeService from "../Content/QRCodeService";
import EventMarketingService from "../Content/EventMarketingService";
import LoyaltyService from "../Content/LoyaltyService";

import "../../assets/stylesheets/Services.css";


class Services extends Component{

    render(){


        return (

                <div className={'services-container'}>
                    <LicenseScanningService/>
                    <FingerPrintService/>
                    <QRCodeService/>
                    <EventMarketingService/>
                    <LoyaltyService />
                </div>

        )
    }
}

export default Services;