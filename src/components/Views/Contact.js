import React, { Component} from "react";
import DownloadBrochureButton from "../Buttons/DownloadBrochureButton";
import axios from "axios";
import "../../assets/stylesheets/Contact.css";

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            subject: "",
            comments: "",
            userMessage: "Please contact us by either filling out the form below or emailing urkardapp@directimagecards.com"
        }
    }

    handleChange = (evt) => {
        let newState = {};
        newState[evt.target.name] = evt.target.value;
        this.setState(newState)
    };

    handleSubmit =  evt => {
        evt.preventDefault();

        this.setState({
            userMessage: "Thank You! Your message has been received!"
        });

        axios.post("/api/mail", this.state).then(res => res);

    };

    render(){

        return (
            <div style={{minHeight: window.innerHeight}}>
                <div className={'contact-container'}>
                    <p style={{
                        color: "#fff",
                        fontSize: '14px',
                        letterSpacing: 1.5,
                        textAlign: 'center'
                    }}>{this.state.userMessage}</p>
                    <div className={'contact-flex-box'}>
                        <div className={'contact-form-container'}>
                            <form className={'contact-form'} >
                                <input className={'contact-input'} placeholder="  YOUR EMAIL" name="email" onChange={this.handleChange}/>
                                <input className={'contact-input'} placeholder="  SUBJECT" name="subject" onChange={this.handleChange}/>
                                <textarea className={'contact-input contact-comments'} placeholder=" YOUR MESSAGE" name="comments" onChange={this.handleChange}/>
                                <input className={'contact-submit-btn'} type="submit" onClick={this.handleSubmit}/>
                            </form>
                        </div>
                        <div className={'contact-card-container'}>
                            <div >
                                <DownloadBrochureButton/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Contact;