import React, { Component } from "react";

import DigitalSynergiesLogo from "../../assets/images/digitalSynergiesLogo.jpg";
import TotalIDLogo from "../../assets/images/totalIDSolutionsLogo.jpg";
import SecureIDLogo from "../../assets/images/secureIDLogo.jpg";
import ISCLogo from "../../assets/images/idSystemGroupLogo.jpg";
import ACTLogo from "../../assets/images/ACTlogo.png";
import zebraLogo from "../../assets/images/zebraLogo.PNG";
import smarttechLogo from "../../assets/images/smartechlogo.png";
import captureLogo from "../../assets/images/captureLogo.png";
import diamondLogo from "../../assets/images/Diamond.PNG";
import evolisLogo from "../../assets/images/evolis.PNG";

import "../../assets/stylesheets/Partners.css";

class Partners extends Component {
    constructor(props){
        super(props);
        this.state = {
            height: 0,
            currentLinkText: ''
        };
    }
    componentWillMount(){
        let y = window.innerHeight;
        this.setState({
            height: y
        });

    }

    handleMouseEnter = event => {
        this.setState({
            currentLinkText: event.target.name
        })
    };
    handleMouseLeave = () => {
        this.setState({
            currentLinkText: ''
        })
    };
    render(){
        const style = {
            container: {
                textAlign: "center",
                marginBottom: '200px',
                minHeight: window.innerHeight
            },
            wrapper: {
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                border: "5px solid #8600F9",
                borderRadius: "25px",
                overflow: 'hidden'
            },
            largeImg: {
                width: "300px",
                height: "100px",
                padding: "30px"
            },
            mediumImg: {
                width: "200px",
                height: "200px",
                padding: "30px"
            },
            smallImg: {
                width: "200px",
                height: "100px",
                padding: "30px"
            }
        };
        return (
            <div className={'partners-container'} style={style.container}>
                <h1 className={'title'}>Partners </h1>
                <div style={style.wrapper}>
                <div >
                    <a href="https://www.secureidcard.biz/" target="_blank" rel="noopener noreferrer" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                        <img className={"img"} name={"https://www.secureidcard.biz/"} src={SecureIDLogo} alt="secureID" style={style.largeImg}/>
                    </a>
                    <a href="http://digitalsynergyads.com/" target="_blank" rel="noopener noreferrer" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                        <img className={"img"} name={"http://digitalsynergyads.com/"} src={DigitalSynergiesLogo} alt="digitial synergies" style={style.largeImg}/>
                    </a>
                    <a href="http://www.totalidsolutions.com/" target="_blank" rel="noopener noreferrer" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                        <img className={"img"} name={"http://www.totalidsolutions.com/"} src={TotalIDLogo} alt="totalID" style={style.mediumImg}/>
                    </a>
                    <a href="https://www.identificationsystemsgroup.com/" target="_blank" rel="noopener noreferrer" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                        <img className={"img"} name={"https://www.identificationsystemsgroup.com/"} src={ISCLogo} alt="Identification systems group" style={style.smallImg}/>
                    </a>
                    <a href="http://www.actcda.com/" target="_blank" rel="noopener noreferrer" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                        <img className={"img"} name={"http://www.actcda.com/"} src={ACTLogo} alt="act" style={style.smallImg}/>
                    </a>
                    <a href="https://capturet.com/" target="_blank" rel="noopener noreferrer" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                        <img className={"img"} name={"https://capturet.com/"} src={captureLogo} alt="capture" style={style.smallImg}/>
                    </a>
                    <a href="https://www.zebra.com/us/en.html" target="_blank" rel="noopener noreferrer" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                        <img className={"img"} name={"https://www.zebra.com/us/en.html"} src={zebraLogo} alt="zebra" style={style.smallImg}/>
                    </a>
                    <a href="http://www.smarttechid.com/" id={"http://www.smarttechid.com/"} target="_blank" rel="noopener noreferrer" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                        <img className={"img"} name={"http://www.smarttechid.com/"} src={smarttechLogo} alt="smarttech" style={style.largeImg}/>
                    </a>
                    <a href="https://diamondbusiness.net/" target="_blank" rel="noopener noreferrer" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                        <img className={"img"} name={"https://diamondbusiness.net/"} src={diamondLogo} alt="diamond business" style={style.largeImg}/>
                    </a>
                    <a href="https://us.evolis.com/"  target="_blank" rel="noopener noreferrer" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                        <img className={"img"} name={"https://us.evolis.com/"} src={evolisLogo} alt="evolis" style={style.smallImg}/>
                    </a>
                </div>
            </div>
                {window.innerWidth > 800 ? <h1 style={{color: "#F7951E"}}>{this.state.currentLinkText}</h1> : ''}
        </div>
        )
    }
}

export default Partners;