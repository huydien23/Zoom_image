var imgList = document.querySelectorAll('.container img');
var mirror = document.querySelector('#mirror');
var scope = 4;

imgList.forEach(function(img) {
    
    img.addEventListener('mousemove', function(event) {
        var percentX = (event.offsetX / this.offsetWidth) * 100;
        var percentY = (event.offsetY / this.offsetHeight) * 100;
        mirror.style.top = `${event.clientY}px`;
        mirror.style.left = `${event.clientX}px`;
        mirror.style.backgroundSize = `1000px 1000px`;
        mirror.style.backgroundPosition = `${percentX}% ${percentY}%`;

        var imgSrc = event.target.getAttribute('src');
        mirror.style.backgroundImage = `url(${imgSrc})`;
    });

    img.addEventListener('mouseleave', function() {
        mirror.style.backgroundImage = 'none';
    });
});

