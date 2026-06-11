const pgs = [
{
    name: "Comfort PG",
    location: "Delhi",
    rent: "₹6000/month",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500"
},
{
    name: "Student PG",
    location: "Noida",
    rent: "₹7500/month",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=500"
},
{
    name: "Royal PG",
    location: "Ghaziabad",
    rent: "₹5500/month",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500"
},
{
    name: "Comfort PG",
    location: "Delhi",
    rent: "₹6000/month",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500"
},
{
    name: "Student PG",
    location: "Noida",
    rent: "₹7500/month",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=500"
},
{
    name: "Royal PG",
    location: "Ghaziabad",
    rent: "₹5500/month",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500"
},
{
    name: "Royal PG",
    location: "Ghaziabad",
    rent: "₹5500/month",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500"
},
{
    name: "Comfort PG",
    location: "Delhi",
    rent: "₹6000/month",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500"
}
];

const container = document.getElementById("pgContainer");

pgs.forEach(pg => {

    const card = document.createElement("div");
    card.classList.add("pg-card");

    card.innerHTML = `
        <img src="${pg.image}" alt="${pg.name}">
        <h2>${pg.name}</h2>
        <p>Location: ${pg.location}</p>
        <p>Rent: ${pg.rent}</p>
        <button onclick="bookPG('${pg.name}')">
            Rent Now
        </button>
    `;

    container.appendChild(card);
});

function bookPG(name)
{
    alert("Booking Confirmed for " + name);
}