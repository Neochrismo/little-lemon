import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer-logo">
                <img src="/logo.svg" alt="Little Lemon Logo" className="footer-logo-image" />
                </section>
                <nav className="footer-nav">
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>
                <section className="footer-social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/littlelemon" target="_blank" rel="noopener noreferrer">
                            <img src="/facebook-icon.svg" alt="Facebook" className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com/littlelemon" target="_blank" rel="noopener noreferrer">
                            <img src="/instagram-icon.svg" alt="Instagram" className="social-icon" />
                        </a>
                        <a href="https://www.twitter.com/littlelemon" target="_blank" rel="noopener noreferrer">
                            <img src="/twitter-icon.svg" alt="Twitter" className="social-icon" />
                        </a>
                    </div>
                </section>

            <p>&copy; 2025 Little Lemon. All rights reserved.</p>
        </footer>
    );
}

export default Footer;