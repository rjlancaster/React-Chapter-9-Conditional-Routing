import React, { Component } from "react"
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./locations/LocationList"
import AnimalsList from "./animals/AnimalsList"
import "./Kennel.css"

class Kennel extends Component {

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

  state = {
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI
  }
  render() {
    return (
      <article className="kennel">
        <LocationList locations={this.state.locations} />
        <EmployeeList employees={this.state.employees} />
        <AnimalsList animals={this.state.animals} />
      </article>
    )
  }
}

export default Kennel