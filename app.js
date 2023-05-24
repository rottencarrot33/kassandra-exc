
document.addEventListener("DOMContentLoaded", function (event) {
    // Get the query parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const targetSlide = urlParams.get('slide');

    // Activate the specified slide
    if (targetSlide) {
        const carousel = document.getElementById('rotating-carousel');
        const carouselInstance = new bootstrap.Carousel(carousel);
        carouselInstance.to(parseInt(targetSlide) - 1);
    }
});



// Set the timeout for refreshing the page 
function refreshPage() {
    window.location.reload();
}

setTimeout(refreshPage, 30 * 60 * 1000);



// Remove cars slider on mobile

document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth < 500) {
        var carouselItem = document.getElementById('carousel-item-mobile');
        carouselItem.parentNode.removeChild(carouselItem);
    }
});





// Navbar

let toggleButton = document.getElementsByClassName("toggle-button")[0];
let navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");

    // Check if the dropdown is currently open or closed
    if (navbarLinks.classList.contains("active")) {
        // Dropdown is currently open
        toggleButton.setAttribute("aria-expanded", "true");
    } else {
        // Dropdown is currently closed
        toggleButton.setAttribute("aria-expanded", "false");
    }
});

document.addEventListener("click", (event) => {
    // Check if the clicked element is inside the navbar or toggle button
    if (
        !navbarLinks.contains(event.target) &&
        !toggleButton.contains(event.target)
    ) {
        navbarLinks.classList.remove("active");
        toggleButton.setAttribute("aria-expanded", "false");
    }
});
