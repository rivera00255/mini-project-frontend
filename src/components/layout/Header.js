import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return ( 
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link to='/user' className="nav-link">고객 등록</Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/list' className="nav-link">고객 목록</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
     );
}

export default Header;