import React, { Component } from "react"


export default class Login extends Component {

  // Set initial state
  state = {
    email: "",
    password: "",
    remember: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleInputChange(evt) {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.checked
    this.setState(stateToChange)

  }

  // Simplistic handler for login submit
  handleLogin = (e) => {
    e.preventDefault()

    /*
        For now, just store the email and password that
        the customer enters into local storage.
    */
    if (this.state.remember) {
      localStorage.setItem(
        "credentials",
        JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      )
    } else {
      sessionStorage.setItem(
        "credentials",
        JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      )
    }
  }

  render() {
    return (
      <form onSubmit={this.handleLogin} className="list">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail">
          Email address
                </label>
        <input onChange={this.handleFieldChange} type="email"
          id="email"
          placeholder="Email address"
          required="" autoFocus="" />
        <label htmlFor="inputPassword">
          Password
                </label>
        <input onChange={this.handleFieldChange} type="password"
          id="password"
          placeholder="Password"
          required="" />
        <button type="submit">
          Sign in
                </button>
        <br />
        <label>
          Remember me
          <input onChange={this.handleFieldChange} type="checkbox"
            id="remember"
            placeholder="remember"
            required=""
          />
        </label>
      </form>
    )
  }
}