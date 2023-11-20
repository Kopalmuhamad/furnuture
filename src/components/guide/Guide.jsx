import React from 'react'
import "./Guide.scss"
import { imageData } from "../../libs/data"

const Guide = () => {
    return (
        <section className='guide'>
            <div className="guide-container">
                <div className="guide-header">
                    <h1>Discover the Simplicity of Shopping for Home Furniture</h1>
                </div>
                <div className="card">
                    {imageData.slice(0, 3).map((items) => {
                        return (
                            <div key={items.id} className="cards">
                                <img src={items.path} alt="" />
                                <h3>Find the Perfect Furniture for Your Home</h3>
                                <p>Browse through our wide selection of high-quality home furniture.</p>
                                <button>Shop Now</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Guide