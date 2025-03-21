window.addEventListener('scroll', function() {
    const image = document.querySelector('.decor-mountain');
    const scrollPosition = window.scrollY;

    const scaleFactor = 0.5 + scrollPosition / 1500;

    image.style.transform = `scaleY(${scaleFactor})`;
    image.style.transformOrigin = 'bottom';
});

/* window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const targetScroll = 900; 

    if (scrollY >= targetScroll) {
        document.body.style.backgroundColor = "#111111"; 
    } else {
        document.body.style.backgroundColor = "white"; 
    }
}); */

document.addEventListener("DOMContentLoaded", function() {
    const myname = document.querySelector(".myname");

    myname.addEventListener("mouseenter", function() {
        myname.textContent = "Aldenosaur";
    });

    myname.addEventListener("mouseleave", function() {
        myname.textContent = "Alden Deniega";
    });
});