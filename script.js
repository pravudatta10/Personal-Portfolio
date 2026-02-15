/* ==========================================
   Professional Biodata - Custom JS
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
  console.log("Professional Biodata loaded successfully");

  const ageEl = document.getElementById("ageValue");
  const expEl = document.getElementById("experienceValue");

  if (ageEl) ageEl.textContent = calculateAge();
  if (expEl) expEl.textContent = calculateExperience();
});

/* -------------------------------
   Calculate Experience (Decimal)
-------------------------------- */
function calculateExperience() {
  const startDate = new Date(2022, 6, 1); // 1 July 2022
  const today = new Date();

  let months =
    (today.getFullYear() - startDate.getFullYear()) * 12 +
    (today.getMonth() - startDate.getMonth());

  if (today.getDate() < startDate.getDate()) {
    months--;
  }

  return (months / 12).toFixed(1) + " years";
}

/* -------------------------------
   Calculate Age (Rounded Years)
-------------------------------- */
function calculateAge() {
  const dob = new Date(2000, 10, 6); // 06 Nov 2000
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < dob.getDate())
  ) {
    age--;
  }

  return age + " years";
}
