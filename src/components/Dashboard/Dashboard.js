import React from 'react';
import UserCard from '../UserCard/UserCard';
import InterestSearchForm from '../InterestSearchForm/InterestSearchForm';

const Dashboard = ({users}) => { 
    const userCards = users.map(user => {
        return(
            <UserCard 
                image={user.image}
                id={user.id}
                key={user.id}
                username={user.username}
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