import React from 'react'
import "./Features.scss"
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { imageData } from "../../libs/data"

const Features = () => {
    return (
        <section className='features'>
            <div className="features-container">
                <div className="features-header">
                    <h1>Discover Our Stylish Furniture Collection</h1>
                </div>
                <p className='single-description'>
                    Experience the perfect blend of functionality and elegance with our minimalist home furniture. Each piece is carefully crafted to enhance your living space and create a serene ambiance.
                </p>
                <div className="features-box-description">
                    <div className="features-description">
                        <h3>Quality Craftsmanship</h3>
                        <p>Our furniture is made using the finest materials and showcases impeccable attention to detail.</p>
                    </div>
                    <div className="features-description">
                        <h3>Timeless Design</h3>
                        <p>Elevate your home decor with our timeless furniture designs that never go out of style.</p>
                    </div>
                </div>
                <div className="features-box-button">
                    <button>Shop Now</button>
                    <button>For More <ArrowRight size={16} /></button>
                </div>
                <div className='features-image'>
                    {imageData.slice(0, 3).map((items) => {
                        return (
                            <img src={items.path} alt="" />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Features