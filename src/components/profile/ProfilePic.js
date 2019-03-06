import React, { Component } from 'react'
import { Image } from 'semantic-ui-react';

export default class ProfilePic extends Component {
  render() {
    return (
      <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='medium' circular />
    )
  }
}
