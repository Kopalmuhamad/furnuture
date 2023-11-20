import React from 'react'
import "./Trial.scss"
import { imageData } from "../../libs/data"

const Trial = () => {
    return (
        <section className='trial'>
            <div className="trial-container">
                <header className="trial-header">
                    <h1>Discover New Design Trends</h1>
                    <p>Stay updated with the latest in home furniture design.</p>
                </header>
                <div className="trial-cards">
                    {imageData.slice(0, 3).map((items) => {
                        return (
                            <div className="card">
                                <img src={items.path} alt="" />
                                <p className='category'>Design</p>
                                <h3 className='title'>10 Minimalist Furniture Pieces for Small Spaces</h3>
                                <p className='description'>Create a stylish and functional living space with these minimalist furniture pieces.</p>
                                <p className='sign-artist'>Design @Furniture</p>
                            </div>
                        )
                    })}
                </div>
                <button className='button-view-all'>View All</button>
            </div>
        </section>
    )
}

export default Trial