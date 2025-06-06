const mouseCursor = document.querySelector('.cursor');
const navLinks = document.querySelectorAll('.nav-links li');
const pageLink = document.querySelector('.link');
const hoverTargets = [
  pageLink,
  document.querySelector('#atmosfera'),
  document.querySelector('#mdd'),
  document.querySelector('#oilpalm1'),
  document.querySelector('#cloud'),
  document.querySelector('#goToTop')
];
const navSkill = document.querySelectorAll('.skill-links li');

// Mouse movement
window.addEventListener('mousemove', e => {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
});

function addHoverEffect(elements) {
  Array.from(elements).forEach(el => {
    el.addEventListener('mouseover', () => {
      mouseCursor.classList.add('link-effect');
      el.classList.add('hoverred-link');
    });
    el.addEventListener('mouseleave', () => {
      mouseCursor.classList.remove('link-effect');
      el.classList.remove('hoverred-link');
    });
  });
}

addHoverEffect(navLinks);
addHoverEffect(navSkill);
addHoverEffect(hoverTargets);
