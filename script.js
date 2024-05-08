const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('fullscreen');
  });
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('fullscreen')) {
    event.target.classList.remove('fullscreen');
  }
});

const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.querySelector('i').classList.toggle('fa-sun');
  themeToggle.querySelector('i').classList.toggle('fa-moon');
});