import React from 'react';

const Friends = (props) => {
    const {name , email } = props.fr 
    return (
        <div>
            <h1>name : {name}</h1>
            <h1><small>email:{email}</small></h1>
        </div>
    );
};

export default Friends;