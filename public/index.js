// This script helps with direct navigation to routes in GitHub Pages
(function() {
  // Get the current path
  const path = window.location.pathname;

  // If we're not at the root, redirect to the root with a hash
  if (path !== '/' && path !== '/Omara-Portfolio/' && path !== '/Omara-Portfolio/index.html') {
    // Extract the section from the path if possible
    const section = path.split('/').pop().replace('.html', '');
    const hash = section ? `#${section}` : '';

    // Redirect to the root with the hash
    window.location.href = '/Omara-Portfolio/' + hash;
  }

  // Handle hash links for SPA navigation
  document.addEventListener('click', function(e) {
    // Find closest anchor tag
    const anchor = e.target.closest('a');

    if (anchor && anchor.getAttribute('href') && anchor.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const targetId = anchor.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Smooth scroll to the element
        targetElement.scrollIntoView({ behavior: 'smooth' });

        // Update URL without page reload
        window.history.pushState(null, '', `#${targetId}`);
      }
    }
  });
})();
