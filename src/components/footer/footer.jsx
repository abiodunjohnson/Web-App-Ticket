import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <>
            <div classname="footer">
                <div className="footer__wrapper">
                <p className="footer__copy">Copyright 2019. Diver inc</p>

                <div className="footer__right">
                    <p className="footer__terms"> Terms &amp; Conditions</p>
                    <p className="footer__policy">Privacy Policy</p>
                </div>
                </div>
            </div>
        </>
    )
}

export default Footer
