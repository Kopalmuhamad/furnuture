import React from 'react'
import "./Guide.scss"
import Button from '../../utils/button/Button'

const Guide = () => {
    return (
        <section className='guide'>
            <div className="header-guide">
                <h1>Discover the Simplicity of Shopping for Home Furniture</h1>
            </div>
            <div className="cards">
                <div className="card">
                    <img src={require('../../assets/image/art-paint1.png')} alt="" />
                    <h3>Find the Perfect Furniture for Your Home</h3>
                    <p>Browse through our wide selection of high-quality home furniture.</p>
                    <Button>Shop Now</Button>
                </div>
                <div className="card">
                    <img src={require('../../assets/image/art-paint1.png')} alt="" />
                    <h3>Find the Perfect Furniture for Your Home</h3>
                    <p>Browse through our wide selection of high-quality home furniture.</p>
                    <Button>Shop Now</Button>
                </div>
                <div className="card">
                    <img src={require('../../assets/image/art-paint1.png')} alt="" />
                    <h3>Find the Perfect Furniture for Your Home</h3>
                    <p>Browse through our wide selection of high-quality home furniture.</p>
                    <Button>Shop Now</Button>
                </div>
            </div>
        </section>
    )
}

export default Guide