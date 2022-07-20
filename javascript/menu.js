const menuBtns = document.querySelectorAll('.menu-item__link');

menuBtns.forEach(function(item){
  item.addEventListener('click', function(e) {
    e.classList.toggle('menu-item__link--active');
})});