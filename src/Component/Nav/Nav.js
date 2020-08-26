import React from 'react';
import Logo from '../../imgs/ICON/Logo.png';
const Nav = () => {
    return (
        <div>
            <section className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a href="#" className="navbar-brand"><img src={Logo} alt=""/></a>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" href="#book">Books <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#courses">Courses</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#outhes">Outhes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#footer-area">Blog</a>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link button sign-in">Sign in</button>
                        </li>
                    </ul>
                    </div>
                </nav>
            </section>
        </div>
    );
};

export default Nav;