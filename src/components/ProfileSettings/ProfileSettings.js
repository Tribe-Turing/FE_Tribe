import React, { useState, useEffect } from 'react';
import interestIcons from '../../interestIcons';
import './ProfileSettings.css';
import loadingSpinner from '../../assets/loadingSpinner.gif';

const ProfileSettings = ({ loggedInUser, addSettings }) => {
  const [isLoading, setLoading] = useState(true);
  const [profileSettings, setProfileSettings] = useState({
    bio: loggedInUser.bio,
    city: loggedInUser.city,
    pronouns: loggedInUser.pronouns,
    interests: loggedInUser.interests,
  })

  useEffect(() => {
    if(loggedInUser.id) {
      console.log(loggedInUser)
      setProfileSettings({
        bio: loggedInUser.bio,
        city: loggedInUser.city,
        pronouns: loggedInUser.pronouns,
        interests: loggedInUser.interests,
      })
      setLoading(false)
    }
  }, [loggedInUser])

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
    setProfileSettings(profileSettings => ({
      ...profileSettings, [e.target.name]: updatedInterests
    }))
  }

  const submitSettings = (e) => {
    e.preventDefault()
    addSettings(profileSettings)
  }

  return(
    isLoading ? <div className="loading-spinner"><img src={loadingSpinner}/></div> :
    <div className='settings'>
      <h1>Edit Your Profile</h1>
        <form className='settings-form' onSubmit={submitSettings}>
        <div>
          <label htmlFor='city'>Location: </label>
          <input
            type='text'
            placeholder='Denver, CO'
            id='city'
            name='city'
            value={profileSettings.city}
            onChange={(e) => updateProfileSettings(e)}
          />
        </div>
        <div className='pronoun-container'>
          <p>Would you like to update your pronouns?</p>
          <div className='pronouns'>
            <div className='pronoun-radio'>
              <input
                aria-label='she/her pronouns'
                type='radio'
                id='pronouns'
                name='pronouns'
                value='she/her'
                checked={profileSettings.pronouns === 'she/her' ? true : false}
                onChange={(e) => updateProfileSettings(e)}
              />
              <label htmlFor='she/her pronouns'>she/her</label>
            </div>
            <div className='pronoun-radio'>
              <input
                aria-label='he/him pronouns'
                type='radio'
                id='he/him pronouns'
                name='pronouns'
                value='he/him'
                checked={profileSettings.pronouns === 'he/him' ? true : false}
                onChange={(e) => updateProfileSettings(e)}
              />
              <label htmlFor='pronouns'>he/him</label>
            </div>
            <div className='pronoun-radio'>
              <input
                aria-label='they/them pronouns'
                type='radio'
                id='they/them pronouns'
                name='pronouns'
                value='they/them'
                checked={profileSettings.pronouns === 'they/them' ? true : false}
                onChange={(e) => updateProfileSettings(e)}
              />
              <label htmlFor='they/them pronouns'>they/them</label>
            </div>
            <div className='pronoun-radio'>
              <input
                aria-label='ze/zie pronouns'
                type='radio'
                id='ze/zie pronouns'
                name='pronouns'
                value='ze/zie'
                checked={profileSettings.pronouns === 'ze/zie' ? true : false}
                onChange={(e) => updateProfileSettings(e)}
              />
              <label htmlFor='ze/zie pronouns'>ze/zie</label>
            </div>
            <div className='pronoun-radio'>
              <input
                aria-label='use your name without pronouns'
                type='radio'
                id='no pronouns'
                name='pronouns'
                value='name'
                checked={profileSettings.pronouns === 'name' ? true : false}
                onChange={(e) => updateProfileSettings(e)}
              />
              <label htmlFor='no pronouns'>name</label>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor='bio'>Bio: </label>
          <textarea
          type='text'
          placeholder='What do you want to bring to tribe?'
          id='bio'
          name='bio'
          value={profileSettings.bio}
          onChange={(e) => updateProfileSettings(e)}
        />
        </div>
        <p>Would you like to update your interests?</p>
        <div className='interests-form'>
          <div className='interest-container'>
            <input
              type='checkbox'
              id='sports'
              name='interests'
              value='sports'
              checked={profileSettings.interests.includes('sports') ? true : false}
              onChange={(e) => updateInterests(e)}
            />
            <label htmlFor='sports' className='interests'>
              <img src={interestIcons.sports} width="75" height="75" className="sports" alt="Sports Interest Toggle Button"/>
              <p>Sports</p>
            </label>
          </div>
          <div className='interest-container'>
            <input
              type='checkbox'
              id='nature'
              name='interests'
              value='nature'
              checked={profileSettings.interests.includes('nature') ? true : false}
              onChange={(e) => updateInterests(e)}
            />
            <label htmlFor='nature' className='interests'>
              <img src={interestIcons.nature} width="75" height="75" className="nature" alt="Nature Interest Toggle Button"/>
              <p>Nature</p>
            </label>
          </div>
          <div className='interest-container'>
            <input
              type='checkbox'
              id='music'
              name='interests'
              value='music'
              checked={profileSettings.interests.includes('music') ? true : false}
              onChange={(e) => updateInterests(e)}
            />
            <label htmlFor='music' className='interests'>
              <img src={interestIcons.music} width="75" height="75" className="music" alt="Music Interest Toggle Button"/>
              <p>Music</p>
            </label>
          </div>
          <div className='interest-container'>
            <input
              type='checkbox'
              id='nightlife'
              name='interests'
              value='nightlife'
              checked={profileSettings.interests.includes('nightlife') ? true : false}
              onChange={(e) => updateInterests(e)}/>
            <label htmlFor='nightlife' className='interests'>
              <img src={interestIcons.nightlife} width="75" height="75" className="nightlife" alt="Night Life Interest Toggle Button"/>
              <p>Night Life</p>
            </label>
          </div>
          <div className='interest-container'>
            <input
              type='checkbox'
              id='art'
              name='interests'
              value='art'
              checked={profileSettings.interests.includes('art') ? true : false}
              onChange={(e) => updateInterests(e)}
            />
            <label htmlFor='art' className='interests'>
              <img src={interestIcons.art} width="75" height="75" className="art" alt="Art Interest Toggle Button"/>
              <p>Art</p>
            </label>
          </div>
          <div className='interest-container'>
            <input
              type='checkbox'
              id='cinema'
              name='interests'
              value='cinema'
              checked={profileSettings.interests.includes('cinema') ? true : false}
              onChange={(e) => updateInterests(e)}
            />
            <label htmlFor='cinema' className='interests'>
              <img src={interestIcons.cinema} width="75" height="75" className="cinema" alt="Cinema Interest Toggle Button"/>
              <p>Cinema</p>
            </label>
          </div>
          <div className='interest-container'>
            <input
              type='checkbox'
              id='food'
              name='interests'
              value='food'
              checked={profileSettings.interests.includes('food') ? true : false}
              onChange={(e) => updateInterests(e)}
            />
            <label htmlFor='food' className='interests'>
              <img src={interestIcons.food} width="75" height="75" className="food" alt="Food Interest Toggle Button"/>
              <p>Food</p>
            </label>
          </div>
          <div className='interest-container'>
            <input
              type='checkbox'
              id='gaming'
              name='interests'
              value='gaming'
              checked={profileSettings.interests.includes('gaming') ? true : false}
              onChange={(e) => updateInterests(e)}
            />
            <label htmlFor='gaming' className='interests'>
              <img src={interestIcons.videogames} width="75" height="75" className="videogames" alt="Video Games Interest Toggle Button"/>
              <p>Gaming</p>
            </label>
          </div>
          <div className='interest-container'>
            <input
              type='checkbox'
              id='traveling'
              name='interests'
              value='traveling'
              checked={profileSettings.interests.includes('traveling') ? true : false}
              onChange={(e) => updateInterests(e)}
            />
            <label htmlFor='traveling' className='interests'>
              <img src={interestIcons.travel} width="75" height="75" className="travel" alt="Travel Interest Toggle Button"/>
              <p>Traveling</p>
            </label>
          </div>
          <div className='interest-container'>
            <input
              type='checkbox'
              id='networking'
              name='interests'
              value='networking'
              checked={profileSettings.interests.includes('networking') ? true : false}
              onChange={(e) => updateInterests(e)}
            />
            <label htmlFor='networking' className='interests'>
              <img src={interestIcons.networking} width="75" height="75" className="networking" alt="Networking Interest Toggle Button"/>
              <p>Networking</p>
            </label>
          </div>
        </div>
        <button className='submit-button'>Save Changes</button>
      </form>
    </div>
  )
}

export default ProfileSettings;
