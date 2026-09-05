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

// Projects — freelance and creative portfolio items
const projects = [
  {
    title: "Social Media Content Editing",
    desc: "Edited short-form video clips and branded content for online visibility, engagement, and consistent presentation.",
    url: "#"
  },
  {
    title: "Graphic Design Packages",
    desc: "Created clean, modern visual materials for digital posts, promotional graphics, and social media branding.",
    url: "#"
  },
  {
    title: "Client Administration Support",
    desc: "Managed scheduling, communication, and task tracking to help clients stay organized and efficient in their daily workflow.",
    url: "#"
  },
  {
    title: "Brand Content Planning",
    desc: "Supported content preparation and creative coordination to keep brand messaging clear, consistent, and audience-friendly.",
    url: "#"
  }
];

const projectsGrid = document.getElementById('projectsGrid');
if (projectsGrid) {
  projectsGrid.innerHTML = projects.map(p => `\n    <article class="project-card">\n      <h3>${p.title}</h3>\n      <p>${p.desc}</p>\n      <a href="${p.url}" aria-label="Open ${p.title}">View work</a>\n    </article>\n  `).join('');
}

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