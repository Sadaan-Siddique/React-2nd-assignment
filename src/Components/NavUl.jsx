import React from 'react'
import NavDropdowns from './NavDropdowns'
function NavUl() {
    return (
        <>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 h5">
                <li className="nav-item ">
                    <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <NavDropdowns/>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled text-light" href="#" tabIndex="-1
                    " aria-disabled="true">Disabled</a>
                </li>
            </ul>
        </>
    )
}

export default NavUl