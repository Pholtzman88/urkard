import React, { Component} from "react";
import FlippableContent from "../Content/FlippableContent";
import front from "../../assets/images/musicFront.jpg";
import back from "../../assets/images/musicBack.jpg";
import FAQButton from "../Buttons/FAQButton";

import "../../assets/stylesheets/Music.css"

class Music extends Component{
    constructor(props){
        super(props);
        this.state = {
            active: false
        }
    }

    toggleCard = () => {
        this.setState({
            active: !this.state.active
        })
    };

    render(){
        const {active} = this.state;
        return (
            <div className={'music-container'}>
                <h1 className={'music-title'}>Music Kard</h1>
                <div className={'music-first-row'}>
                    <div onClick={this.toggleCard} style={{flex: 2, margin: '60px 10px'}}>
                        <FlippableContent
                            height={'340px'}
                            flashing={true}
                            active={active}
                            front={(
                                <div>
                                    <img className={'flash-img'} style={{
                                        width: '100%',
                                        height: '340px',
                                        borderRadius: '20px'
                                    }} src={front} alt="music card front"/>

                                </div>
                            )}
                            back={(
                                <div>
                                    <img className={'flash-img'} style={{
                                        width: '100%',
                                        height: '340px',
                                        borderRadius: '20px'
                                    }} src={back} alt="music card back"/>
                                </div>
                            )}
                        />
                    </div>
                    <div style={{flex: 2}}>
                        <h1 style={{color: '#bdbdbd', margin: '60px 20px 0px 20px'}}>
                            <u>How It Works</u>
                        </h1>
                        <h1 style={{color: '#FFF', margin: '35px', fontSize: '28px'}}>
                            Distribute  YOUR

                            Music
                            Videos
                            Photos
                            Web Links

                            via a custom
                            Keepsake  Card
                        </h1>
                        <h1 style={{color: '#FFF', margin: '35px', fontSize: '28px'}}>
                            Your fan orders a card from either your store or web site.
                            We create the card and ship to the fan.
                        </h1>
                        <h1 style={{color: '#FFF', margin: '35px', fontSize: '28px'}}>
                            No pre purchase
                            You pay the agreed upon price when you Sell
                        </h1>
                    </div>
                </div>
                <FAQButton link={'/MusicFAQ'} styling={{
                    width: '300px',
                    height: '300px',
                    float: 'right',
                    marginRight: '50px'
                }}/>
                <h1 style={{color: '#bdbdbd', margin: '15px'}}>
                    <u>Need a Website?</u>
                </h1>
                <h1 style={{color: '#FFF', margin: '35px', fontSize: '28px', lineHeight: 1.5}}>
                    Let us host your Music, Videos, Photos and Podcasts via a custom Web Page.
                    Provide us with your graphics and music. For as low as a $200 set up fee

                    and commitment to sales of 5 cards per month, we create your custom web site with the ability to sell your music cards.

                    Hosting is provided by our server at agreed upon cost.
                </h1>
            </div>
        )
    }
}

export default Music;