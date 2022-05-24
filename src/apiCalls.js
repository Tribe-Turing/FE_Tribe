const apiCalls = {
  fetchUsers() {
    return fetch(`https://be-tribe.herokuapp.com/api/v1/users`)
      .then(response => response.json())
  },
  
  fetchOneUser(id) {
    return fetch(`https://be-tribe.herokuapp.com/api/v1/users/${id}`)
      .then(response => response.json())
  },
  
  createConversation(data) {
    return fetch(`https://be-tribe.herokuapp.com/api/v1/conversations`, {
      method: "POST",
      headers: {"content-type":"application/json"},
      body: JSON.stringify(data)
    })
  },
  
  fetchConversations() {
    return fetch(`https://be-tribe.herokuapp.com/api/v1/conversations`)
      .then(response => response.json())
  },

  updateSettings(id, userSettings) {  
    const patch_params = {
      'id': id,
      'city': userSettings.city,
      'interests': userSettings.interests
    }
    
    return fetch(`https://be-tribe.herokuapp.com/api/v1/users/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(patch_params)
    })
  }
}

export default apiCalls;
