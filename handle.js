var slider = document.getElementById("myRange");

var start_value = slider.getAttribute("value");

var x = start_value;
var temp = 1;
var color = 'linear-gradient(90deg, rgb(117, 252, 117)' + x * 10 + '% , rgb(214, 214, 214)' + x * 10 + '%)';
slider.style.background = color;

slider.addEventListener("mousemove", function() {
    if (slider.value === temp) return false;
    imageOld = document.querySelector(`li[data-slide="${temp}"]`)
    imageOld.classList.remove('active')

    temp = slider.value
    x = slider.value;
    
    var image = document.querySelector(`li[data-slide="${x}"]`)

    image.className += ' active'

    color = 'linear-gradient(90deg, rgb(117, 252, 117)' + x * 10 + '% , rgb(214, 214, 214)' + x * 10 + '%)';
    slider.style.background = color;
});