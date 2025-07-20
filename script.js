document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

const cfpBanner = document.getElementById('cfp-banner');
const closeBtn = document.getElementById('cfp-close-btn');

// Auto hide after 2 seconds
setTimeout(() => {
  cfpBanner.style.display = 'none';
}, 5000);

// Manual close
closeBtn.addEventListener('click', () => {
  cfpBanner.style.display = 'none';
});