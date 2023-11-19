var tarihce = document.getElementById('tarihce');
var hakkinda = document.getElementById('hakkinda');
var events = document.getElementById('events');
var kadro = document.getElementById('kadro');
var iletisim = document.getElementById('iletisim');

function showTarihce(){
    anasayfa.style.display = 'none'

    tarihce.style.display = 'block'
    hakkinda.style.display = 'none'
    events.style.display = 'none'
    kadro.style.display = 'none'
}

function showEvents(){
    anasayfa.style.display = 'none'

    tarihce.style.display = 'none'
    hakkinda.style.display = 'none'
    events.style.display = 'block'
    kadro.style.display = 'none'
    iletisim.style.display = 'none'
}
function showKadro(){
    anasayfa.style.display = 'none'
    tarihce.style.display = 'none'
    hakkinda.style.display = 'none'
    events.style.display = 'none'
    kadro.style.display = 'block'
    iletisim.style.display = 'none'
}
function showAll(){
    anasayfa.style.display = 'none'

    tarihce.style.display = 'block'
    hakkinda.style.display = 'block'
    events.style.display = 'block'
    kadro.style.display = 'block'
}
function showIletisim() {
    anasayfa.style.display = 'none'

    tarihce.style.display = 'none'
    hakkinda.style.display = 'none'
    events.style.display = 'none'
    kadro.style.display = 'none'
    iletisim.style.display = 'block'
}
function showAll() {
    anasayfa.style.display = 'block'
    tarihce.style.display = 'none'
    hakkinda.style.display = 'none'
    events.style.display = 'none'
    kadro.style.display = 'none'
    iletisim.style.display = 'none'
}



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}