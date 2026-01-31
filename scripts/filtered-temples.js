const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  // ✅ Add at least 3 more temple objects:
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
      "https://www.churchofjesuschrist.org/imgs/359e8ca4d15ccdefcad4b6ffc6d2acb7ed44f3a4/full/!1920%2C1080/0/default"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2616.jpg"
  }
  
];

const templeContainer = document.querySelector("#temples");
const pageTitle = document.querySelector("#pageTitle");
const menuButton = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

function getDedicatedYear(dedicatedString) {
  const year = parseInt(dedicatedString.split(",")[0], 10);
  return Number.isNaN(year) ? 0 : year;
}

function createTempleCard(temple) {
  const card = document.createElement("article");
  card.className = "temple-card";

  const img = document.createElement("img");
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = "lazy";

  const body = document.createElement("div");
  body.className = "card-body";

  const h2 = document.createElement("h2");
  h2.textContent = temple.templeName;

  const loc = document.createElement("p");
  loc.innerHTML = `<strong>Location:</strong> ${temple.location}`;

  const ded = document.createElement("p");
  ded.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

  const area = document.createElement("p");
  area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

  body.append(h2, loc, ded, area);
  card.append(img, body);

  return card;
}

function displayTemples(templeList) {
  templeContainer.innerHTML = "";
  templeList.forEach(t => templeContainer.appendChild(createTempleCard(t)));
}

function setTitle(title) {
  pageTitle.textContent = title;
}

function filterTemples(filterType) {
  let filtered = temples;

  if (filterType === "old") {
    filtered = temples.filter(t => getDedicatedYear(t.dedicated) < 1900);
    setTitle("Old");
  } else if (filterType === "new") {
    filtered = temples.filter(t => getDedicatedYear(t.dedicated) > 2000);
    setTitle("New");
  } else if (filterType === "large") {
    filtered = temples.filter(t => t.area > 90000);
    setTitle("Large");
  } else if (filterType === "small") {
    filtered = temples.filter(t => t.area < 10000);
    setTitle("Small");
  } else {
    setTitle("Home");
  }

  displayTemples(filtered);
}

document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const filterType = link.dataset.filter;
    filterTemples(filterType);

    nav.classList.remove("show");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

menuButton.addEventListener("click", () => {
  nav.classList.toggle("show");
  const isOpen = nav.classList.contains("show");
  menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

displayTemples(temples);
