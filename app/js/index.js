var index = 1;
showSlides(index);

function plusIndex(n) {
    showSlides(index += n);
}

function currentIndex(n) {
    showSlides(index = n);
}

function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".slider__content");
    var positionNode = document.querySelectorAll(".position");
    var position = Array.prototype.slice.call(positionNode);
    

    if (n > slides.length) {
        index = 1;
    }
    if (n < 1) {
        index = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < position.length; i++) {
        position[i].className = position[i].className.replace(" active", "");
    }
    slides[index - 1].style.display = "block";
    position[index - 1].className += " active";
    console.log(position);
    console.log("n = ", n);
    console.log("index = ", index);
}