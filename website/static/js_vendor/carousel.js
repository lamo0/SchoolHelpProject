// Thanks Frederic R.
const slider = document.querySelector('.dashboard-item-gallery');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
    isDown = true;
    slider.classList.add('gallery-active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
    isDown = false;
    slider.classList.remove('gallery-active');
});
slider.addEventListener('mouseup', _ => {
    isDown = false;
    slider.classList.remove('gallery-active');
});
slider.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const SCROLL_SPEED = 1.3;
    const walk = (x - startX) * SCROLL_SPEED;
    slider.scrollLeft = scrollLeft - walk;
});

