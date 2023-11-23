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

document.addEventListener("DOMContentLoaded", function() {
    const visitMessageElement = document.getElementById('visit-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    let message;

    if (lastVisit) {
        const daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
        if (daysSinceLastVisit < 1) {
            message = "Back so soon! Awesome!";
        } else {
            message = `You last visited ${daysSinceLastVisit} day${daysSinceLastVisit > 1 ? 's' : ''} ago.`;
        }
    } else {
        message = "Welcome! Let us know if you have any questions.";
    }

    visitMessageElement.textContent = message;
    localStorage.setItem('lastVisit', now);
});
