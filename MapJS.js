window.onload = () => {
  const list = document.getElementById('list-category');
  let isDragging = false;
  let touchStartX;
  let touchScrollLeft;
  let lastTouchX = 0; // Lưu trữ vị trí chạm trước đó
  let isMouseWheel = false;

  list.addEventListener('wheel', (event) => {
    event.preventDefault();

    const sensitivity = 0.9;
    let speed = Math.abs(event.deltaX); // Sử dụng deltaX thay vì deltaY để xác định hướng vuốt trái và phải
    const scrollSpeed = speed * sensitivity;

    if (event.deltaX > 0) {
      list.scrollLeft += scrollSpeed;
    } else {
      list.scrollLeft -= scrollSpeed;
    }

    isMouseWheel = true;
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
    const scrollAmount = touchStartX - touchCurrentX;
    list.scrollLeft = touchScrollLeft + scrollAmount;
    lastTouchX = touchCurrentX;

    isMouseWheel = false;
  });

  list.addEventListener('touchend', () => {
    isDragging = false;
  });

  list.addEventListener('mousedown', () => {
    isMouseWheel = false;
  });

  list.addEventListener('mouseup', () => {
    isMouseWheel = true;
  });
};
