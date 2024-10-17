// var result = document.querySelector('#result');

// document.addEventListener('mousemove', function(event) {
//   result.style.top = `${event.clientY}px`;
//     result.style.left = `${event.clientX}px`;
// });

var img = document.querySelector('img');
var mirror = document.querySelector('#mirror');
img.addEventListener('mousemove', function(event) {
    var w = this.offsetWidth
    var h = this.offsetHeight
    var mouseWithImgBorder = event.pageX - this.offsetLeft
    var mouseWithImgBorderY = event.pageY - this.offsetTop

    var x = (mouseWithImgBorder / w) * 100
    var y = (mouseWithImgBorderY / h) * 100

    mirror.style.backgroundPosition = `${x}% ${y}%`

});

