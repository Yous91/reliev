// JS Plugins Init. 
$(window).on('load', function () {
  // initialization of HSMegaMenu component
  $('.js-mega-menu').HSMegaMenu({
    event: 'hover',
    pageContainer: $('.container'),
    breakpoint: 767.98,
    hideTimeOut: 0
  });

  // initialization of svg injector module
  $.HSCore.components.HSSVGIngector.init('.js-svg-injector');
});

$(document).on('ready', function () {
  // initialization of header
  $.HSCore.components.HSHeader.init($('#header'));

  // initialization of unfold component
  $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
    afterOpen: function () {
      $(this).find('input[type="search"]').focus();
    }
  });

  // initialization of malihu scrollbar
  $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar'));

  // initialization of forms
  $.HSCore.components.HSFocusState.init();

  // initialization of form validation
  $.HSCore.components.HSValidation.init('.js-validate', {
    rules: {
      confirmPassword: {
        equalTo: '#signupPassword'
      }
    }
  });

  // initialization of show animations
  $.HSCore.components.HSShowAnimation.init('.js-animation-link');

  // initialization of fancybox
  $.HSCore.components.HSFancyBox.init('.js-fancybox');

  // initialization of text animation (typing)
  var typed = new Typed(".u-text-animation.u-text-animation--typing", {
    strings: ["more professional.", "perfect in every way.", "astonishing."],
    typeSpeed: 60,
    loop: true,
    backSpeed: 25,
    backDelay: 1500
  });

  // initialization of slick carousel
  $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

  // initialization of go to
  $.HSCore.components.HSGoTo.init('.js-go-to');
});

// load turbolinks + jquery
document.addEventListener("turbolinks:load", function() {
  // alert("ok!")
 });

// To make the dropdown button of header functionnal
$(document).ready(function(){
  $('.dropdown-toggle').dropdown()
});

// Alert timer disapear
var delayInMilliseconds = 3000;
setTimeout(function() {
  document.getElementById("hide-alert").remove();
}, delayInMilliseconds);