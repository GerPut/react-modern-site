import React, { useEffect } from 'react';
import { Feature } from '../../components';
import './features.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

const featuresData = [
    {
        title: 'Improving end distrust instantly',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, consequuntur voluptatem! Esse reprehenderit cumque, at temporibus ex fugit error labore illo possimus natus, aut vitae?"
    },
    {
        title: 'Become the tended active',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, consequuntur voluptatem! Esse reprehenderit cumque, at temporibus ex fugit error labore illo possimus natus, aut vitae?"
    },
    {
        title: 'Message or am nothing',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, consequuntur voluptatem! Esse reprehenderit cumque, at temporibus ex fugit error labore illo possimus natus, aut vitae?"
    },
    {
        title: 'Really boy law county',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, consequuntur voluptatem! Esse reprehenderit cumque, at temporibus ex fugit error labore illo possimus natus, aut vitae?"
    },
]

const Features = () => {
    useEffect(() => {
        Aos.init({ duration: 600 })
    }, [])
    return (
        <div className="gpt3__features section__padding" id="features">
            <div data-aos="fade-right" className="gpt3__features-heading">
                <h1 className="gradient__text">The Future is Now and you just need to realize it. Step into the Future Today & make it Happen.</h1>
                <p>Request early access</p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Features
