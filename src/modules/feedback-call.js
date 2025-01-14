const feedbackCall = document.querySelector('.feedback-call');
const transparent = document.querySelector('.transparent-back-FB');
const openFeedbackCall = document.querySelector('.button__call');  
const openFeedbackCallBM = document.querySelector('.button-contact__call');
const closeFeedbackCall = document.querySelector('.feedback-call__close');
const scrollBlok = document.querySelector('.body');

openFeedbackCall.addEventListener("click", () => {
	feedbackCall.style.display = 'block' 
	transparent.style.display = 'block'
	transparent.classList.add('menu-back__open');
	feedbackCall.classList.add('open-menu');
	scrollBlok.style.overflow = 'hidden';
});
openFeedbackCallBM.addEventListener("click", () => {
	feedbackCall.style.display = 'block' 
	transparent.style.display = 'block'
	transparent.classList.add('menu-back__open');
	feedbackCall.classList.add('open-menu');
	scrollBlok.style.overflow = 'hidden';
});
closeFeedbackCall.addEventListener("click", () => {
	feedbackCall.style.display = 'none'
	transparent.style.display = 'none'
	scrollBlok.style.overflow = 'scroll';
});
transparent.addEventListener("click", () => {
	feedbackCall.style.display = 'none'
	transparent.style.display = 'none'
	scrollBlok.style.overflow = 'scroll';
});
