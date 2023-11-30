// Base URL of your GitHub pages
const baseURL = 'https://nonamedave.github.io/wdd230/';

// URL of your links.json data file
const linksURL = baseURL + 'data/links.json';

// Asynchronous function to get the links data
async function getLinks() {
  try {
    const response = await fetch(linksURL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const weeks = await response.json();
    displayLinks(weeks);
  } catch (error) {
    console.error('Fetch operation:', error.message);
  }
}

// Function to build and display the links
function displayLinks(weeks) {
  const learningActivities = document.querySelector('.card ul');
  weeks.forEach(week => {
    const weekElement = document.createElement('li');
    weekElement.innerHTML = `<strong>${week.week}</strong>`;
    const linksList = document.createElement('ul');

    week.links.forEach(link => {
      const linkElement = document.createElement('li');
      linkElement.innerHTML = `<a href="${link.url}">${link.title}</a>`;
      linksList.appendChild(linkElement);
    });

    weekElement.appendChild(linksList);
    learningActivities.appendChild(weekElement);
  });
}

// Call getLinks function when the page loads
document.addEventListener('DOMContentLoaded', getLinks);
