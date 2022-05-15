import React, {useState} from 'react';
import UserCard from '../UserCard/UserCard';
import InterestSearchForm from '../InterestSearchForm/InterestSearchForm';
import UserProfile from '../UserProfile/UserProfile';

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
        <div>
            <InterestSearchForm filterInterests={filterInterests}/>
            {currentInterest ? filteredUsers : userCards} 
            <UserProfile />
        </div>
    )
}

export default Dashboard;