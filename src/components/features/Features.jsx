import React from 'react'
import "./Features.scss"

const Features = () => {
    return (
        <section className='features'>
            <div className="header-features">
                <h1>Discover Our Stylish Furniture Collection</h1>
                <p>Experience the perfect blend of functionality and elegance with our minimalist home furniture. Each piece is carefully crafted to enhance your living space and create a serene ambiance.</p>
            </div>
            <div className="feature-image">
                <img src={require('../../assets/image/sofa1.png')} alt="" />
            </div>
            <div className="features-description">
                <div className="box-description">
                    <h3>Quality Craftsmanship</h3>
                    <p>Our furniture is made using the finest materials and showcases impeccable attention to detail.</p>
                </div>
                <div className="box-description">
                    <h3>Timeless Design</h3>
                    <p>Elevate your home decor with our timeless furniture designs that never go out of style.</p>
                </div>
            </div>
        </section>
    )
}

export default Features