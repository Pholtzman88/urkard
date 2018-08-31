import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Home from "./components/Views/Home";
import Services from "./components/Views/Services";
import Music from "./components/Views/Music";
import About from "./components/Views/About";
import Contact from "./components/Views/Contact";
import FAQ from "./components/Views/FAQ";

import NavBar from "./components/Nav/Navbar";
import Footer from "./components/Footer/Footer";

import './assets/stylesheets/Reset.css';
import './assets/stylesheets/Style.css';
import './assets/stylesheets/NavBar.css';
import registerServiceWorker from './registerServiceWorker';
import MusicFAQ from "./components/Views/MusicFAQ";

ReactDOM.render(
    <Router>
        <div>
            <NavBar/>
            <div className='buffer' />
            <div className="viewport">
                <div className="main">
                    <Route exact path = "/" component = {Home}/>
                    <Route path="/services" component={Services}/>
                    <Route path="/music" component={Music} />
                    <Route path="/About" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path={"/FAQ"} component={FAQ} />
                    <Route path={"/MusicFAQ"} component={MusicFAQ} />
                </div>
            </div>
            <Footer className="footer"/>
        </div>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();