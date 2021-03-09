var index = 1;

showSlide(index);

function move(n){
    showSlide(index += n);
}

function moveDirect(n){
    showSlide(index = n);
}

function showSlide(n){
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if(n > slides.length){
        index = 1;
    } else if (n < 1){
        index = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index-1].style.display = "block";
    dots[index-1].className += " active";
}