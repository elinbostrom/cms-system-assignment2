
const ROOT_URL = "https://frebi.willandskill.eu/"
const AUTH_URL = `${ROOT_URL}auth/`
const CUSTOMER_URL = `${ROOT_URL}api/v1/customers`

export default class {

  async register(data) {
    const url = `${ROOT_URL}auth/users/`
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      organisationName: data.organisationName,
      organisationKind: data.organisationKind
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

  async login(data) {
    const url = `${ROOT_URL}api-token-auth/`
    const payload = {
      email: data.email,
      password: data.password
    }

    return fetch(url, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(payload)
    })
  }

  async fetchCustomers() {
    const url = CUSTOMER_URL

    return fetch(url, {
      headers: this.getPrivateHeaders(),
    })
  }

  async createCustomer(payload) {
    const url = CUSTOMER_URL

    return fetch(url, {
      method: "POST",
      headers: this.getPrivateHeaders(),
      body: JSON.stringify(payload)
    })
  }

  async editCustomer(data, customerId) {
    const url = `${ROOT_URL}api/v1/customers/${customerId}/`

    return fetch(url, {
      method: "PATCH",
      headers: this.getPrivateHeaders(),
      body: JSON.stringify(data)
    })
  }

  async getActiveUser() {
    const url = `${ROOT_URL}api/v1/me`

    return fetch(url, {
      headers: this.getPrivateHeaders()
    })
  }

  async customerDetail(customerId) {
    const url = `${ROOT_URL}api/v1/customers/${customerId}/`

    return fetch(url, {
      headers: this.getPrivateHeaders()
    })
  }

  async deleteCustomer(customerId) {
    const url = `${ROOT_URL}/api/v1/customers/${customerId}/`

    return fetch(url, {
      method: "DELETE",
      headers: this.getPrivateHeaders()
    })
  }

  setToken(token) {
    localStorage.setItem("BUSINESS_TOKEN", token)
  }

  getToken() {
    return localStorage.getItem("BUSINESS_TOKEN")
  }

  deleteToken() {
    localStorage.removeItem("BUSINESS_TOKEN")
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