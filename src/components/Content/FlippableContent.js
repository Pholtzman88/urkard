import React, { Component } from "react";

import "../../assets/stylesheets/FlippableCard.css";

class FlippableContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            active: false,
            front: this.props.front || false,
            back: this.props.back || false,
            frontText: this.props.frontText || "",
            backText: this.props.backText || "",
            height: this.props.height || '100%',
            flashing: this.props.flashing ? 'flash' : ''
        };
    }

    componentWillReceiveProps(props){
        this.setState(props)
    }

    toggle = () => {
        this.setState({
            active: !this.state.active
        })
    };

    render(){
        const style = {
            card: {
                width: "100%",
                height: this.state.height,
                display: "inline-block",
            },
            text: {
                color: "white",
                lineHeight: 1.25,
                fontSize: "18px",
                textAlign: 'center'
            }
        };

        const activeStyle = this.state.active ? 'flip' : '';
        const activeBtnText = this.state.active ? this.state.frontText : this.state.backText;

        return (
            <div className={`card-container ${this.state.flashing}`}>
                {/*<div onClick={this.toggle}>*/}
                <div className={`card ${activeStyle}`} style={style.card}>
                    <div className={`card-front`}>
                        {this.state.front}
                    </div>
                    <div className={`card-back`}>
                        {this.state.back}
                    </div>
                </div>
                    <h3 style={style.text}>
                        {activeBtnText}
                    </h3>
                {/*</div>*/}
            </div>
        );
    }
}

export default FlippableContent;