import React from "react";
import "./Testimonial.css";

const Testimonials = [
    {
        id: 1,
        name: "John Doe",
        rating: 5,
        comment: "Amazing food and service!",
        image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        id: 2,
        name: "Jane Smith",
        rating: 4,
        comment: "Great experience overall.",
        image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        id: 3,
        name: "Michael Johnson",
        rating: 5,
        comment: "Highly recommended!",
        image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        id: 4,
        name: "Emily Davis",
        rating: 4,
        comment: "Delicious food and friendly staff.",
        image: "https://randomuser.me/api/portraits/women/4.jpg"
    }
];

function Testimonial() {
    return (
        <div className="testimonials">
            <h2>What Our Customers Say</h2>
            <div className="testimonial-list">
                {Testimonials.map(testimonial => (
                    <div key={testimonial.id} className="testimonial">
                        <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                        <h3>{testimonial.name}</h3>
                        <p className="rating">
                            {"⭐".repeat(testimonial.rating)}
                            {"☆".repeat(5 - testimonial.rating)}
                        </p>
                        <p>{testimonial.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonial;