// --- Temple data (add at least 3 more objects) ---
const temples = [
  {
    templeName: "Colonia Juárez Mexico Temple",
    location: "Colonia Juárez, Chihuahua, Mexico",
    dedicated: "1999-03-06",
    area: 6800,
    imageUrl: "https://assets.churchofjesuschrist.org/2f/32/2f3295d3db11ecf3bfcce5b0f70f8b9b1ecf7b0b/colonia_juarez_mexico_temple.jpeg"
  },
  {
    templeName: "Fortaleza Brazil Temple",
    location: "Fortaleza, Ceará, Brazil",
    dedicated: "2019-06-02",
    area: 36000,
    imageUrl: "https://assets.churchofjesuschrist.org/3c/6f/3c6fbf6cdb11ecf3bfcce5b0f70f8b9b6c7ed9c5/fortaleza_brazil_temple.jpeg"
  },
  {
    templeName: "Chicago Illinois Temple",
    location: "Glenview, Illinois, USA",
    dedicated: "1985-08-09",
    area: 37062,
    imageUrl: "https://assets.churchofjesuschrist.org/1f/2c/1f2c0f77db11ecf3bfcce5b0f70f8b9b4c38c2a5/chicago_illinois_temple.jpeg"
  },

  // ✅ Add at least 3 more:
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893-04-06",
    area: 382207,
    imageUrl: "https://assets.churchofjesuschrist.org/4d/90/4d90c9acdb11ecf3bfcce5b0f70f8b9b6c0f3a25/salt_lake_temple.jpeg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 40000,
    imageUrl: "https://assets.churchofjesuschrist.org/9d/4b/9d4b5b8bdb11ecf3bfcce5b0f70f8b9b2ac9e4a5/rome_italy_temple.jpeg"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii, USA",
    dedicated: "1919-11-27",
    area: 42100,
    imageUrl: "https://assets.churchofjesuschrist.org/2a/6e/2a6ef58adb11ecf3bfcce5b0f70f8b9b7a1cf2a5/laie_hawaii_temple.jpeg"
  }
];

// --- DOM elements ---
const cardsContainer = document.querySelector("#templeCards");
const pageTitle = document.querySelector("#pageTitle");
const menuButton = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

// --- Create and show temple cards ---
function displayTemples(list) {
  cardsContainer.innerHTML = "";

  list.forEach((temple) => {
    const card = document.createElement("article");
    card.classList.add("temple-card");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    const body = document.createElement("div");
    body.classList.add("card-body");

    const name = document.createElement("h2");
    name.textContent = temple.templeName;

    const loc = document.createElement("p");
    loc.innerHTML = `<strong>Location:</strong> ${temple.location}`;

    const ded = document.createElement("p");
    ded.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

    const area = document.createElement("p");
    area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

    body.appendChild(name);
    body.appendChild(loc);
    body.appendChild(ded);
    body.appendChild(area);

    card.appendChild(img);
    card.appendChild(body);

    cardsContainer.appendChild(card);
  });
}

// --- Filters ---
function filterTemples(type) {
  let filtered = temples;

  if (type === "old") {
    filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
    pageTitle.textContent = "Old";
  } else if (type === "new") {
    filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
    pageTitle.textContent = "New";
  } else if (type === "large") {
    filtered = temples.filter(t => t.area > 90000);
    pageTitle.textContent = "Large";
  } else if (type === "small") {
    filtered = temples.filter(t => t.area < 10000);
    pageTitle.textContent = "Small";
  } else {
    pageTitle.textContent = "Home";
  }

  displayTemples(filtered);
}

// --- Nav click handling ---
document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const type = link.dataset.filter;
    filterTemples(type);

    // close menu on mobile after click
    nav.classList.remove("show");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// --- Hamburger menu toggle ---
menuButton.addEventListener("click", () => {
  nav.classList.toggle("show");
  const expanded = nav.classList.contains("show");
  menuButton.setAttribute("aria-expanded", expanded ? "true" : "false");
});

// --- Footer dates ---
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Initial load
displayTemples(temples);
