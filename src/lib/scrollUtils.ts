// Utility function to handle smooth scrolling with hash links
export const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();

  // Remove the leading '#' if present
  const id = targetId.startsWith('#') ? targetId.substring(1) : targetId;

  const element = document.getElementById(id);
  if (element) {
    // Add a small delay to ensure the DOM is ready
    setTimeout(() => {
      // Get the position of the element relative to the viewport
      const rect = element.getBoundingClientRect();

      // Calculate the absolute position on the page
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const offsetTop = rect.top + scrollTop;

      // Scroll with smooth behavior
      window.scrollTo({
        top: offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      });

      // Update the URL without causing a page reload
      window.history.pushState(null, '', `#${id}`);
    }, 10);
  }
};
