// number-counter
jQuery(document).ready(function($){

  function startCounting() {
    var windowHeight = $(window).height();
    var scrollPosition = $(window).scrollTop();
    var triggerPosition = $('.count-1').offset().top - windowHeight;
  
    if (scrollPosition > triggerPosition) {
      $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
            $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
          }
        });
      });
  
      $('.count-1').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 2500,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
            $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
          },
          complete: function() {
            $(this).text($(this).text() + ' +');
          }
        });
      });
      
      $(window).off('scroll', startCounting);
    }
  }

  $(window).on('scroll', startCounting);
  startCounting();
});
   



//  Slick Slider
  $('#what-they-say-about-us-section-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
  });




// Stellarnav
  jQuery('.stellarnav').stellarNav({
    theme: 'dark', // adds default color to nav. (light, dark)
    breakpoint: 992, // number in pixels to determine when the nav should turn mobile friendly
    menuLabel: 'Menu', // label for the mobile nav
    sticky: false, // makes nav sticky on scroll (desktop only)
    position: 'static', // 'static', 'top', 'left', 'right' - when set to 'top', this forces the mobile nav to be placed absolutely on the very top of page
    openingSpeed: 250, // how fast the dropdown should open in milliseconds
    closingDelay: 250, // controls how long the dropdowns stay open for in milliseconds
    showArrows: true, // shows dropdown arrows next to the items that have sub menus
    phoneBtn: '', // adds a click-to-call phone link to the top of menu - i.e.: "18009084500"
    phoneLabel: 'Call Us', // label for the phone button
    locationBtn: '', // adds a location link to the top of menu - i.e.: "/location/", "http://site.com/contact-us/"
    locationLabel: 'Location', // label for the location button
    closeBtn: false, // adds a close button to the end of nav
    closeLabel: 'Close', // label for the close button
    mobileMode: false,
    scrollbarFix: false // fixes horizontal scrollbar issue on very long navs
  });




//  Fancybox
  Fancybox.bind("[data-fancybox]", {
  });