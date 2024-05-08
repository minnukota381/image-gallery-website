const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.querySelector('.modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.close-modal');
const themeToggle = document.querySelector('.theme-toggle');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = item.src;
    modalImg.alt = item.alt;
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.querySelector('i').classList.toggle('fa-sun');
  themeToggle.querySelector('i').classList.toggle('fa-moon');
});
