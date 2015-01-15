scrollfps.js
============

A little library that could make your site scroll faster.

## Installation

  With [component(1)](http://component.io):

    $ component install strangeworks/scrollfps.js

  With a stand-alone build

    <script src='scrollfps.min.js'></script>


## Usage ##
* Add ```data-scrollfps``` to ```<body>``` tag.

```html
<html>
  ...
  <body data-scrollfps>
  ...
  </body>
</html>
```

* Call scrollfps inside your domready handler
```js
var scrollps = require('scrollfps.js'),
    domready = require('domready')

domready(function() {
  scrollfps();
})
```
