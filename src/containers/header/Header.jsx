import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home" >
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Let's Build Something Amazing with GPT-3 OpenAI</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quo hic. Nulla, molestias tenetur, veniam, qui accusantium iure quis architecto similique iste suscipit facilis neque ipsa ea perferendis voluptas itaque perspiciatis fugiat sapiente asperiores ipsam magnam tempora consectetur. Nostrum, iure.</p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Get Started</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={people} alt={people} />
                    <p>2000 people requested access in the last 24 hours</p>
                </div>
                <div className="gpt3__header-image">
                    <img src={ai} alt="ai" />
                </div>
            </div>
        </div>
    )
}

export default Header
