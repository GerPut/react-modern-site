import React, { useEffect } from 'react';
import './brand.css';
import { google, slack, atlassian, dropbox, shopify } from './imports'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Brand = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="gpt3__brand section__padding">
            <div data-aos="flip-up">
                <img src={google} alt="google" />
            </div>
            <div data-aos="flip-up">
                <img src={slack} alt="slack" />
            </div>
            <div data-aos="flip-up">
                <img src={atlassian} alt="atlassian" />
            </div>
            <div data-aos="flip-up">
                <img src={dropbox} alt="dropbox" />
            </div>
            <div data-aos="flip-up">
                <img src={shopify} alt="shopify" />
            </div>
        </div>
    )
}

export default Brand