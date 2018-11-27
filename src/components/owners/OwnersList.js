import React, { Component } from 'react'
import "./Owner.css"
import { Link } from "react-router-dom";
export default class OwnersList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="ownerButton">
          <button type="button" className="btn btn-success" onClick={() => {
            this.props.history.push("/owners/new")
          }}>
            Admit Owner
        </button>
        </div>
        <section className="owners">
          {
            this.props.owners.map(owner =>
              <div key={owner.id} className="card list">
                <div className="card-body">
                  <h5 className="card-title">
                    {owner.name}<br></br>
                    {owner.phoneNumber}
                    <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                    <a href="#"
                      onClick={() => this.props.deleteOwner(owner.id)}
                      className="card-link">Delete</a>
                  </h5>
                </div>
              </div>
            )
          }
        </section>
      </React.Fragment>
    )
  }
}
