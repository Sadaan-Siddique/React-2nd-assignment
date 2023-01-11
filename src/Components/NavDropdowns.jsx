import React from 'react'

function NavDropdowns() {
    return (
        <>
            <a className="nav-link dropdown-toggle text-light" rel="noreferrer" href="https://github.com/Sadaan-Siddique/React-2nd-assignment" target={'_blank'} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" rel="noreferrer" href="https://github.com/Sadaan-Siddique/React-2nd-assignment" target={'_blank'}>Action</a></li>
                <li><a className="dropdown-item" rel="noreferrer" href="https://github.com/Sadaan-Siddique/React-2nd-assignment" target={'_blank'}>Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" rel="noreferrer" href="https://github.com/Sadaan-Siddique/React-2nd-assignment" target={'_blank'}>Something else here</a></li>
            </ul>
        </>
    )
}

export default NavDropdowns