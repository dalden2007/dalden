window.addEventListener('scroll', function() {
    const image = document.querySelector('.decor-mountain');
    const scrollPosition = window.scrollY;

    const scaleFactor = 1 + scrollPosition / 2000;
    image.style.transform = `scaleY(${scaleFactor})`;
});