// Utility function to handle smooth scrolling with hash links
export const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();

  // Remove the leading '#' if present
  const id = targetId.startsWith('#') ? targetId.substring(1) : targetId;

  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });

    // Update the URL without causing a page reload
    window.history.pushState(null, '', `#${id}`);
  }
};
