import React from 'react'
import './menuBtn.scss'

export default function MenuBtn({handleClick}) {

    return (
        <div className='menu' onClick={handleClick}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
