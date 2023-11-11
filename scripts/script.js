document.addEventListener('DOMContentLoaded', function () {
    var darkModeToggle = document.querySelector('.dark-mode-toggle');
    var elementsToToggle = [
        document.querySelector('*'),
        document.querySelector('header'),
        document.querySelector('footer'),
        document.querySelector('.card'),
        document.querySelector('.card2')
    ];
    
    darkModeToggle.addEventListener('click', function() {
        elementsToToggle.forEach(function(element) {
            if(element) { // Check if the element was found
                element.classList.toggle('dark-mode');
            }
        });
    
        // Update the toggle button text or attribute as needed
        var isDarkMode = document.body.classList.contains('dark-mode');
        darkModeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    });
  
    // Optional: Automatically apply dark mode if user prefers it
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      toggleDarkMode();
    }

    var hamburger = document.querySelector('.hamburger');
    var navigation = document.getElementById('navigation');
  
    hamburger.addEventListener('click', function () {
      navigation.classList.toggle('show-nav');
  
      // Change the hamburger icon to 'X' when the menu is open
      hamburger.textContent = navigation.classList.contains('show-nav') ? '✕' : '☰';
    });
  });
  