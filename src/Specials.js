import React from "react";

const Specials = [
    {
        id: 1,
        name: "Greek Salad",
        price: "$12.99",
        description: "A refreshing salad with crispy lettuce, ripe tomatoes, cucumbers, olives, and feta cheese, dressed with a tangy vinaigrette.",
        image: "/greeksalad.jpg"
    },
    {
        id: 2,
        name: "Bruschetta",
        price: "$5.99",
        description: "Grilled bread topped with a mixture of diced tomatoes, garlic, basil, and olive oil, creating a flavorful and satisfying appetizer.",
        image: "/bruchetta.jpg"
    },
    {
        id: 3,
        name: "Lemon Dessert",
        price: "$6.99",
        description: "A refreshing lemon dessert made with fresh lemon juice, sugar, and a hint of vanilla, served chilled.",
        image: "/lemondessert.jpg"
    }
];

const HighlightedSpecials = () => {
    return (
        <section className="highlighted-specials">
            <header className="highlighted-specials-header">
            <h2>This Week's Specials!</h2>
            <button className="highlighted-specials-button">Online Menu</button>
            </header>
            <div className="specials-container">
                {Specials.map(special => (
                    <article key={special.id} className="special-card">
                        <img src={special.image} alt={special.name} className="special-image" />
                        <h3>{special.name}</h3>
                        <p className="special-price">{special.price}</p>
                        <p className="special-description">{special.description}</p>
                        <button className="order-button">Order a delivery</button>
                    </article>
                ))}
            </div>
        </section>
    );
}
export default HighlightedSpecials;