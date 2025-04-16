let viewportWidth = window.innerWidth;
console.log(viewportWidth);

window.addEventListener("resize", () => {
    viewportWidth = window.innerWidth;
    //console.log("New Width:", window.innerWidth);
  });

whiteZone = 500;
transitionLength = 500;

document.documentElement.style.setProperty('--bg-color', 'rgb(255, 255, 255)');
document.documentElement.style.setProperty('--inverse-bg-color', 'rgb(0, 0, 0)');

document.addEventListener("DOMContentLoaded", function() { //Alden Deniega -> Aldenosaur
    const myname = document.querySelector(".myname");

    myname.addEventListener("mouseenter", function() {
        myname.textContent = "Aldenosaur";
    });

    myname.addEventListener("mouseleave", function() {
        myname.textContent = "Alden Deniega";
    });
});

window.addEventListener('scroll', () => {
    const svg = document.querySelector('.mountain svg');
    const maxStretch = 5; // how much to stretch max (e.g., 1.5 = 150%)
    const mountainscrollY = window.scrollY;
    const stretch = 1 + Math.min(mountainscrollY / 700, maxStretch - 1); // cap the stretch

    svg.style.transform = `scaleY(${stretch})`;
    svg.style.transformOrigin = 'bottom';
  });

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY; // White to Black NavBar

    if (scrollPosition < whiteZone) {
        document.documentElement.style.setProperty('--bg-color', 'rgb(255, 255, 255)');
    } else {
        let scrollPercentage = (scrollPosition - whiteZone) / transitionLength; // 300px range (1000 - 700)

        scrollPercentage = Math.min(Math.max(scrollPercentage, 0), 1);

        let red = Math.max(255 - scrollPercentage * 255, 0);
        let green = Math.max(255 - scrollPercentage * 255, 0);
        let blue = Math.max(255 - scrollPercentage * 255, 0);

        document.documentElement.style.setProperty('--bg-color', `rgb(${red}, ${green}, ${blue})`);
    }

    if (scrollPosition < whiteZone) {
        document.documentElement.style.setProperty('--inverse-bg-color', 'rgb(0, 0, 0)');
    } else {
        let scrollPercentage = (scrollPosition - whiteZone) / transitionLength;
        scrollPercentage = Math.min(Math.max(scrollPercentage, 0), 1);

        let red = Math.min(scrollPercentage * 255, 255);
        let green = Math.min(scrollPercentage * 255, 255);
        let blue = Math.min(scrollPercentage * 255, 255);

        document.documentElement.style.setProperty('--inverse-bg-color', `rgb(${red}, ${green}, ${blue})`);
    }
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const movePercent = scrollY / window.innerWidth; // optional: normalize it
    const movebooksX = -movePercent * 25 + 10; 
    
    const rollbooks = document.getElementById('rollbooks');
    rollbooks.style.transform = `translateX(${movebooksX}%)`;
  });