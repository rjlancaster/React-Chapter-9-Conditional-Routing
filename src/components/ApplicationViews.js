import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalsList'
import LocationList from './locations/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'
import AnimalManager from '../modules/AnimalManager'
import EmployeeManager from '../modules/EmployeeManager'
import LocationManager from '../modules/LocationManager'
import OwnerManager from '../modules/OwnerManager'
import AnimalDetail from './animals/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import OwnerDetail from './owners/OwnerDetail'
import AnimalForm from './animals/AnimalForm'
import EmployeeForm from './employee/EmployeeForm'
import OwnerForm from './owners/OwnerForm'
import Login from './Authentication/Login'
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

  // Check if credentials are in session or local storage
  isAuthenticated = () => sessionStorage.getItem("credentials") || localStorage.getItem("credentials") !== null

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
  addAnimal = (animal) => AnimalManager.post(animal)
    .then(() => AnimalManager.getAll())
    .then(animals => this.setState({
      animals: animals
    })
    )

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route path="/login" component={Login} />
        <Route exact path="/animals" render={(props) => {
          if (this.isAuthenticated()) {
            return <AnimalList {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
        }} />
        <Route exact path="/employees" render={(props) => {
          if (this.isAuthenticated()) {
            return <EmployeeList {...props} employees={this.state.employees} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/employees/:employeeId(\d+)" render={(props) => {
          return <EmployeeDetail {...props} deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
        }} />
        <Route exact path="/owners" render={(props) => {
          if (this.isAuthenticated()) {
            return <OwnersList {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/owners/:ownerId(\d+)" render={(props) => {
          return <OwnerDetail {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />
        }} />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props}
            addAnimal={this.addAnimal}
            employees={this.state.employees} />
        }} />
        <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props}
            addEmployee={this.addEmployee} />
        }} />
        <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props}
            addOwner={this.addOwner} />
        }} />

      </React.Fragment>
    )
  }
}
