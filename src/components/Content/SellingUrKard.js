import React, { Component } from "react";

import VideoPlayer from "../VideoPlayers/VideoPlayer";
import video from "../../assets/videos/distributors.m4v";
import poster from "../../assets/images/sellingPoster.PNG";

import "../../assets/stylesheets/Video.css";
import "../../assets/stylesheets/About.css";

class SellingUrKard extends Component {

    render(){

        return (
            <div className={'selling-container'} style={{minHeight: window.innerHeight}} >
                <h1 className={'title'}> Selling <strong style={{color: "#FE7F01"}}>urKard</strong> </h1>
                <VideoPlayer class={'distributorVideo'} poster={poster} src={video}/>
                <p className={'description'}>
                    If you are a distributor in the printing industry specializing in selling thermal image printers, or if you are printer with thermal image printers or any type of printer with a Microsoft office compatible driver, our <strong style={{color: "#FE7F01"}}>urKARD</strong> can print to your printer and you can utilize it to sell more printers, ribbon, etc.  Help your customers utilize the printers you sold them with a system that is user friendly.
                </p>
                <p className={'description'}>
                    <strong style={{color: "#FE7F01"}}>urKARD</strong> is sold to distributors with a demo program and is activated by ID templates.  Simply send us a  1013 x 638 png template and we can load it on <strong style={{color: "#FE7F01"}}>urKARD</strong> in less than a day and you can be printing cards in your office tomorrow.  <strong style={{color: "#FE7F01"}}>urKARD</strong> costs involve a set up fee and a per card charge.  <strong style={{color: "#FE7F01"}}>urKARD</strong> can also accept payment utilizing the internet Stripe payment program.  Contact <strong style={{color: "#FE7F01"}}>urkardapp@directimagecards.com</strong> for sales opportunities with <strong style={{color: "#FE7F01"}}>urKARD</strong>.
                </p>
            </div>
        )
    }
}

export default SellingUrKard;