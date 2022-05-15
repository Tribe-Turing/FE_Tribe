import React from 'react';

const Message = ({image, username, id, message}) => {
    return (
        <div className='message' key={id}>
            <img src={image}/>
            <p> message </p>
        </div>
    )
}

export default Message;