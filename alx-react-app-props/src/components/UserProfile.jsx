import React, { useContext } from 'react';

const UserProfile = (props) => {
    const UserContext = useContext(UserContext); // Using useContext with UserContext

    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
            <p>UserContext Value: {UserContext}</p> {/* Displaying UserContext value */}
        </div>
    );
};

export default UserProfile;
