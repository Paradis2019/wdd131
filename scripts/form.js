// Product array provided in the assignment instructions. :contentReference[oaicite:1]{index=1}
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

function setFooterDates() {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
}

function populateProducts() {
  const select = document.getElementById("productName");

  products.forEach((p) => {
    const opt = document.createElement("option");
    opt.value = p.id;        // requirement: use id for value :contentReference[oaicite:2]{index=2}
    opt.textContent = p.name; // requirement: name for display :contentReference[oaicite:3]{index=3}
    select.appendChild(opt);
  });
}

setFooterDates();
populateProducts();
