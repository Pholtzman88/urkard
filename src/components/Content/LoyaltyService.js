import React, { Component } from "react";

import img from "../../assets/images/3up.jpg";

class LoyaltyService extends Component {
    render(){
        return (
            <div style={{textAlign: 'center'}}>
                <h1 style={{color: '#FE7F01'}}>Loyalty 3 Card Marketing</h1>
                <div className="services-row">
                    <div className="services-media-container">
                        <img style={{width: '250px', maxWidth: window.innerWidth - 100}} src={img} alt="qr code scanning"/>
                    </div>
                    <div className="services-description">
                        <h3 className="services-description-text">
                            urKARD can produce not only a wallet size loyalty card but it can also produce a personalized 3 up Card whereby your customers would get loyalty cards for their key chains.  Ask us how.
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoyaltyService;

