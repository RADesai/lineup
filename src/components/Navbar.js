import React from 'react'
import '../assets/scss/Navbar.scss'

const Navbar = () =>
    <nav className="navbar navbar-toggleable-md navbar-light">
        <div className="app-title">Lineup</div>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Manager</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Scoreboard</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
            </ul>
        </div>
    </nav>

export default Navbar