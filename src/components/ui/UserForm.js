import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

function UserForm({id, user}) {

    let url = `${API_URL}api/user`;

    const nameRegex = /[a-zA-Z가-힣]{2,20}$/;
    const emailRegex = /^([a-z0-9+_.-]+)@([\da-z+-]+)\.([a-z\.]{2,6})$/;
    const navigate = useNavigate();

    const [message, setMessage] = useState('* 이메일 정보 중복 불가');
    const [userFormValue, setUserFormValue] = useState({
        id : '',
        userName : '',
        userEmail : '',
        userGender : '',
        userBirth : ''
    });

    const handleFormvalue = (e) => {
        const { name, value } = e.target;
        setUserFormValue({
            ...userFormValue,
            [name] : value
        });
    }

    const postUser = () => {
        if(!(nameRegex.test(userFormValue.userName))) {
            alert('이름 입력 정보를 확인해 주세요.');
        } else if(!(emailRegex.test(userFormValue.userEmail))) {
            alert('이메일 입력 정보를 확인해 주세요.');
        } else {
            axios.post(url, {
                ...userFormValue
            })
            .then(Response => {
                if(Response.data) {
                    setMessage(Response.data);
                } else {
                    console.log("save user");
                    alert('등록이 완료되었습니다.');
                    navigate('/list');
                }
            }).catch(Error => console.log(Error))
        }
    }

    const userFormSubmit = (e) => {
        e.preventDefault();
        // console.log(userFormValue);
        if(user) {
            url = `${API_URL}api/user/update/${id}`;
            postUser();
        } else {
            postUser();
        }
    }

    const delUserSubmit = () => {
        if(user) {
            if(window.confirm('정말 삭제하시겠습니까?')) {
                axios.delete(`${API_URL}api/user/del/${id}`)
                .then(console.log("delete"))
                .then(
                    navigate('/')
                )
                .catch(Error => console.log(Error))
            }
        }
    }

    useEffect(() => {
        if(user) {
            // console.log(user);
            setUserFormValue({
                userName : user.userName,
                userEmail : user.userEmail,
                userGender : user.userGender,
                userBirth : user.userBirth
            });
        }
    }, [user, url])
    
    if(user) {
        return ( 
            <form>
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">이 름</label>
                    <input type="text" minLength="2" maxLength="20" className="form-control" name="userName" onChange={handleFormvalue} value={userFormValue.userName || ''} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="userEmail" className="form-label">이메일</label>
                    <input type="email" className="form-control" name="userEmail" onChange={handleFormvalue} value={userFormValue.userEmail || ''} readOnly />
                </div>
                <div className="mb-3">
                    <label htmlFor="userGender" className="form-label">성 별</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="userGender" value="M" checked={userFormValue.userGender === "M" ? true : false} onChange={handleFormvalue} required />
                        <label className="form-check-label" htmlFor="userGender">남</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="userGender" value="F" checked={userFormValue.userGender === "F" ? true : false} onChange={handleFormvalue} />
                        <label className="form-check-label" htmlFor="userGender">여</label>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="userBirth" className="form-label">출생년도</label>
                    <input type="number" min="1900" max="2022" className="form-control" name="userBirth" value={userFormValue.userBirth || ''} onChange={handleFormvalue} required />
                </div>
                <button type="button" className="btn btn-dark me-3" onClick={userFormSubmit}>Edit</button>
                <button type="button" className="btn btn-secondary" onClick={delUserSubmit}>Delete</button>
            </form>
         );
    } else {
        return ( 
            <form onSubmit={userFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">이 름</label>
                    <input type="text" minLength="2" maxLength="20" className="form-control" name="userName" onChange={handleFormvalue} value={userFormValue.userName || ''} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="userEmail" className="form-label">이메일</label>
                    <input type="email" className="form-control" name="userEmail" onChange={handleFormvalue} value={userFormValue.userEmail || ''} required />
                    <div className="form-text">{message}</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="userGender" className="form-label">성 별</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="userGender" value="M" checked={userFormValue.userGender === "M" ? true : false} onChange={handleFormvalue} required />
                        <label className="form-check-label" htmlFor="userGender">남</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="userGender" value="F" checked={userFormValue.userGender === "F" ? true : false} onChange={handleFormvalue} />
                        <label className="form-check-label" htmlFor="userGender">여</label>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="userBirth" className="form-label">출생년도</label>
                    <input type="number" min="1900" max="2022" className="form-control" name="userBirth" value={userFormValue.userBirth || ''} onChange={handleFormvalue} required />
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
         );
    }
}

export default UserForm;