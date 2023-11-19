import React from 'react'
import "./Toggle.scss"

const Toggle = ({ onClick }) => {
    return (
        <div className='toggle' onClick={onClick}>
            <div className='toggle-line'></div>
            <div className='toggle-line'></div>
            <div className='toggle-line'></div>
        </div>
    )
}

export default Toggle