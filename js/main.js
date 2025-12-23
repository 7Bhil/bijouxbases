/* =========================
   PANIER (LOCAL STORAGE)
========================= */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Ajouter au panier
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " ajouté au panier");
  updateCartCount();
}

// Compteur panier
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

updateCartCount();

/* =========================
   AFFICHAGE PANIER
========================= */

function displayCart() {
  const cartList = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");

  if (!cartList || !totalEl) return;

  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} — ${item.price} €
      <button onclick="removeFromCart(${index})">✕</button>
    `;
    cartList.appendChild(li);
  });

  totalEl.textContent = total + " €";
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
  updateCartCount();
}

/* =========================
   MENU MOBILE (OPTIONNEL)
========================= */

function toggleMenu() {
  const nav = document.querySelector(".nav");
  if (nav) nav.classList.toggle("active");
}
