import React from 'react'
import "./Hero.scss"
import Button from '../../utils/button/Button'

const Hero = () => {
    return (
        <section className='hero'>
            <h1>Transform your home with minimalist furniture</h1>
            <p>Discover a curated collection of stylish and functional furniture for your home.</p>
            <div className="box-button">
                <Button>Shop Now</Button>
                <Button>Explore</Button>
            </div>
        </section>
    )
}

export default Hero