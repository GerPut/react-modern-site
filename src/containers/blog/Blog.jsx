import React, { useEffect } from 'react';
import './blog.css';
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import { Article } from '../../components'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Blog = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 data-aos="fade-right" className='gradient__text'>A lot is happening, We are blogging about it</h1>
            </div>
            <div className="gpt3__blog-container">
                <div data-aos="fade-up" className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog01} date="26 Sept 2021" title="GPT-3 and Open AI is the future. Let us explore." />
                </div>
                <div data-aos="fade-up" className="gpt3__blog-container_groupB">
                    <Article imgUrl={blog02} date="26 Sept 2021" title="GPT-3 and Open AI is the future. Let us explore." />
                    <Article imgUrl={blog03} date="26 Sept 2021" title="GPT-3 and Open AI is the future. Let us explore." />
                    <Article imgUrl={blog04} date="26 Sept 2021" title="GPT-3 and Open AI is the future. Let us explore." />
                    <Article imgUrl={blog05} date="26 Sept 2021" title="GPT-3 and Open AI is the future. Let us explore." />
                </div>
            </div>
        </div>
    )
}

export default Blog
