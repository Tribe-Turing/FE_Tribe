import React, { useState } from 'react';
import interestIcons from '../../interestIcons';
import './ProfileSettings.css'

const ProfileSettings = () => {
  const [location, setLocation] = useState('')
  const [pronoun, setPronoun] = useState('')
  const [bio, setBio] = useState('')
  const [selectedInterests, setSelectedInterests] = useState([])
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
      setSelectedInterests([...selectedInterests, e.target.value])
    } else {
      setInterests({ ...interests, [e.target.value]: false })
      const removedIndex = selectedInterests.indexOf(e.target.value)
      setSelectedInterests([
        ...selectedInterests.slice(0, removedIndex),
        ...selectedInterests.slice(removedIndex + 1)
      ])
    }
  }

  const submitSettings = (e) => {
    e.preventDefault()
  }

  return(
    <div className='settings'>
      <h1>Edit Your Profile</h1>
      <form className='settings-form' onSubmit={submitSettings}>
        <div>
          <label htmlFor='location'>Change location: </label>
          <input
            type='text'
            placeholder='Denver, CO'
            id='location'
            name='location'
            value={location}
            onChange={(e) => updateLocation(e)}
          />
        </div>
        <div className='pronoun-container'>
          <p>Would you like to update your pronouns?</p>
          <div className='pronouns'>
            <div className='pronoun-radio'>
              <input
                type='radio'
                id='pronoun'
                name='pronoun'
                value='she/her'
                onChange={(e) => updatePronoun(e)}
              />
              <label htmlFor='pronoun'>she/her</label>
            </div>
            <div className='pronoun-radio'>
              <input
                type='radio'
                id='pronoun'
                name='pronoun'
                value='he/him'
                onChange={(e) => updatePronoun(e)}
              />
              <label htmlFor='pronoun'>he/him</label>
            </div>
            <div className='pronoun-radio'>
              <input
                type='radio'
                id='pronoun'
                name='pronoun'
                value='they/them'
                onChange={(e) => updatePronoun(e)}
              />
              <label htmlFor='pronoun'>they/them</label>
            </div>
            <div className='pronoun-radio'>
              <input
                type='radio'
                id='pronoun'
                name='pronoun'
                value='ze/zie'
                onChange={(e) => updatePronoun(e)}
              />
              <label htmlFor='pronoun'>ze/zie</label>
            </div>
            <div className='pronoun-radio'>
              <input
                type='radio'
                id='pronoun'
                name='pronoun'
                value='name'
                onChange={(e) => updatePronoun(e)}
              />
              <label htmlFor='pronoun'>name</label>
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
          value={bio}
          onChange={(e) => updateBio(e)}
          />
        </div>
        <p>Would you like to update your interests?</p>
        <div className='interests-form'>
          <div className='interest-container'>
            <input type='checkbox' id='sports' name='interests' value='sports' onChange={(e) => updateInterests(e)}/>
            <label htmlFor='sports' className='interests'>
              <img src={interestIcons.sports} width="75" height="75" className="sports"/>
              <p>Sports</p>
            </label>
          </div>
          <div className='interest-container'>
            <input type='checkbox' id='nature' name='interests' value='nature' onChange={(e) => updateInterests(e)}/>
            <label htmlFor='nature' className='interests'>
              <img src={interestIcons.nature} width="75" height="75" className="nature"/>
              <p>Nature</p>
            </label>
          </div>
          <div className='interest-container'>
            <input type='checkbox' id='music' name='interests' value='music' onChange={(e) => updateInterests(e)}/>
            <label htmlFor='music' className='interests'>
              <img src={interestIcons.music} width="75" height="75" className="music"/>
              <p>Music</p>
            </label>
          </div>
          <div className='interest-container'>
            <input type='checkbox' id='nightlife' name='interests' value='night_life' onChange={(e) => updateInterests(e)}/>
            <label htmlFor='nightlife' className='interests'>
              <img src={interestIcons.nightlife} width="75" height="75" className="nightlife"/>
              <p>Night Life</p>
            </label>
          </div>
          <div className='interest-container'>
            <input type='checkbox' id='art' name='interests' value='art' onChange={(e) => updateInterests(e)}/>
            <label htmlFor='art' className='interests'>
              <img src={interestIcons.art} width="75" height="75" className="art"/>
              <p>Art</p>
            </label>
          </div>
          <div className='interest-container'>
            <input type='checkbox' id='cinema' name='interests' value='cinema' onChange={(e) => updateInterests(e)}/>
            <label htmlFor='cinema' className='interests'>
              <img src={interestIcons.cinema} width="75" height="75" className="cinema"/>
              <p>Cinema</p>
            </label>
          </div>
          <div className='interest-container'>
            <input type='checkbox' id='food' name='interests' value='food' onChange={(e) => updateInterests(e)}/>
            <label htmlFor='food' className='interests'>
              <img src={interestIcons.food} width="75" height="75" className="food"/>
              <p>Food</p>
            </label>
          </div>
          <div className='interest-container'>
            <input type='checkbox' id='videogames' name='interests' value='video_games' onChange={(e) => updateInterests(e)}/>
            <label htmlFor='videogames' className='interests'>
              <img src={interestIcons.videogames} width="75" height="75" className="videogames"/>
              <p>Gaming</p>
            </label>
          </div>
          <div className='interest-container'>
            <input type='checkbox' id='traveling' name='interests' value='traveling' onChange={(e) => updateInterests(e)}/>
            <label htmlFor='traveling' className='interests'>
              <img src={interestIcons.travel} width="75" height="75" className="travel"/>
              <p>Traveling</p>
            </label>
          </div>
          <div className='interest-container'>
            <input type='checkbox' id='networking' name='interests' value='networking' onChange={(e) => updateInterests(e)}/>
            <label htmlFor='networking' className='interests'>
              <img src={interestIcons.networking} width="75" height="75" className="networking"/>
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
