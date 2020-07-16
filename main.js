const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");

searchIcon.addEventListener('click', function () {
  if (searchBox.style.right == '0px') {
    searchBox.style.right = '-1000px';
    searchBox.style.pointerEvents = 'none';
  } else {
    searchBox.style.right = '0px';
    searchBox.style.pointerEvents = 'auto';
  }
});

menuIcon.addEventListener('click', function () {
  if (slideoutMenu.style.opacity == "1") {
    slideoutMenu.style.opacity = '0';
    slideoutMenu.style.pointerEvents = 'none';
  } else {
    slideoutMenu.style.opacity = '1';
    slideoutMenu.style.pointerEvents = 'auto';
  }
})

const header = document.querySelector('.active2');

window.onscroll = function(){
  var top = window.scrollY;
  console.log(top);
  if(top >= 685){
    header.classList.add('active2');
  } else {
    header.classList.remove('active2');
  }
}
