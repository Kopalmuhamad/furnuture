import React from 'react'
import "./Home.scss"
import Hero from '../../components/hero/Hero'
import Guide from '../../components/guide/Guide'
import Features from '../../components/features/Features'
import Trends from '../../components/trends/Trends'

const Home = () => {
    return (
        <section className='home'>
            <Hero />
            <Guide />
            <Features />
            <Trends />
        </section>
    )
}

export default Home