import React, { Component} from "react";
import NavButton from "../Buttons/NavButton";
import logo from "../../assets/images/logo.png";

import "../../assets/stylesheets/NavBar.css";
import DownloadAppButtons from "../Buttons/DownloadAppButtons";
import SocialMediaButtons from "../Content/SocialMediaButtons";
import FAQButton from "../Buttons/FAQButton";

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            active: false,
            clicked: false
        }
    }

    handleMenuClick = () => {
        this.setState({
            active: !this.state.active,
            clicked: true
        })
    };

    render(){
        const getHeight = width => {
            if (width > 2000) return '150px';
            if (width < 1000) return `${(window.innerHeight - 70)/5}px`;
            return '80px';
        };
        const height = getHeight(window.innerWidth);
        return (
            <div>
                <nav className={'nav-bar'}>
                    <img className={'logo'} src={logo} alt="logo"/>
                    <ul className= {this.state.active ? 'active' : this.state.clicked ? 'inactive' : ''}>
                        <li className={'nav-li'} style={{height: height}} onClick={this.handleMenuClick}>
                            <NavButton id={'btn-1'} text={'Home'} path={'/'} />
                        </li>
                        <li className={'nav-li'} style={{height: height}} onClick={this.handleMenuClick}>
                            <NavButton id={'btn-2'} text={'About'} path={'/About'}/>
                        </li>
                        <li className={'nav-li'} style={{height: height}}  onClick={this.handleMenuClick}>
                            <NavButton id={'btn-3'} text={'Services'} path={'/Services'}/>
                        </li>
                        <li className={'nav-li'} style={{height: height}}  onClick={this.handleMenuClick}>
                            <NavButton id={'btn-4'} text={'Music'} path={'/Music'}/>
                        </li>
                        <li className={'nav-li'} style={{height: height}}  onClick={this.handleMenuClick}>
                            <NavButton id={'btn-5'} text={'Contact'} path={'/Contact'}/>
                        </li>
                        <li className={'nav-li nav-download-btns'}>
                            <DownloadAppButtons/>
                            <SocialMediaButtons/>
                            <div className={'side-nav-faq'}>
                                <FAQButton link={'/FAQ'}/>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="responsive-bar">
                    <img className={'logo'} src={logo} alt="logo"/>
                    <div onClick={this.handleMenuClick} className={'burger-menu'}>
                        <div className={'menu ' + (this.state.active ? 'top-active': 'top')} />
                        <div className={'menu ' + (this.state.active ? 'middle-active': 'middle')} />
                        <div className={'menu ' + (this.state.active ? 'bottom-active': 'bottom')} />
                    </div>
                </div>
            </div>

        );
    }
}

export default NavBar;