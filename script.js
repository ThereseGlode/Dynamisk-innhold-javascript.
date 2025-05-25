console.log("Script lastet");

document.addEventListener("DOMContentLoaded", () => {
  // Logo-klikk: legg til/fjern gul bakgrunn
  const logo = document.getElementById("logo");
  const logo2 = document.getElementById("logo2");

  [logo, logo2].forEach(el => {
    if (el) {
      el.addEventListener("click", () => {
        document.body.classList.toggle("yellow-background");
      });
    }
  });

  // === MENU-SIDEN ===
  const burgerCardContainer = document.querySelector("#burgerCardContainer");

  if (burgerCardContainer) {
    const burgers = [
      {
        imgSrc: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=300&q=80",
        title: "Classic Burger",
        description: "Saftig biff, salat, tomat, ost",
        price: "129"
      },
      {
        imgSrc: "./images/baconbbq.jpg",
        title: "BBQ Bacon",
        description: "Biff, bacon, ost, BBQ-saus",
        price: "149"
      },
      {
        imgSrc: "./images/veggieburger.jpg",
        title: "Veggie Burger",
        description: "Vegetarbiff, avokado, tomat",
        price: "119"
      },
      {
        imgSrc: "./images/trippelcheese.jpg",
        title: "Cheese Overload",
        description: "Trippel ost, biff, løk og salat",
        price: "139"
      },
      {
        imgSrc: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=300&q=80",
        title: "Spicy Jalapeño",
        description: "Biff, jalapeño, ost, chipotle-mayo",
        price: "139"
      },
      {
        imgSrc: "./images/dobblemeat.jpg",
        title: "Double Trouble",
        description: "Dobbel biff, ost, bacon, dressing",
        price: "159"
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
          <p class="pizzaCardPrice">${price} kr</p>
          <button class="addToCartBtn">Legg i handlekurv</button>
        </div>
      `;

      burgerCardContainer.appendChild(card);

      card.querySelector(".addToCartBtn").addEventListener("click", () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ title, price });
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${title} lagt i handlekurven!`);
      });
    });
  }

  // === ORDER-SIDEN ===
  const orderCardContainer = document.getElementById("orderCardContainer");
  const cartList = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  if (orderCardContainer && cartList && cartTotal) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;

    cart.forEach(({ title, price }) => {
      const li = document.createElement("li");
      li.textContent = `${title} - ${price} kr`;
      cartList.appendChild(li);
      total += parseInt(price);
    });

    cartTotal.textContent = `${total} kr`;

    const burgers = [
      {
        title: "Classic Burger",
        price: 129,
        imgSrc: "./images/classic.jpg"
      },
      {
        title: "BBQ Bacon",
        price: 149,
        imgSrc: "./images/bbq.jpg"
      },
      {
        title: "Veggie Burger",
        price: 119,
        imgSrc: "./images/veggie.jpg"
      }
    ];

    burgers.forEach(({ title, price, imgSrc }) => {
      const card = document.createElement("div");
      card.classList.add("pizzaCard");

      card.innerHTML = `
        <img class="pizzaCardImg" src="${imgSrc}" alt="${title}">
        <div class="pizzaCardContent">
          <h3 class="pizzaCardTitle">${title}</h3>
          <p class="pizzaCardPrice">${price} kr</p>
          <button class="addToCartBtn">Legg i handlekurv</button>
        </div>
      `;

      orderCardContainer.appendChild(card);

      card.querySelector(".addToCartBtn").addEventListener("click", () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ title, price });
        localStorage.setItem("cart", JSON.stringify(cart));
        const li = document.createElement("li");
        li.textContent = `${title} - ${price} kr`;
        cartList.appendChild(li);
        total += price;
        cartTotal.textContent = `${total} kr`;
      });
    });
  }

  // === SCROLL TO TOP ===
  const scrollBtn = document.getElementById("scrollToTopBtn");

  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});