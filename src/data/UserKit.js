
const ROOT_URL = "https://frebi.willandskill.eu/"

export default class {

  async register(firstName, lastName, email, password, organisationName, organisationKind) {
    const url = `${ROOT_URL}auth/users/`
    const payload = {
      firstName,
      lastName,
      email,
      password,
      organisationName,
      organisationKind
    }

    return fetch(url, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(payload)
    })
  }

  getPublicHeaders() {
    return {
      "Content-Type": "application/json"
    }
  }

}