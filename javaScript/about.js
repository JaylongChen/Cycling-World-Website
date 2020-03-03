var menu = document.getElementById('menu');
var nava = document.getElementById('nava');
var close = document.getElementById('close');

menu.addEventListener('click', function(e) {
    nava.classList.toggle('hide-mobile');
});

close.addEventListener("click", (e) =>{
    nava.classList.add('hide-mobile');
})