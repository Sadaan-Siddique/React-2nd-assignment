import React from 'react'
import '../App.css';
import NavUl from './NavUl'
import NavBtn from './NavBtn'
import NavForm from './NavForm'
export const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="nav-div container-fluid">
                    <a className="a navbar-brand text-light " href="#">Products</a>
                    <NavBtn/>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <NavUl/>
                        <NavForm/>
                    </div>
                </div>
            </nav>


        </>
    )
}
