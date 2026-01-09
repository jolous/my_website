// scroll.js (with offset for fixed navbar)
const OFFSET = 100; // Adjust this value based on your nav height

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#' || href === '' || href.length === 1) return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});