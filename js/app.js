//============= Event handler for preloader =====================//
const preloader = document.querySelector('.preloader');

window.addEventListener('load', function() {
    preloader.classList.add('hide-preloader');
});

//============= Tab switching for portfolio ===================//
const tab_buttons = document.querySelectorAll('tab');

