import React, { useEffect } from 'react';
import './cta.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

const CTA = () => {
    useEffect(() => {
        Aos.init({ duration: 500 })
    }, [])
    return (
        <div data-aos="zoom-in" className="gpt3__cta">
            <div className="gpt3__cta-content">
                <p>Request Early Access</p>
                <h3>Register Today and Explore the endless possibilities</h3>
            </div>
            <div className="gpt3__cta-btn">
                <button type="button">Get Started</button>
            </div>
        </div>
    )
}

export default CTA