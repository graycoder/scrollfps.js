/* ==========================================================
 * scrollfps.js - v0.1.1 - 2013-12-03
 * https://github.com/graycoder/scrollfps.js
 * ==========================================================
 * Copyright (c) 2013 Paul Pechenin <paul.pechenin@gmail.com>
 * Licensed under the MIT license
 * ========================================================== */

+function($, pointerEventsClass) { "use strict";

  $(function(){
    var $target = $('[data-scrollfps]')

    if ($target.length) {
      var timer

      $(window).on('scroll', function() {
        clearTimeout(timer)

        if(!$target.hasClass(pointerEventsClass)) {
          $target.addClass(pointerEventsClass)
        }

        timer = setTimeout(function() {
          $target.removeClass(pointerEventsClass)
        }, 100);
      })
    }
  })

}(window.jQuery, 'disable-hover');
