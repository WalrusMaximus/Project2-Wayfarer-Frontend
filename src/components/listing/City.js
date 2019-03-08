import React, { Component } from 'react'
import { Segment, Image, Divider, SegmentGroup } from 'semantic-ui-react'


export default class City extends Component {
  render() {
<<<<<<< HEAD

    return (
      <div>

        <SegmentGroup >

        </SegmentGroup>

        {/* <Segment.Group>
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
        </Segment.Group> */}
      </div>
    )
=======
    let style = {
      color: "pink",
      background: "black"
    }
  return (
    <SegmentGroup style={style}>
      <a  onClick={()=>{console.log(`clicked ${this.props.city.name}`)}}>
      <Segment style={style}>
            <h1>{this.props.city.name}</h1>
          </Segment>
      </a>
          
        </SegmentGroup>
  )
>>>>>>> 842dac02d078b444471055203c38d9ad3b0d291c
  }
  
}
