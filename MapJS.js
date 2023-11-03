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

  list.addEventListener('mousedown', (event) => {
    isDragging = true;
    touchStartX = event.clientX;
    touchScrollLeft = list.scrollLeft;

    list.addEventListener('mousemove', onMouseMove);
  });

  list.addEventListener('mouseup', () => {
    isDragging = false;
    list.removeEventListener('mousemove', onMouseMove);
  });

  function onMouseMove(event) {
    if (!isDragging) return;
    event.preventDefault();

    const touchCurrentX = event.clientX;
    const scrollAmount = (touchStartX - touchCurrentX) * 2;
    list.scrollLeft = touchScrollLeft + scrollAmount;
  }
};
