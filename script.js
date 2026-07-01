// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Active dot nav based on scroll position
const sections = document.querySelectorAll('.section');
const dots = document.querySelectorAll('.dot');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      dots.forEach(dot => {
        dot.classList.toggle('active', dot.getAttribute('href') === '#' + id);
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));

// Lightbox for gallery
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    if (item.classList.contains('empty')) return;
    const img = item.querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('active');
  });
});

function closeLightbox(){
  lightbox.classList.remove('active');
  lightboxImg.src = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});