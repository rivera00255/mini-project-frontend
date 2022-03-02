import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserForm from '../ui/UserForm';

function Edit() {

    const {id} = useParams();

    const getUrl = `http://localhost:8080/api/user/${id}`;

    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        axios.get(getUrl)
        .then(Response => {
            // console.log(Response.data);
            setUserInfo(Response.data);
        }).catch(Error => console.log(Error))
    }, [])

    return ( 
        <div className='edit'>
            <div className='container'>
                <div className='userForm-wrapper'>
                    <h2 className='page-title'>수정</h2>
                    <UserForm id={id} user={userInfo} />
                </div>
            </div>
        </div>
     );
}

export default Edit;