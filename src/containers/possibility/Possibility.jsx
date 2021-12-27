import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={possibilityImage} alt="possibility" />
            </div>
            <div className="gpt3__possibility-content">
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__text">The possiblities are <br /> beyond your imagination</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, corrupti labore eaque temporibus odio sit placeat vero iure consequatur reiciendis nisi possimus corporis impedit atque asperiores omnis officiis earum doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nesciunt, repudiandae quam ratione quas laboriosam. Deleniti, quibusdam? Voluptas, obcaecati suscipit?</p>
                <h4>Request Early Access To Get Started</h4>
            </div>
        </div>
    )
}

export default Possibility
