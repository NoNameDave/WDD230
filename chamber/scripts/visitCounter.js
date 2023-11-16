document.addEventListener('DOMContentLoaded', () => {
    // Increment the visit count
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount++;
    localStorage.setItem('visitCount', visitCount);

    // Display the visit count
    const visitCountElement = document.getElementById('visitCount');
    if (visitCountElement) {
        visitCountElement.textContent = `This page has been visited ${visitCount} times.`;
    }
});

window.onload = function() {
    if (localStorage.getItem('visits')) {
        localStorage.setItem('visits', Number(localStorage.getItem('visits')) + 1);
    } else {
        localStorage.setItem('visits', 1);
    }

    const visitCountElement = document.getElementById('visitCount');
    if (visitCountElement) {
        visitCountElement.textContent = `This page has been visited ${localStorage.getItem('visits')} times`;
    }
};