document.getElementById("ring-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Collect form data
  const formData = new FormData(event.target);
  const customization = Object.fromEntries(formData);

  // Display customization summary
  alert(`Your Custom Ring:\n
    Gold Type: ${customization.goldType}
    Karat: ${customization.karat}
    Stone Type: ${customization.stoneType}
    ${customization.diamondColor ? `Diamond Color: ${customization.diamondColor}` : ""}
    Cut Type: ${customization.cutType}
    Clarity: ${customization.clarity || "N/A"}
  `);

  // Reset form
  event.target.reset();
});