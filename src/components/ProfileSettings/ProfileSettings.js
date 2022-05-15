import React, { useState } from 'react';

const ProfileSettings = () => {
  const [location, setLocation] = useState('')
  const [pronoun, setPronoun] = useState('')
  const [bio, setBio] = useState('')
  const [interests, setInterests] = useState({
    sports: false,
    nature: false,
    music: false,
    night_life: false,
    art: false,
    cinema: false,
    food: false,
    video_game: false,
    traveling: false,
    networking: false
  })
  
  const updateLocation = (e) => {
    setLocation(e.target.value)
  }

  const updatePronoun = (e) => {
    setPronoun(e.target.value)
  }

  const updateBio = (e) => {
    setBio(e.target.value)
  }

  const updateInterests = (e) => {
    if (e.target.checked) {
      setInterests({...interests, [e.target.value]: true})
    } else {
      setInterests({ ...interests, [e.target.value]: false })
    }
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

        <p>Would you like to update your interests?</p>
        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='sports'
          onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Sports</label>

        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='nature'
          onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Nature</label>

        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='music'
          onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Music</label>

        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='night_life'
          onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Night Life</label>

        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='art'
          onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Art</label>

        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='cinema'
          onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Cinema</label>

        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='food'
          onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Food</label>

        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='video_games'
          onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Video Games</label>

        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='traveling'
          onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Traveling</label>

        <input
          type='checkbox'
          id='interests'
          name='interests'
          value='networking'
          onChange={(e) => updateInterests(e)}
        />
        <label htmlFor='interests'>Networking</label>

        <label htmlFor='bio'>Bio: </label>
        <input
          type='text'
          placeholder='What do you want to bring to tribe?'
          id='bio'
          name='bio'
          value={bio}
          onChange={(e) => updateBio(e)}
        />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default ProfileSettings;