import React, { useState } from 'react';

const ProfileSettings = ({ loggedInUser }) => {
  const [profileSettings, setProfileSettings] = useState({
    bio: loggedInUser.bio,
    city: loggedInUser.city,
    pronouns: loggedInUser.pronouns,
    interests: loggedInUser.interests,
    selectedInterests: [],
  })

  const updateProfileSettings = (e) => {
    setProfileSettings(profileSettings => ({
      ...profileSettings, [e.target.name]: e.target.value
    }))

    if(e.target.name === 'pronouns') {

    }
  }

  // const [location, setLocation] = useState('')
  // const [pronoun, setPronoun] = useState('')
  // const [bio, setBio] = useState('')
  // const [selectedInterests, setSelectedInterests] = useState([])
  // const [interests, setInterests] = useState({
  //   sports: false,
  //   nature: false,
  //   music: false,
  //   night_life: false,
  //   art: false,
  //   cinema: false,
  //   food: false,
  //   video_game: false,
  //   traveling: false,
  //   networking: false
  // })
  
  // const updateLocation = (e) => {
  //   setLocation(e.target.value)
  // }

  // const updatePronoun = (e) => {
  //   setPronoun(e.target.value)
  // }

  // const updateBio = (e) => {
  //   setBio(e.target.value)
  // }

  // const updateInterests = (e) => {
  //   if (e.target.checked) {
  //     setInterests({...interests, [e.target.value]: true})
  //     setSelectedInterests([...selectedInterests, e.target.value])
  //   } else {
  //     setInterests({ ...interests, [e.target.value]: false })
  //     const removedIndex = selectedInterests.indexOf(e.target.value)
  //     setSelectedInterests([
  //       ...selectedInterests.slice(0, removedIndex),
  //       ...selectedInterests.slice(removedIndex + 1)
  //     ])
  //   }
  // }

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
          // onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Sports</label>

        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='nature'
          // onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Nature</label>

        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='music'
          // onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Music</label>

        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='night_life'
          // onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Night Life</label>

        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='art'
          // onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Art</label>

        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='cinema'
          // onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Cinema</label>

        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='food'
          // onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Food</label>

        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='video_games'
          // onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Video Games</label>

        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='traveling'
          // onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Traveling</label>

        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='networking'
          // onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Networking</label>

        <button className='submit-button'>Submit</button>
      </form>
    </div>
  )
}

export default ProfileSettings;