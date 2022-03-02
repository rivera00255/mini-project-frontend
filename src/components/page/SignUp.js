import React from 'react';
import UserForm from '../ui/UserForm';

function SignUp() {
    return ( 
        <div className='signUp'>
            <div className='container'>
                <div className='userForm-wrapper'>
                    <h2 className='page-title'>등록</h2>
                    <UserForm />
                </div>
            </div>
        </div>
     );
}

export default SignUp;