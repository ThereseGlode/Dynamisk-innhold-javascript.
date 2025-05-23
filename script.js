console.log('Hello!');
document.addEventListener("DOMContentLoaded", () => {
  // Logo-klikk: header
  const logo = document.getElementById("logo");
  const container = document.getElementById("easteregg");
  if (logo && container) {
    logo.addEventListener("click", () => {
      container.classList.toggle("yellow-background");
    });
  }

  // Logo-klikk: footer
  const logo2 = document.getElementById("logo2");
  const container2 = document.getElementById("easteregg2");
  if (logo2 && container2) {
    logo2.addEventListener("click", () => {
      container2.classList.toggle("yellow-background");
    });
  }

  // Burger meny
  const burgerIcon = document.getElementById("burger-icon");
  const headerNav = document.getElementById("headerNav");
  if (burgerIcon && headerNav) {
    burgerIcon.addEventListener("click", () => {
      burgerIcon.classList.toggle("active");
      headerNav.classList.toggle("show");
    });
  }
});



console.log("Working from menu?");

// menu.html
const pizzaCardContainer = document.querySelector("#pizzaCardContainer");

    function createPizzaCard({ imgSrc, title, description, price }) {
      const pizzaCard = document.createElement("div");
      pizzaCard.classList.add("pizzaCard");

      const pizzaCardImg = document.createElement("img");
      pizzaCardImg.classList.add("pizzaCardImg");
      pizzaCardImg.src = imgSrc || "https://via.placeholder.com/300x180?text=Pizza";
      pizzaCardImg.alt = `Bildet av pizzaen ${title}`;

      const pizzaCardContent = document.createElement("div");
      pizzaCardContent.classList.add("pizzaCardContent");

      const pizzaCardTitle = document.createElement("h3");
      pizzaCardTitle.classList.add("pizzaCardTitle");
      pizzaCardTitle.textContent = title;

      const pizzaCardDescription = document.createElement("p");
      pizzaCardDescription.classList.add("pizzaCardDescription");
      pizzaCardDescription.textContent = description;

      const pizzaCardPrice = document.createElement("p");
      pizzaCardPrice.classList.add("pizzaCardPrice");
      pizzaCardPrice.textContent = price;

      pizzaCardContent.appendChild(pizzaCardTitle);
      pizzaCardContent.appendChild(pizzaCardDescription);
      pizzaCardContent.appendChild(pizzaCardPrice);

      pizzaCard.appendChild(pizzaCardImg);
      pizzaCard.appendChild(pizzaCardContent);

      return pizzaCard;
    }

    const pizzas = [
      {
        imgSrc: "https://images.unsplash.com/photo-1601924638867-3f36db8d4b19?auto=format&fit=crop&w=300&q=80",
        title: "Margherita",
        description: "Tomatsaus, mozzarella, basilikum",
        price: "120 kr"
      },
      {
        imgSrc: "https://images.unsplash.com/photo-1548365328-66e3d49a8f0d?auto=format&fit=crop&w=300&q=80",
        title: "Pepperoni",
        description: "Tomatsaus, mozzarella, pepperoni",
        price: "140 kr"
      },
      {
        imgSrc: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=300&q=80",
        title: "Vegetar",
        description: "Tomatsaus, mozzarella, grønnsaker",
        price: "130 kr"
      },
    ];

    pizzas.forEach(pizzaData => {
      const card = createPizzaCard(pizzaData);
      pizzaCardContainer.appendChild(card);
    });