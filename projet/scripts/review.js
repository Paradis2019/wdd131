function setFooterDates() {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
}

function incrementReviewCounter() {
  const key = "reviewCount";
  const current = Number(localStorage.getItem(key)) || 0;
  const updated = current + 1;
  localStorage.setItem(key, String(updated));
  document.getElementById("reviewCount").textContent = String(updated);
}

function renderSubmissionDetails() {
  const params = new URLSearchParams(window.location.search);
  const dl = document.getElementById("submissionDetails");

  // Build a simple list of submitted values (GET query string)
  const fields = [
    ["Product", params.get("productName")],
    ["Rating", params.get("overallRating")],
    ["Install Date", params.get("installDate")],
    ["Features", params.getAll("features").join(", ")],
    ["Review", params.get("writtenReview")],
    ["Name", params.get("userName")]
  ];

  fields.forEach(([label, value]) => {
    const dt = document.createElement("dt");
    dt.textContent = label;

    const dd = document.createElement("dd");
    dd.textContent = value && value.trim() ? value : "—";

    dl.appendChild(dt);
    dl.appendChild(dd);
  });
}

setFooterDates();
incrementReviewCounter(); // requirement: increment each time review.html loads :contentReference[oaicite:4]{index=4}
renderSubmissionDetails();
