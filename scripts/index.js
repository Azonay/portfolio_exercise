document.getElementById('theme-toggle').addEventListener('click', function() {
  var bodyElement = document.body;
  var themeToggleButton = document.getElementById('theme-toggle');

  // Toggle the "dark-mode" class on the body
  bodyElement.classList.toggle('dark-mode');

  // Update other elements or specific components if necessary
  document.querySelectorAll('header, footer, .menu a, .menu button').forEach(function(element) {
    element.classList.toggle('dark-mode');
  });

  // Update the button text
  if (bodyElement.classList.contains('dark-mode')) {
    themeToggleButton.textContent = 'Light Mode';
  } else {
    themeToggleButton.textContent = 'Dark Mode';
  }
});