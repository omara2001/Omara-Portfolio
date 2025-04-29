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
})();
