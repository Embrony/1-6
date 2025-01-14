const burgerMenu = document.getElementById("burgerMenu");
const transparent = document.querySelector('.transparent-back-BM');
const openMenubar = document.getElementById("openMenubar");
const closeMenubar = document.getElementById("closeMenubar");
const scrollBlok = document.querySelector('.body');

openMenubar.addEventListener("click", () => {
	burgerMenu.style.display = 'block' 
	transparent.style.display = 'block'
	burgerMenu.classList.add('open-menu');
	transparent.classList.add('menu-back__open');
	scrollBlok.style.overflow = 'hidden';
});
closeMenubar.addEventListener("click", () => {
	burgerMenu.style.display = 'none'
	transparent.style.display = 'none'

});
transparent.addEventListener("click", () => {
	burgerMenu.style.display = 'none'
	transparent.style.display = 'none'
	scrollBlok.style.overflow = 'scroll';
	scrollBlok.style.overflow = 'scroll';
});
