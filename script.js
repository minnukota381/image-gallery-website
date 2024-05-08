const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.querySelector('.modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.close-modal');
const themeToggle = document.querySelector('.theme-toggle');
const sidebar = document.querySelector('.sidebar');
const menuLinks = document.querySelectorAll('.menu a');

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
  sidebar.classList.toggle('dark');
  menuLinks.forEach(link => link.classList.toggle('dark'));
  themeToggle.querySelectorAll('i').forEach(icon => icon.classList.toggle('fa-sun'));
  themeToggle.querySelectorAll('i').forEach(icon => icon.classList.toggle('fa-moon'));
});
