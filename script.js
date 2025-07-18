

const sectorTitles = {
  tourism: "Tourism & Travel",
  corporate: "Corporate Business Stays",
  student: "Student Accommodation",
  professionals: "Working Professionals",
  backpacker: "Backpacker Hostels",
  medical: "Medical Tourism",
  event: "Event & Wedding",
  airport: "Airport Transit"
};

const sectorFeatures = {
  tourism: "Experience scenic beauty and cultural exploration.",
  corporate: "Comfortable and professional stay for business needs.",
  student: "Affordable and convenient student housing.",
  professionals: "Short-term or long-term stays for working individuals.",
  backpacker: "Budget-friendly options for adventurous travelers.",
  medical: "Stay close to healthcare with comfort and care.",
  event: "Elegant accommodations for events and weddings.",
  airport: "Quick and convenient transit stays near airports."
};

// ✅ Set titles on load
window.onload = () => {
  const allBoxes = document.querySelectorAll('.sector-box');
  allBoxes.forEach(box => {
    const id = box.id.replace("-box", "");
    box.innerHTML = `<strong>${sectorTitles[id]}</strong>`;
  });
};

// ✅ Toggle nav menu
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}

// ✅ Show image with one feature
function showDropdown(event, sector) {
  const allBoxes = document.querySelectorAll('.sector-box');
  allBoxes.forEach(box => {
    const id = box.id.replace("-box", "");
    box.innerHTML = `<strong>${sectorTitles[id]}</strong>`;
  });

  const box = document.getElementById(`${sector}-box`);
  box.innerHTML = `
    <div class="box-content">
      <img src="images/${sector}.jpg" alt="${sector}" />
      <p class="feature-text">${sectorFeatures[sector]}</p>
    </div>
  `;
  box.scrollIntoView({ behavior: "smooth", block: "center" });


  document.getElementById("nav-links").classList.remove("active");
}






