import React, {useState} from 'react'
import './navbar.scss'
import logo from '../../logo.svg'
import MenuBtn from '../menuBtn/MenuBtn'

export default function Navbar() {

    const [navOpen, setNavOpen] = useState(false)
    
    
    function handleClick(){
        if(!navOpen){
            setNavOpen(true)
        }else{
            setNavOpen(false)
        }
    }
    
    return (
        <div className='navbar'> 
            <div className="container">
                <div className="logo">
                    <a href='http://localhost:3000/'><img src={logo} alt='logo'/></a>
                </div>
                <div className='nav'>
                    <MenuBtn handleClick={handleClick}/>
                    <ul className={navOpen ? 'opened' : ''}>
                        <li><a href="#"><span>01_ </span>About</a></li>
                        <li><a href="#"><span>02_ </span>My work</a></li>
                        <li><a href="#"><span>03_ </span>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
