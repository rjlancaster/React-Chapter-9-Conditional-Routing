import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalsList'
import LocationList from './locations/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'
import AnimalManager from '../modules/AnimalManager'
import EmployeeManager from '../modules/EmployeeManager'
import LocationManager from '../modules/LocationManager'
import OwnerManager from '../modules/OwnerManager'
export default class ApplicationViews extends Component {
  state = {
    employees: [],
    locations: [],
    animals: [],
    owners: []
  }

  componentDidMount() {

    AnimalManager.getAll().then(allAnimals => {
      this.setState({
        animals: allAnimals
      })
    })
    EmployeeManager.getAll().then(allEmployees => {
      this.setState({
        employees: allEmployees
      })
    })
    LocationManager.getAll().then(allLocations => {
      this.setState({
        locations: allLocations
      })
    })
    OwnerManager.getAll().then(allOwners => {
      this.setState({
        owners: allOwners
      })
    })
  }
  deleteAnimal = id => {
    return fetch(`http://localhost:5002/animals/${id}`, {
      method: "DELETE"
    })
      .then(e => e.json())
      .then(() => fetch(`http://localhost:5002/animals`))
      .then(e => e.json())
      .then(animals => this.setState({
        animals: animals
      })
      )
  }

  deleteEmployee = id => {
    return fetch(`http://localhost:5002/employees/${id}`, {
      method: "DELETE"
    })
      .then(e => e.json())
      .then(() => fetch(`http://localhost:5002/employees`))
      .then(e => e.json())
      .then(employees => this.setState({
        employees: employees
      })
      )
  }

  deleteOwner = id => {
    return fetch(`http://localhost:5002/owners/${id}`, {
      method: "DELETE"
    })
      .then(e => e.json())
      .then(() => fetch(`http://localhost:5002/owners`))
      .then(e => e.json())
      .then(owners => this.setState({
        owners: owners
      })
      )
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnersList deleteOwner={this.deleteOwner} owners={this.state.owners} />
        }} />
      </React.Fragment>
    )
  }
}
