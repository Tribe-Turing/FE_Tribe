import React, { useState } from 'react';

const ProfileSettings = ({ loggedInUser }) => {
  const [profileSettings, setProfileSettings] = useState({
    bio: loggedInUser.bio,
    city: loggedInUser.city,
    pronouns: loggedInUser.pronouns,
    interests: loggedInUser.interests,
  })

  const updateProfileSettings = (e) => {
    setProfileSettings(profileSettings => ({
      ...profileSettings, [e.target.name]: e.target.value
    }))
  }

  const updateInterests = (e) => {
    let updatedInterests
    if (e.target.checked) { 
      updatedInterests = [...profileSettings.interests, e.target.value]
    } else {
      const removedIndex = profileSettings.interests.indexOf(e.target.value)
      updatedInterests = [
        ...profileSettings.interests.slice(0, removedIndex),
        ...profileSettings.interests.slice(removedIndex + 1)
      ]
    }
    console.log(updatedInterests)
    setProfileSettings(profileSettings => ({
      ...profileSettings, [e.target.name]: updatedInterests
    }))
  }

  const submitSettings = (e) => {
    e.preventDefault()
  }

  return(
    <div>
      <h1>Edit Your Profile</h1>
      <form onSubmit={submitSettings}>
        <label htmlFor='city'>Location: </label>
        <input
          type='text'
          placeholder='Denver, CO'
          id='city'
          name='city'
          value={profileSettings.city}
          onChange={(e) => updateProfileSettings(e)}
        />

        <label htmlFor='bio'>Bio: </label>
        <input
          type='text'
          placeholder='What do you want to bring to tribe?'
          id='bio'
          name='bio'
          value={profileSettings.bio}
          onChange={(e) => updateProfileSettings(e)}
        />

        <p>Would you like to update your pronouns?</p>
        <input
          type='radio'
          id='pronouns'
          name='pronouns'
          value='she/her'
          checked={profileSettings.pronouns === 'she/her' ? true : false}
          onChange={(e) => updateProfileSettings(e)}
        />
        <label htmlFor='pronouns'>she/her</label>

        <input
          type='radio'
          id='pronouns'
          name='pronouns'
          value='he/him'
          checked={profileSettings.pronouns === 'he/him' ? true : false}
          onChange={(e) => updateProfileSettings(e)}
        />
        <label htmlFor='pronouns'>he/him</label>

        <input
          type='radio'
          id='pronouns'
          name='pronouns'
          value='they/them'
          checked={profileSettings.pronouns === 'they/them' ? true : false}
          onChange={(e) => updateProfileSettings(e)}
        />
        <label htmlFor='pronouns'>they/them</label>

        <input
          type='radio'
          id='pronouns'
          name='pronouns'
          value='ze/zie'
          checked={profileSettings.pronouns === 'ze/zie' ? true : false}
          onChange={(e) => updateProfileSettings(e)}
        />
        <label htmlFor='pronouns'>ze/zie</label>

        <input
          type='radio'
          id='pronouns'
          name='pronouns'
          value='name'
          checked={profileSettings.pronouns === 'name' ? true : false}
          onChange={(e) => updateProfileSettings(e)}
        />
        <label htmlFor='pronouns'>name</label>

        <p>Would you like to update your interests?</p>
        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='sports'
          checked={profileSettings.interests.includes('sports') ? true : false}
          onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Sports</label>

        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='nature'
          checked={profileSettings.interests.includes('nature') ? true : false}
          onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Nature</label>

        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='music'
          checked={profileSettings.interests.includes('music') ? true : false}
          onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Music</label>

        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='nightlife'
          checked={profileSettings.interests.includes('nightlife') ? true : false}
          onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Night Life</label>

        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='art'
          checked={profileSettings.interests.includes('art') ? true : false}
          onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Art</label>

        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='cinema'
          checked={profileSettings.interests.includes('cinema') ? true : false}
          onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Cinema</label>

        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='food'
          checked={profileSettings.interests.includes('food') ? true : false}
          onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Food</label>

        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='gaming'
          checked={profileSettings.interests.includes('gaming') ? true : false}
          onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Gaming</label>

        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='traveling'
          checked={profileSettings.interests.includes('traveling') ? true : false}
          onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Traveling</label>

        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='networking'
          checked={profileSettings.interests.includes('networking') ? true : false}
          onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Networking</label>

        <button className='submit-button'>Submit</button>
      </form>
    </div>
  )
}

export default ProfileSettings;