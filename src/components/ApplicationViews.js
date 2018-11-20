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
import APIManager from '../modules/APIManager'
import AnimalDetail from './animals/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import OwnerDetail from './owners/OwnerDetail'
export default class ApplicationViews extends Component {
  state = {
    employees: [],
    locations: [],
    animals: [],
    owners: []
  }

  componentDidMount() {
    const newState = {}

    AnimalManager.getAll().then(allAnimals => {
      newState.animals = allAnimals
    })
    EmployeeManager.getAll().then(allEmployees => {
      newState.employees = allEmployees
    })
    LocationManager.getAll().then(allLocations => {
      newState.locations = allLocations
    })
    OwnerManager.getAll().then(allOwners => {
      newState.owners = allOwners
    })
      .then(() => {
        this.setState(newState)
      })
  }

  deleteAnimal = (id) => {
    return AnimalManager.removeAndList(id)
      .then(animals => this.setState({
        animals: animals
      })
      )
  }
  deleteEmployee = (id) => {
    return EmployeeManager.removeAndList(id)
      .then(employees => this.setState({
        employees: employees
      })
      )
  }
  deleteOwner = (id) => {
    return OwnerManager.removeAndList(id)
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
        <Route exact path="/animals" render={(props) => {
          return <AnimalList animals={this.state.animals} />
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
        }} />
        <Route exact path="/employees" render={(props) => {
          return <EmployeeList employees={this.state.employees} />
        }} />
        <Route path="/employees/:employeeId(\d+)" render={(props) => {
          return <EmployeeDetail {...props} deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
        }} />
        <Route exact path="/owners" render={(props) => {
          return <OwnersList deleteOwner={this.deleteOwner} owners={this.state.owners} />
        }} />
        <Route path="/owners/:ownerId(\d+)" render={(props) => {
          return <OwnerDetail {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />
        }} />
      </React.Fragment>
    )
  }
}
