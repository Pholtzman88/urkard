import React, { Component } from "react";

import "../../assets/stylesheets/SideBarNav.css";

class SideBarNavButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            text: '',
            fill: false,
            selected: false,
            order: 0,
            svg: this.props.svg || 'no svg file found'
        };
    }

    componentWillMount(){
        this.setState({
            id: this.props.id || '',
            text: this.props.text || '',
            fill: this.props.fill || false,
            selected: this.props.selected || false,
            index: this.props.index || 0
        })
    }

    handleClick = () => {
        const pos = (window.innerHeight) * this.state.index;

        window.scroll( window.scroll({
            top: pos,
            left: 0,
            behavior: 'smooth'
        }));

        this.props.update({
            id: this.state.id,
            text: this.state.text,
            hover: this.state.hover,
            selected: this.state.selected,
            index: this.state.index
        });

    };

    handleMouseEnter = () => this.setState({hover: true});

    handleMouseLeave = () => this.setState({hover: false});

    render(){

        const handleTextColor = hover => hover ? "#FE7F01" : "#ffffff";

        return (
            <div className="aboutLink" onClick={this.handleClick} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                {this.state.svg}
                <h2 className="text" style={{color: handleTextColor(this.state.hover)}}  id={this.state.id}>{this.state.text}</h2>
            </div>
        )
    }
}

export default SideBarNavButton;