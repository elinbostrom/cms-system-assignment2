
const ROOT_URL = "https://frebi.willandskill.eu/"
const AUTH_URL = `${ROOT_URL}auth/`

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

  async activateUser(uid, code) {
    const url = `${AUTH_URL}users/activate/`
    const payload = {
      uid: uid,
      token: code
    }
    return fetch(url, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(payload)
    })
  }

  async login(email, password) {
    const url = `${ROOT_URL}api-token-auth/`
    const payload = {
      email,
      password
    }

    return fetch(url, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(payload)
    })
  }

  async fetchClients() {
    const url = `${ROOT_URL}api/v1/customers/`

    return fetch(url, {
      headers: this.getPrivateHeaders(),
    })
  }

  setToken(token) {
    localStorage.setItem("BUSINESS_TOKEN", token)
  }

  getToken() {
    return localStorage.getItem("BUSINESS_TOKEN")
  }

  getPublicHeaders() {
    return {
      "Content-Type": "application/json"
    }
  }

  getPrivateHeaders() {
    return {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.getToken()}`
    }
  }
}