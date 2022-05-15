import React, { useState } from 'react';

const ProfileSettings = () => {
  const [location, setLocation] = useState('')
  const [pronoun, setPronoun] = useState('')
  
  const updateLocation = (e) => {
    setLocation(e.target.value)
  }

  const updatePronoun = (e) => {
    setPronoun(e.target.value)
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

        <p>Would you like to update your pronouns?</p>
        <input
          type='radio'
          id='pronoun'
          name='pronoun'
          value='she/her'
          onChange={(e) => updatePronoun(e)}
        />
        <label htmlFor='pronoun'>she/her</label>

        <input
          type='radio'
          id='pronoun'
          name='pronoun'
          value='he/him'
          onChange={(e) => updatePronoun(e)}
        />
        <label htmlFor='pronoun'>he/him</label>

        <input
          type='radio'
          id='pronoun'
          name='pronoun'
          value='they/them'
          onChange={(e) => updatePronoun(e)}
        />
        <label htmlFor='pronoun'>they/them</label>

        <input
          type='radio'
          id='pronoun'
          name='pronoun'
          value='ze/zie'
          onChange={(e) => updatePronoun(e)}
        />
        <label htmlFor='pronoun'>ze/zie</label>

        <input
          type='radio'
          id='pronoun'
          name='pronoun'
          value='name'
          onChange={(e) => updatePronoun(e)}
        />
        <label htmlFor='pronoun'>name</label>

        
      </form>
    </div>
  )
}

export default ProfileSettings;