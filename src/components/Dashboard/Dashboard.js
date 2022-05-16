import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import UserCard from '../UserCard/UserCard';
import InterestSearchForm from '../InterestSearchForm/InterestSearchForm';
import UserProfile from '../UserProfile/UserProfile';
import './Dashboard.css'

const Dashboard = ({users}) => {
    const [currentInterest, setCurrentInterest] = useState('')
    const filterInterests = (interest) => {
        setCurrentInterest(interest)
    }
    const filteredUsers = users.filter(user => {
        return user.interests.includes(currentInterest)
    }).map(user => {
        return(
            <UserCard
                id={user.id}
                key={user.id}
                username={user.first_name}
            />)
    })
    const userCards = users.map(user => {
        return(
            <UserCard
                id={user.id}
                key={user.id}
                username={user.first_name}
            />)
    })
    return (
        <div className='dashboard'>
            // <Route exact path='/' render={() => {
            //     return (
                    // <>
                    <InterestSearchForm filterInterests={filterInterests}/>
                    <div className='card-container'>
                        {currentInterest ? filteredUsers : userCards}
                    </div>
                    // </>
                // )
            // }} />
        </div>
    )
}

export default Dashboard;
