const apiCalls = {
  fetchUsers() {
    return fetch(`https://be-tribe.herokuapp.com/api/v1/users`)
      .then(response => response.json())
  },
  fetchOneUser(id) {
    return fetch(`https://be-tribe.herokuapp.com/api/v1/users/${id}`)
      .then(response => response.json())
  }
}

export default apiCalls;