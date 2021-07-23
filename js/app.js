//============= Event handler for preloader =====================//
// const preloader = document.querySelector('.preloader');

// window.addEventListener('load', function() {
//     preloader.classList.add('hide-preloader');
// });

//============= Tab switching for portfolio ===================//
const tab_buttons = document.querySelectorAll('tab');

// ================= Responsive navbar =====================//
$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})