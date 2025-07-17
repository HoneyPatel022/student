// window.onload = () => {
//   const allBoxes = document.querySelectorAll('.sector-box');
//   allBoxes.forEach(box => box.innerHTML = '');
// };



// let currentSector = "";

// // Toggle hamburger menu on small screens
// function toggleMenu() {
//   const nav = document.getElementById("nav-links");
//   nav.classList.toggle("active");
// }

// // Show dropdown menu under the clicked button
// function showDropdown(event, sector) {
//   currentSector = sector;

//   const dropdown = document.getElementById("dropdown-menu");
//   const rect = event.target.getBoundingClientRect();

//   // Position the dropdown below the clicked button
//   dropdown.style.left = rect.left + "px";
//   dropdown.style.top = rect.bottom + "px";
//   dropdown.style.display = "block";
// }

// // Handle dropdown option selection
// function selectOption(type) {
//   const dropdown = document.getElementById("dropdown-menu");
//   dropdown.style.display = "none";

//   // ✅ Close the mobile menu (hamburger) if open
//   document.getElementById("nav-links").classList.remove("active");

//   // ✅ Clear all sector boxes
//   const allBoxes = document.querySelectorAll(".sector-box");
//   allBoxes.forEach(box => box.innerHTML = "");

//   // ✅ Update only the selected sector box
//   const box = document.getElementById(`${currentSector}-box`);

//   if (type === "image") {
//     box.innerHTML = `<img src="images/${currentSector}.jpg" alt="${currentSector}" />`;
//   } else if (type === "feature") {
//     box.innerHTML = `
//       <ul>
//         <li>Comfortable Stay</li>
//         <li>Affordable Pricing</li>
//         <li>Easy Accessibility</li>
//         <li>Best Services</li>
//       </ul>`;
//   }
// }

// // Hide dropdown when clicking outside
// window.addEventListener("click", function (e) {
//   const dropdown = document.getElementById("dropdown-menu");
//   if (!dropdown.contains(e.target) && !e.target.matches("button")) {
//     dropdown.style.display = "none";
//   }
// });



// ✅ This function maps sector IDs to readable names
function formatSectorName(id) {
  const map = {
    tourism: "Tourism & Travel",
    corporate: "Corporate Business Stays",
    student: "Student Accommodation",
    professionals: "Working Professionals",
    backpacker: "Backpacker Hostels",
    medical: "Medical Tourism",
    event: "Event & Wedding",
    airport: "Airport Transit"
  };
  return map[id] || "";
}

// ✅ On page load — write sector names into each box
window.onload = () => {
  const allBoxes = document.querySelectorAll('.sector-box');
  allBoxes.forEach(box => {
    const id = box.id.replace("-box", "");
    box.innerHTML = formatSectorName(id);
  });
};

let currentSector = "";

// ✅ Toggle hamburger menu on mobile
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");
}

// ✅ Show dropdown menu under selected button
function showDropdown(event, sector) {
  currentSector = sector;

  const dropdown = document.getElementById("dropdown-menu");
  const rect = event.target.getBoundingClientRect();

  dropdown.style.left = rect.left + "px";
  dropdown.style.top = rect.bottom + "px";
  dropdown.style.display = "block";
}

// ✅ When user selects "Image" or "Feature"
function selectOption(type) {
  const dropdown = document.getElementById("dropdown-menu");
  dropdown.style.display = "none";

  // ✅ Close mobile nav menu if open
  document.getElementById("nav-links").classList.remove("active");

  // ✅ Reset all boxes with their names
  const allBoxes = document.querySelectorAll(".sector-box");
  allBoxes.forEach(box => {
    const id = box.id.replace("-box", "");
    box.innerHTML = formatSectorName(id);
  });

  // ✅ Update only selected box with image/feature
  const box = document.getElementById(`${currentSector}-box`);

  if (type === "image") {
    box.innerHTML = `<img src="images/${currentSector}.jpg" alt="${currentSector}" />`;
  } else if (type === "feature") {
    box.innerHTML = `
      <ul>
        <li>Comfortable Stay</li>
        <li>Affordable Pricing</li>
        <li>Easy Accessibility</li>
        <li>Best Services</li>
      </ul>`;
  }
}

// ✅ Hide dropdown if clicked outside
window.addEventListener("click", function (e) {
  const dropdown = document.getElementById("dropdown-menu");
  if (!dropdown.contains(e.target) && !e.target.matches("button")) {
    dropdown.style.display = "none";
  }
});




