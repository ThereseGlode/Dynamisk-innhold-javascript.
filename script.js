console.log("Script lastet");

// Vent til hele DOM-en er klar før noe kjøres
document.addEventListener("DOMContentLoaded", () => {
  // Logo-klikk: legg til/fjern gul bakgrunn
  const logo = document.getElementById("logo");
  const logo2 = document.getElementById("logo2");

  if (logo) {
    logo.addEventListener("click", () => {
      document.body.classList.toggle("yellow-background");
    });
  }

  if (logo2) {
    logo2.addEventListener("click", () => {
      document.body.classList.toggle("yellow-background");
    });
  }

  // Burgerkortene på meny-siden
  const burgerCardContainer = document.querySelector("#burgerCardContainer");

  if (burgerCardContainer) {
    const burgers = [
      {
        imgSrc: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=300&q=80",
        title: "Classic Burger",
        description: "Saftig biff, salat, tomat, ost",
        price: "129 kr"
      },
      {
        imgSrc: "./images/baconbbq.jpg",
        title: "BBQ Bacon",
        description: "Biff, bacon, ost, BBQ-saus",
        price: "149 kr"
      },
      {
        imgSrc: "./images/veggieburger.jpg",
        title: "Veggie Burger",
        description: "Vegetarbiff, avokado, tomat",
        price: "119 kr"
      },
      {
        imgSrc: "./images/trippelcheese.jpg",
        title: "Cheese Overload",
        description: "Trippel ost, biff, løk og salat",
        price: "139 kr"
      },
      {
        imgSrc: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=300&q=80",
        title: "Spicy Jalapeño",
        description: "Biff, jalapeño, ost, chipotle-mayo",
        price: "139 kr"
      },
      {
        imgSrc: "./images/dobblemeat.jpg",
        title: "Double Trouble",
        description: "Dobbel biff, ost, bacon, dressing",
        price: "159 kr"
      }
    ];

    burgers.forEach(({ imgSrc, title, description, price }) => {
      const card = document.createElement("div");
      card.classList.add("pizzaCard");

      card.innerHTML = `
        <img class="pizzaCardImg" src="${imgSrc}" alt="Bilde av ${title}">
        <div class="pizzaCardContent">
          <h3 class="pizzaCardTitle">${title}</h3>
          <p class="pizzaCardDescription">${description}</p>
          <p class="pizzaCardPrice">${price}</p>
        </div>
      `;

      burgerCardContainer.appendChild(card);
    });
  }
});

// Scroll to top-knapp
const scrollBtn = document.getElementById("scrollToTopBtn");

if (scrollBtn) {
  // Vis knapp når man scroller ned
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  // Scroll til toppen når man klikker
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}