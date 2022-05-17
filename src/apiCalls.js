const apiCalls = {
  fetchUsers() {
    return fetch(`https://localhost:4000/api/v1/users`)
      .then(response => response.json())
  }
}

export default apiCalls;