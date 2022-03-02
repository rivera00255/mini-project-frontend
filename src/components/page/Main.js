import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
    return ( 
        <div className='main'>
            <div className='container'>
                <nav className='main-nav mt-5'>
                    <ul>
                        <li className='m-3'>
                            <Link to='/user' className="btn btn-dark btn-lg" role="button">고객 등록하기 →</Link>
                        </li>
                        <li className='m-3'>
                            <Link to='/list' className="btn btn-dark btn-lg" role="button">고객 목록보기 →</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
     );
}

export default Main;