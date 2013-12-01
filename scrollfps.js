+function($, $elem, disableHoverClass, timer) { "use strict";

  $(window).on('scroll', function() {
    clearTimeout(timer)

    if(!$elem.hasClass(disableHoverClass)) {
      $elem.addClass(disableHoverClass)
    }

    timer = setTimeout(function() {
      $elem.removeClass(disableHoverClass)
    }, 500);
  })

} (window.jQuery, $('body'), 'disable-hover', undefined);
