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



window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY; // Get current scroll position

    if (scrollPosition < 400) {
        document.documentElement.style.setProperty('--bg-color', 'rgb(255, 255, 255)');
    } else {
        let scrollPercentage = (scrollPosition - 400) / 500; // 300px range (1000 - 700)

        scrollPercentage = Math.min(Math.max(scrollPercentage, 0), 1);

        let red = Math.max(255 - scrollPercentage * 255, 0);
        let green = Math.max(255 - scrollPercentage * 255, 0);
        let blue = Math.max(255 - scrollPercentage * 255, 0);

        document.documentElement.style.setProperty('--bg-color', `rgb(${red}, ${green}, ${blue})`);
    }

    if (scrollPosition < 400) {
        document.documentElement.style.setProperty('--inverse-bg-color', 'rgb(0, 0, 0)');
    } else {
        let scrollPercentage = (scrollPosition - 400) / 500;
        scrollPercentage = Math.min(Math.max(scrollPercentage, 0), 1);

        let red = Math.min(scrollPercentage * 255, 255);
        let green = Math.min(scrollPercentage * 255, 255);
        let blue = Math.min(scrollPercentage * 255, 255);

        document.documentElement.style.setProperty('--inverse-bg-color', `rgb(${red}, ${green}, ${blue})`);
    }
});