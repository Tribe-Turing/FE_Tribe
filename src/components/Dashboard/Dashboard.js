import React from 'react';
import UserCard from '../UserCard/UserCard';
import InterestSearchForm from '../InterestSearchForm/InterestSearchForm';

const Dashboard = ({users}) => { 
    const getUserDetails = () => {

    }
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
            <InterestSearchForm />
            {userCards}
        </div>
    )
}

export default Dashboard;