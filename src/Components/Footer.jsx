import React from 'react'
import FooterDiv from './FooterDiv'
import FooterUl from './FooterUl'
function Footer() {
    return (
        <>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <FooterDiv />
                <FooterUl />


            </footer>
        </>
    )
}

export default Footer