/* ========================================================================
 * scrollfps.js - v0.1.0 - 2013-12-02
 * https://github.com/graycoder/scrollfps.js
 * ========================================================================
 *
 * Copyright (c) 2013 Paul Pechenin <paul.pechenin@gmail.com>
 * Licensed under the MIT license
 * ======================================================================== */

+function($, elem, pointerEventsClass) { "use strict";

  var $elem = $(elem), timer

  $(window).on('scroll', function() {
    clearTimeout(timer)

    if(!$elem.hasClass(pointerEventsClass)) {
      $elem.addClass(pointerEventsClass)
    }

    timer = setTimeout(function() {
      $elem.removeClass(pointerEventsClass)
    }, 100);
  })

} (window.jQuery, 'body', 'disable-hover');
