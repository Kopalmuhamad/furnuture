import React from 'react'
import "./Home.scss"
import Hero from '../../components/hero/Hero'
import Guide from '../../components/guide/Guide'
import Features from '../../components/features/Features'
import Trial from '../../components/trial/Trial'

const Home = () => {
    return (
        <section className='home'>
            <Hero />
            <Guide />
            <Features />
            <Trial />
        </section>
    )
}

export default Home