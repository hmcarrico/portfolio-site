import React from 'react';
import './ProfilePhoto.css';

function ProfilePhoto(){
    return (
        <div className="profilePhoto">
            <div className="profilePhoto__photo">
                <img src="https://media.licdn.com/dms/image/C5603AQHJSPiHw8SZKg/profile-displayphoto-shrink_200_200/0?e=1567036800&v=beta&t=409hEoFWsSw8JWrj75ehEIUOf25DuvfwxIywp7PuDBA" />
            </div>
            <h2>Full Stack Web Developer</h2>
            <h1>Hunter Carrico</h1>
        </div>
    )
}

export default ProfilePhoto;