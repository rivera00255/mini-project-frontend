import React from 'react';
import { Link } from 'react-router-dom';

function UserCard({user}) {
    return ( 
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{user.id}. <strong>{user.userName}</strong></h5>
                <h6 className="card-subtitle mb-2 text-muted">{user.userEmail}</h6>
                <p className="card-text">출생년도 : {user.userBirth}</p>
                <p className="card-text">성 별 : {user.userGender == "M" ? "남" : user.userGender == "F" ? "여" : null}</p>
                <Link to={`/user/${user.id}`} className="card-link">Edit →</Link>
            </div>
        </div>
     );
}

export default UserCard;