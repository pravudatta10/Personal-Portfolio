/* ==========================================
   Marriage Biodata Portfolio - Custom JS
   ========================================== */

// Placeholder for custom JavaScript
// Currently using Bootstrap 5 for all functionality
// This file is ready for future enhancements

document.addEventListener('DOMContentLoaded', function() {
    // Initialize any custom functionality here
    console.log('Marriage Biodata Portal loaded successfully');
});

function getExperience() {
    const startDate = new Date(2022, 6, 1); // July = month 6 (0-indexed)
    const today = new Date();

    let totalMonths =
        (today.getFullYear() - startDate.getFullYear()) * 12 +
        (today.getMonth() - startDate.getMonth());

    if (today.getDate() < startDate.getDate()) {
        totalMonths--;
    }

    const yearsDecimal = (totalMonths / 12).toFixed(1);

    return `${yearsDecimal} years`;
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("experienceValue").innerText = getExperience();
});
