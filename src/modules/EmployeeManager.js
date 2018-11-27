import APIManager from "./APIManager"
class EmployeeManager extends APIManager {
  getEmployee(id) {
    return this.get(id)
  }

  getAll() {
    return this.all()
  }
  removeAndList(id) {
    return this.delete(id)
      .then(() => this.all())
  }
  post(newEmployee) {
    return fetch(`http://localhost:5002/employees`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEmployee)
    }).then(data => data.json())
  }
}

export default new EmployeeManager("employees")