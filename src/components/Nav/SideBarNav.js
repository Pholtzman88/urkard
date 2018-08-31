import React, { Component } from "react";

import SideBarNavButton from "../Buttons/SideBarNavButton";

import "../../assets/stylesheets/SideBarNav.css";
import "../../assets/stylesheets/Home.css";

class SideBarNav extends Component{
    constructor(props){
        super(props);
        this.state = {
            navBtns: []
        };
    }

    componentWillMount(){
        this.setState({
            navBtns: this.props.buttons || [],
            textStyles: this.props.textStyles || {}
        });
    }

    componentWillReceiveProps(props){
        this.setState(props);
    }

    render(){
        const navButtons = this.state.navBtns.map((button, i) => {
            return(
                    <SideBarNavButton
                        key={button.id}
                        id={button.id}
                        text={button.text}
                        index={i}
                        hover={button.hover}
                        selected={button.selected}
                        update={this.props.update}
                        svg={button.svg}
                    />
            );
        });

        return (
            <div className="container" >
                {navButtons}
            </div>
        )
    }
}

export default SideBarNav;