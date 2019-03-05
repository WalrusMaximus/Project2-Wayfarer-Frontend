import React, { Component } from 'react';
import About from './About';
import Carousel from './Carousel';
import './landing.css'

class Landing extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <About />
                {/* <SignInModal /> */}
            </div>
        );
    }
}

export default Landing;
