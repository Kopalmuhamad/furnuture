import React from 'react'
import "./Footer.scss"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-container">
                <h3 className='footer-title'>Fu<span>rnu</span>ture</h3>
                <div className="footer-box-menu">
                    <div className="footer-menu">
                        <h3>About <span>US</span></h3>
                        <a href="#">Shop</a>
                        <a href="#">FAQ</a>
                        <a href="#">Contact</a>
                        <a href="#">Returns</a>
                        <a href="#">Shipping</a>
                    </div>
                    <div className="footer-menu">
                        <h3>Customer <span>Support</span></h3>
                        <a href="#">Track Order</a>
                        <a href="#">Account</a>
                        <a href="#">Wishlist</a>
                        <a href="#">Blog</a>
                        <a href="#">Terms</a>
                    </div>
                    <div className="footer-menu">
                        <h3>Privacy</h3>
                        <a href="#">Careers</a>
                        <a href="#">Affiliates</a>
                        <a href="#">Sustainability</a>
                        <a href="#">Press</a>
                        <a href="#">Partnerships</a>
                    </div>
                    <form className="email">
                        <h3>Subscribe</h3>
                        <p>Join our community to receive exclusive offers and updates.</p>
                        <input type="text" placeholder='Email : ' className='email-input' />
                        <button className='button-send-email'>Subscribe</button>
                    </form>
                    <div className="copyright">
                        <p>By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
                        <hr />
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms Of Service</a>
                        <a href="#">Cookie Settings</a>
                        <p className='copyright'>© 2023 Minimalist Furniture All right reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer