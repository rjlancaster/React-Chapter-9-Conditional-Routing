import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalsList'
import LocationList from './locations/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'

class ApplicationViews extends Component {

  employeesFromAPI = [
    {
      id: 1,
      name: "Jessica Younker"
    },
    {
      id: 2,
      name: "Jordan Nelson"
    },
    {
      id: 3,
      name: "Zoe LeBlanc"
    },
    {
      id: 4,
      name: "Blaise Roberts"
    }
  ]
  locationsFromAPI = [
    {
      id: 1,
      name: "Nashville East",
      address: "1015 McClurkin Ave"
    },
    {
      id: 2,
      name: "Nashville South",
      address: "300 Elberta Street"
    }
  ]

  animalsFromAPI = [
    {
      id: 1,
      name: "Dogs"
    },
    {
      id: 2,
      name: "Cats"
    },
    {
      id: 3,
      name: "Iguanas"
    },
    {
      id: 4,
      name: "Hamsters"
    },
    {
      id: 5,
      name: "Rabbits"
    }
  ]

  ownersFromAPI = [
    {
      id: 1,
      name: "Ryan Tanay",
      phoneNumber: "615-111-1111"
    },
    {
      id: 2,
      name: "Emma Beaton",
      phoneNumber: "615-222-2222"
    },
    {
      id: 3,
      name: "Dani Adkins",
      phoneNumber: "615-333-3333"
    },
    {
      id: 4,
      name: "Adam Oswalt",
      phoneNumber: "615-444-4444"
    }
  ]

  state = {
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI,
    owners: this.ownersFromAPI
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList animals={this.state.animals} />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList employees={this.state.employees} />
        }} />
         <Route path="/owners" render={(props) => {
          return <OwnersList owners={this.state.owners} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews