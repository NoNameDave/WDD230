document.addEventListener('DOMContentLoaded', (event) => {
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  
    const lastModifiedParagraph = document.getElementById('lastModified');
    lastModifiedParagraph.textContent = `Last Updated: ${document.lastModified}`;
  });
  