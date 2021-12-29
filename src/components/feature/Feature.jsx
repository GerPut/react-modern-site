import React, { useEffect } from 'react';
import './feature.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Feature = ({ text, title }) => {
    useEffect(() => {
        Aos.init({ duration: 600 })
    }, [])
    return (
        <div className="gpt3__features-container__feature">
            <div data-aos="fade-up" className="gpt3__features-container__feature-title">
                <div />
                <h1>{title}</h1>
            </div>
            <div data-aos="fade-up" className="gpt3__features-container_feature-text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature