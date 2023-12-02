document.addEventListener('DOMContentLoaded', () => {
    loadMembers();
});

function loadMembers() {
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => displayMembers(data.members))
        .catch(error => console.error('Error loading member data:', error));
}

function displayMembers(members) {
    const container = document.querySelector('main');
    // Clear existing content
    container.innerHTML = '';

    members.forEach(member => {
        // Create elements for each member
        const memberDiv = document.createElement('div');
        memberDiv.className = 'member-card'; // Use this class for styling
        memberDiv.innerHTML = `
            <img src="images/${member.image_file}" alt="${member.name}">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <a href="${member.website_url}">Visit Website</a>
            <!-- Add other member details here -->
        `;
        container.appendChild(memberDiv);
    });
}

function toggleView(viewType) {
    const container = document.querySelector('main');
    if (viewType === 'list') {
        container.classList.add('list-view');
    } else {
        container.classList.remove('list-view');
    }
}
