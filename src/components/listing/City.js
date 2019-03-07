import React, { Component } from 'react'
import { Segment, Image, Divider } from 'semantic-ui-react'


export default class City extends Component {
  render() {

    return (
      <div>
        <Segment.Group>
          <Image src={"images/carousel1.jpg"} size='tiny' verticalAlign='middle' /> <span>San Francisco, CA</span>
          <Divider />
          <Image src={"images/carousel1.jpg"} size='tiny' verticalAlign='middle' /> <span>San Francisco, CA</span>
          <Divider />
          <Image src={"images/carousel1.jpg"} size='tiny' verticalAlign='middle' /> <span>San Francisco, CA</span>
          <Divider />
          <Image src={"images/carousel1.jpg"} size='tiny' verticalAlign='middle' /> <span>San Francisco, CA</span>
          <Divider />
          <Image src={"images/carousel1.jpg"} size='tiny' verticalAlign='middle' /> <span>San Francisco, CA</span>
          <Divider />
          <Image src={"images/carousel1.jpg"} size='tiny' verticalAlign='middle' /> <span>San Francisco, CA</span>
          <Divider />
        </Segment.Group>
      </div>
    )
  }
}
