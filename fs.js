
setTimeout(function () {
    window.location.href = 'https://rottencarrot33.github.io/kassandra-exc/';
}, 3 * 60 * 1000);



// Add 'Bus stop' on <li>

let ulElement = document.querySelector('ul');
let liElement = ulElement.querySelector('li');
liElement.textContent = liElement.textContent.trim();

let busStopElement = document.createElement('span');
busStopElement.textContent = ' (Bus stop)';
busStopElement.style.color = '#0A4D68';
busStopElement.style.fontWeight = 'bold';
liElement.appendChild(busStopElement);









