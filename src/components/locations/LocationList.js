import React, { Component } from 'react'
import "./Location.css"
export default class LocationList extends Component {
  render() {
    return (
      <section className="locations">
        {
          this.props.locations.map(location =>
            <div key={location.id} className="card list">
              {location.name}<br></br>
              {location.address}
            </div>
          )
        }
      </section>
    )
  }
}