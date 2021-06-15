import React from 'react'
import './section-one.scss'
import pp from '../../pp.png'

export default function SectionOne() {
    return (
        <div className='section'>
            <div className="heading">
            <span>01_</span>
            <h3>About me</h3>
            <div className="line"></div>
            </div>
            <div className="story">
                <div className="left">
                    <p>
                    Hello there! i’m Justice and i’m a self-taught software developer based in the Eastrand, South Africa.
                    </p>
                    <p>
                    I love building the web, solving problems and finding new and improved ways to do things on the internet. I am looking for a front-end development job that will
                    challenge me and give me room to increase my knowledge and skills as a developer.
                    </p>
                    <p>
                    Here are some of the technologies I work with so far:
                    </p>
                    <div className="skills">
                        <div className="left">
                            <ul>
                                <li>HTML & CSS</li>
                                <li>React</li>
                                <li>Node</li>
                            </ul>
                        </div>
                        <div className="right">
                            <ul>
                                <li>Javascript</li>
                                <li>SCSS</li>
                                <li>TypeScript</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img className='pp'/>
                </div>
            </div>
        </div>
    )
}
