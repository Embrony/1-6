const feedback = document.querySelector('.feedback');
const transparent = document.querySelector('.transparent-back-FB');
const openFeedback = document.querySelector('.button__chat');  
const openFeedbackBM = document.querySelector('.button-contact__chat');
const closeFeedback = document.querySelector('.feedback__connection--close');
const scrollBlok = document.querySelector('.body');

openFeedbackBM.addEventListener("click", () => {
	feedback.style.display = 'block'
	transparent.style.display = 'block'
	transparent.classList.add('menu-back__open');
	feedback.classList.add('open-menu');
	scrollBlok.style.overflow = 'hidden';
});
openFeedback.addEventListener("click", () => {
	feedback.style.display = 'block'
	transparent.style.display = 'block'
	transparent.classList.add('menu-back__open');
	feedback.classList.add('open-menu');
	scrollBlok.style.overflow = 'hidden';
});
closeFeedback.addEventListener("click", () => {
	feedback.style.display = 'none'
	transparent.style.display = 'none'
	scrollBlok.style.overflow = 'scroll';
});
transparent.addEventListener("click", () => {
	feedback.style.display = 'none'
	transparent.style.display = 'none'
	scrollBlok.style.overflow = 'scroll';
});