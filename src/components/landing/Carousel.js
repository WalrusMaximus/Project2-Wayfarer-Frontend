import React from "react";
import Slider from "react-slick";
import { Grid, Image, Segment } from 'semantic-ui-react'
class carousel extends React.Component {
  render() {
    let settings = {
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000
    };
    return (
        <Slider {...settings}>
          <div className="carouselWrapper">
            <Image src='/images/carousel1.jpg' size='huge' />
          </div>
          <div className="carouselWrapper">  
            <Image src='/images/carousel2.jpg' size='huge' />
          </div>
          <div className="carouselWrapper">
            <Image src='/images/carousel3.jpg' size='huge' />
          </div>
        </Slider>
    );
  }
}

export default carousel;