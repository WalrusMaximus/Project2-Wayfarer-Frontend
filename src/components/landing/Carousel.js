import React from "react";
import Slider from "react-slick";
import { Grid, Image, Segment } from 'semantic-ui-react'
class carousel extends React.Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <Image src='/images/carousel1.jpg' />    
            <Image src='/images/carousel2.jpg' />
            <Image src='/images/carousel3.jpg' />
            <Image src='/images/carousel1.jpg' />
            <Image src='/images/carousel2.jpg' />
            <Image src='/images/carousel3.jpg' />
        </Slider>
    );
  }
}

export default carousel;