import React, { Component } from 'react'
import { Segment, SegmentGroup } from 'semantic-ui-react'

export default class City extends Component {

  render() {

    let style = {
      color: 'black',
      cursor: 'pointer',
    }
    /* eslint-disable */
    return (
      <SegmentGroup>
        {/* on click we call function from app.js and pass in the city._id to send it back to app.ja*/}

        <a onClick={(() => { this.props.setCityId(this.props.city._id) })} >
          <Segment style={style}>
            <h2>{this.props.city.name}</h2>
          </Segment>
        </a>
      </SegmentGroup>
    )
  }
}
