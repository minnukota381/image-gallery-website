const galleryItems = document.querySelectorAll('.gallery-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showImage(index) {
  galleryItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  showImage(currentIndex);
});

showImage(currentIndex);