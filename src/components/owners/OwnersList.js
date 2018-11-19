import React, { Component } from 'react'

export default class OwnersList extends Component {
  render() {
    return (
      <section className="owners list">
        {
          this.props.owners.map(owner =>
            <div key={owner.id}>
              {owner.name}<br></br>
              {owner.phoneNumber}
            </div>
          )
        }
      </section>
    )
  }
}
