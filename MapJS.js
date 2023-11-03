window.onload = () => {
  const list = document.getElementById('list-category');
  let isDragging = false;
  let touchStartX;
  let touchScrollLeft;

  list.addEventListener('wheel', (event) => {
    event.preventDefault();
    
    const scrollSpeed = 10;
    if (event.deltaY > 0) {
      list.scrollLeft += scrollSpeed;
    } else {
      list.scrollLeft -= scrollSpeed;
    }
  });

  list.addEventListener('touchstart', (event) => {
    isDragging = true;
    touchStartX = event.touches[0].clientX;
    touchScrollLeft = list.scrollLeft;
  });

  list.addEventListener('touchend', () => {
    isDragging = false;
  });

  list.addEventListener('touchmove', (event) => {
    if (!isDragging) return;
    event.preventDefault();
    
    const touchCurrentX = event.touches[0].clientX;
    const scrollAmount = (touchStartX - touchCurrentX) * 2; 
    list.scrollLeft = touchScrollLeft + scrollAmount;
  });
};
