import React from 'react'
import '../../assets/css/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'


const header = () => {
    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <span className="text-capitalize">
                        <Link className="navbar-brand mb-0 align-items-center" to="/home">
                            Admin Panel </Link>
                    </span>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll"
                        aria-controls="navbarScroll"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <div className="nav-button ml-auto d-flex">
                            <button className="call-now-button ">
                                <FontAwesomeIcon icon={faRightToBracket} className="mx-2" />
                                 <Link to="/login" >Login</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header >
    )
}

export default header;