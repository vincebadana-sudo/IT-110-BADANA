const START = 24;
let likes = START;

const likeCount = document.getElementById('likeCount');

// Like and Reset
document.getElementById('likeBtn').addEventListener('click', () => {
  likes++;
  likeCount.textContent = likes;
});
document.getElementById('resetBtn').addEventListener('click', () => {
  likes = START;
  likeCount.textContent = likes;
});

// Dark mode
document.getElementById('darkToggle').addEventListener('change', (e) => {
  document.body.classList.toggle('dark', e.target.checked);
});

// Navigation: show one page at a time
const links = document.querySelectorAll('nav a');
const pages = document.querySelectorAll('.page');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = link.getAttribute('href').slice(1);
    pages.forEach((p) => (p.hidden = p.id !== id));
    links.forEach((l) => l.classList.toggle('active', l === link));
  });
});

// Courses: enroll / drop
const enrollBtn = document.getElementById('enrollBtn');
enrollBtn.addEventListener('click', () => {
  enrollBtn.textContent = enrollBtn.textContent === 'Enroll' ? 'Enrolled ✓' : 'Enroll';
});

// Contact form
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('thanks').hidden = false;
  e.target.reset();
});