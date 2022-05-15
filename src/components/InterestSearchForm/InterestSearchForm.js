import React, {useState} from "react";

const InterestSearchForm = () => {
    const [interest, setInterest] = useState('test')

    const selectInterest = (e) => {
        setInterest(e.target.value)
    }


    return (
        <form>
            <select value={interest} onChange={(e) => selectInterest(e)}>
                <option value='sports'>Sports</option>
                <option value='nature'>Nature</option>
                <option value='music'>Music</option>
                <option value='night_life'>Night Life</option>
                <option value='art'>Art</option>
                <option value='cinema'>Cinema</option>
                <option value='food'>Food</option>
                <option value='video_games'>Video Games</option>
                <option value='traveling'>Traveling</option>
                <option value='networking'>Networking</option>
            </select>
        </form>
    )
}

export default InterestSearchForm;