import React, {useState, useEffect} from "react";

const InterestSearchForm = ({filterInterests}) => {
    const [interest, setInterest] = useState('')

    const selectInterest = (e) => {
        setInterest(e.target.value)
    }

    useEffect(() => {
        filterInterests(interest)
    }, [interest])


    return (
        <form>
            <select value={interest} onChange={(e) => selectInterest(e)}>
                <option value=''>Filter By Interest</option>
                <option value='sports'>Sports</option>
                <option value='nature'>Nature</option>
                <option value='music'>Music</option>
                <option value='night_life'>Night Life</option>
                <option value='art'>Art</option>
                <option value='cinema'>Cinema</option>
                <option value='food'>Food</option>
                <option value='gaming'>Gaming</option>
                <option value='traveling'>Traveling</option>
                <option value='networking'>Networking</option>
            </select>
        </form>
    )
}

export default InterestSearchForm;
