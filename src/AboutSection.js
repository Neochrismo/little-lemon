import React from "react";
import "./AboutSection.css";

const About = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Little Lemon Restaurant is a traditional native food restaurant that serves authentic local dishes made from fresh ingredients and cultural recipes.<br />
                It offers a warm, welcoming atmosphere where guests can enjoy homemade meals and experience rich traditional flavors in a comfortable setting.</p>
            </div>
            <div className="about-image">
                <img src="/Mario and Adrian A.jpg" alt="Little Lemon Restaurant" />
                <img src="/Mario and Adrian B.jpg" alt="Little Lemon Restaurant" />
            </div>
        </section>
    );
}
export default About;