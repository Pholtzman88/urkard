import React, { Component } from "react";

import FlippableContent from "../Content/FlippableContent";

import "../../assets/stylesheets/About.css";

import Modal from "react-responsive-modal";
import VideoPlayer from "../VideoPlayers/VideoPlayer";
import kidPrintVideo from "../../assets/videos/kidPrintVideo.mp4";

class JoiningUrKard extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            active: false
        };
    }


    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({open: false});
    };

    toggleActive = () => {
        this.setState({
            active: !this.state.active
        })
    };

    render(){

        const isMobile = window.innerWidth < 500;
        const isTablet = window.innerWidth < 800;
        const { open } = this.state;
        const { active } = this.state;

        const cardHeight = (isMobile, isTablet) => {
            if (isMobile) return '750px';
            if (isTablet) return '450px';
            return '550px';
        };

        return (
            <div className={'joining-container'} style={{minHeight: window.innerHeight}}>
                <h1 className={'title'}>Joining <strong style={{color: "#FE7F01"}}>urKard</strong></h1>
                <div onClick={this.toggleActive}>
                    <FlippableContent
                        height={cardHeight(isMobile, isTablet)}
                        active={active}
                        front = {
                            (
                                <div className={'joining-flip-card front'}>
                                    <p><strong style={{color: "#FE7F01"}}>urKard</strong> is accepting applications to be on our roller bar and to sell your cards on the App
                                        Store and Google Play Stores.  Currently we have the following cards on the app:</p>
                                    <ul >
                                        <li>
                                            <strong style={{color: "#FE7F01"}}>
                                                kidprint
                                            </strong>
                                            (child ID card that can help your child in an emergency – comes with fingerprint and video as a QR code on the card),
                                            <div>
                                                <button className='modalButton' style={{fontSize: '16px', textDecoration: 'underline'}} onClick={this.onOpenModal}>
                                                    view our informational video here.
                                                </button>
                                                <Modal open={open} onClose={this.onCloseModal} little>
                                                    <VideoPlayer
                                                        class={'kidprint-video'}
                                                        src={kidPrintVideo}
                                                        autoplay={true}
                                                    />
                                                </Modal>
                                            </div>
                                        </li>
                                        <li><strong style={{color: "#FE7F01"}}>MedTags</strong> (a medical ID card for people that has their medical information including prescription and vital health info that first responders are trained to look for).</li>
                                        <li><strong style={{color: "#FE7F01"}}>Autism Card</strong> (a card that helps Autistic persons in emergency situations – comes with video)</li>
                                        <li><strong style={{color: "#FE7F01"}}>Coming Soon..</strong></li>
                                    </ul>
                                </div>
                            )
                        }
                        back = {
                            (
                                <div className={'joining-flip-card back'}>
                                    <p>What types of cards would we like to join our family?</p>
                                    <ul>
                                        <li><strong style={{color: "#FE7F01"}}>Souvenir Cards</strong> –  could be pictures with tourist attractions - urKARD can work with Green Screen suggestions - let us know what you are thinking.</li>
                                        <li><strong style={{color: "#FE7F01"}}>Cruise Ships</strong> – we can design tags for you that your customers can fill out before they get on the ship.</li>
                                        <li><strong style={{color: "#FE7F01"}}>Fan Cards</strong> – urKARD can Green Screen a celebrity into the card - our QR code could have a message or song from a celebrity - contract us and we can talk about Comic Cons and other convention opportunities.</li>
                                        <li><strong style={{color: "#FE7F01"}}>Your idea</strong> – pitch us a program - we share the costs and profits with you.</li>
                                    </ul>
                                    <p>Direct Image Cards Inc is looking to partner with companies and individuals that can bring ideas and the ability to execute.  We offer low cost entry into a business, and a plan that works.  Contact us at <strong style={{color: "#FE7F01"}}>urKARDapp@directimagecards.com</strong> for further details.</p>
                                </div>
                            )
                        }
                        frontText = {
                            "What type of cards are currently supported?"
                        }

                        backText = {
                            "What type of cards would we like to join our family?"
                        }
                    />
                </div>
            </div>
        )
    }
}

export default JoiningUrKard;