window.onload = function() {
  const list = document.getElementById('list-category');
  let isDragging = false;
  let touchStartX;
  let touchScrollLeft;

  list.addEventListener('wheel', function(event) {
    event.preventDefault();

    const scrollSpeed = 20; 
    if (event.deltaY > 0) {
      list.scrollLeft += scrollSpeed;
    } else {
      list.scrollLeft -= scrollSpeed;
    }
  });

  list.addEventListener('touchstart', function(event) {
    isDragging = true;
    touchStartX = event.touches[0].clientX;
    touchScrollLeft = list.scrollLeft;
  });

  list.addEventListener('touchend', function() {
    isDragging = false;
  });

  list.addEventListener('touchmove', function(event) {
    if (!isDragging) return;
    event.preventDefault();

    const touchCurrentX = event.touches[0].clientX;
    const scrollAmount = (touchStartX - touchCurrentX) * 0.5; 
    list.scrollLeft = touchScrollLeft + scrollAmount;
  });
};


