import React from 'react'
import './section-two.scss'
import pp from '../../pp.png'

export default function SectionTwo() {
    return (
        <div className='section'>
            <div className="heading">
            <span>02_</span>
            <h3>My work</h3>
            <div className="line"></div>
            </div>
            <div className='project reverse'>
                <div className='description'>
                    <p className='paragraph'>
                    Hello there! i’m Justice and i’m a self-taught software developer based in the Eastrand, South Africa.

                    I love building the web, solving problems and finding new and improved ways to do things on the internet. I am looking for a front-end development job that will challenge me and give me room to increase my knowledge and skills as a developer.
                    </p>
                </div>
                <div className='display'>
                    <div className='image'>
                        {/* <img src={pp}/> */}
                    </div>

                </div>
            </div>
        </div>
    )
}
