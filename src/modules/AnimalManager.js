import APIManager from "./APIManager"


class AnimalManager extends APIManager {
  getAnimal(id) {
    return this.get(id)
  }

  getAll() {
    return this.all()
  }
  removeAndList(id) {
    return this.delete(id)
      .then(() => this.all())
  }
  post(newAnimal) {
    return fetch(`http://localhost:5002/animals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
    }).then(data => data.json())
  }
}

export default new AnimalManager("animals")