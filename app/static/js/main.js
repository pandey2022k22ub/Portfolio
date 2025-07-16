// Navbar solid on scroll
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('mainNavbar');
  if (window.scrollY > 60) {
    navbar.classList.add('solid');
  } else {
    navbar.classList.remove('solid');
  }
});

// Animate on load using IntersectionObserver
function animateOnScroll() {
  const animatedEls = document.querySelectorAll('.animate-fade-in, .animate-slide-in');
  const observer = new window.IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = entry.target.classList.contains('animate-slide-in') ? '0.3s' : '0s';
        entry.target.classList.add('animated');
        entry.target.style.opacity = 1;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  animatedEls.forEach(el => {
    observer.observe(el);
  });
}
document.addEventListener('DOMContentLoaded', animateOnScroll); 