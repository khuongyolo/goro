window.onload = () => {
  const list = document.getElementById('list-category');
  let isDragging = false;
  let touchStartX;
  let touchScrollLeft;
  let lastTouchX = 0; // Lưu trữ vị trí chạm trước đó

  list.addEventListener('wheel', (event) => {
    event.preventDefault();

    const sensitivity = 0.9;
    let speed = Math.abs(event.deltaY);
    const scrollSpeed = speed * sensitivity;

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
    lastTouchX = touchStartX;
  });

  list.addEventListener('touchmove', (event) => {
    if (!isDragging) return;
    event.preventDefault();

    const touchCurrentX = event.touches[0].clientX;
    const scrollAmount = (lastTouchX - touchCurrentX) * 2;
    list.scrollLeft = touchScrollLeft + scrollAmount;
    lastTouchX = touchCurrentX;
  });

  list.addEventListener('touchend', () => {
    isDragging = false;
  });
};
