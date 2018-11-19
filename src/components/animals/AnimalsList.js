import React, { Component } from 'react'

export default class AnimalsList extends Component {
  render() {
    return (
      <section className="animals list">
        {
          this.props.animals.map(animal =>
            <div key={animal.id}>
              {animal.name}
            </div>
          )
        }
      </section>
    )
  }
}
