import React, { Component } from 'react';
import About from './About';
import Carousel from './Carousel';
import SignIn from '../SignIn'
import './landing.css'

class Landing extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <About />
            </div>
        );
    }
}

export default Landing;
