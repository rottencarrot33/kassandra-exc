
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






