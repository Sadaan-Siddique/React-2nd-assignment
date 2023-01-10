import React from 'react'
import NavDropdowns from './NavDropdowns'
function NavUl() {
    return (
        <>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 h6">
                <li className="nav-item ">
                    <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="https://www.amazon.com/" target={'_blank'}>Products</a>
                </li>
                <li className="nav-item dropdown">
                    <NavDropdowns/>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled text-light" href="#" tabIndex="-1
                    " aria-disabled="true">Footer</a>
                </li>
            </ul>
        </>
    )
}

export default NavUl