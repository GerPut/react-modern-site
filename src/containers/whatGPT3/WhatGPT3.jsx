import React, { useEffect } from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

const WhatGPT3 = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
            </div>
            <div data-aos="fade-up" className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore the library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
                <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
                <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
            </div>
        </div>
    )
}

export default WhatGPT3
