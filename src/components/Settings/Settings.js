import React, { useState } from 'react';

const Settings = () => {
  const [location, setLocation] = useState('')

  const updateLocation = (e) => {
    setLocation(e.target.value)
  }

  return(
    <div>
      <h1>Edit Your Profile</h1>
      <form>
        <label htmlFor='location'>Change location: </label>
        <input
          type='text'
          placeholder='Denver, CO'
          id='location'
          name='location'
          value={location}
          onChange={(e) => updateLocation(e)}
        />
      </form>
    </div>
  )
}

export default Settings;