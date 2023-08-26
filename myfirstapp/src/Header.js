import React from "react";
// import Imagesldr from "./Imagesldr";
import { Link } from 'react-router-dom';
export default function Header() {
    return (<>
        <div className="container">
            <div className="row" >
                <div className="col-2">
                    <Link to="/slider">
                        <img className="img-fluid m-1" id="dulogo" src="https://darshan.ac.in/Content/media/DU_Logo.svg" alt="" />
                    </Link>
                    
                </div>
                <div className="col-10" >
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to='./slider' className="nav-link active">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='./Faculty' className="nav-link active">Faculty</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/student">Student</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/textConverter">TextConverter</Link>
                                    </li>
                                </ul>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </>
    );
}