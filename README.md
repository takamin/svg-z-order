SVG-Z-ORDER
===========

A module to manipulate the Z-Order of a SVG element.

<img src="https://github.com/takamin/svg-z-order/blob/gh-pages/images/banner.png?raw=true"
width="100%" style="max-width:900px"/>

Overview
--------

```javascript
var svgz = require("svg-z-order");

var g = svg.getElementById("foo");
svgz.element(g).toTop();

// With D3.js
var d3g = d3.select("#foo");
svgz.element(d3g.node()).toTop();

```

If `require` is NOT available,
use global `svgz_element` function instead of 'svgz.element' method.

Sample
------

#### APIs to Change Z-Order: `toTop`/`toBottom`/`moveUp`/`moveDown` ([Code](sample/web/index.js))

<div id="svg-z-order-sample"></div>
<script src="sample/web/sample-index.js"></script>

Installation
------------

```bash
$ npm install --save svg-z-order
```

APIs
----

* svgz.element(domElement) - Creates SVGZElement instance referencing a dom element.
* SVGZElement.toTop() - Brings up the element to top of the all sibling elements.
* SVGZElement.toBottom() - Brings down the element to bottom of the all sibling elements.
* SVGZElement.moveUp(element/n) - Moves up the element to the front of specified target element or n-times.
* SVGZElement.moveDown(element/n) - Moves down the element to behind of the specified target element or n-times.
* SVGZElement.moveTo(element/index) - Moves the element to the specified position.

Repository
----------

* [npm](https://www.npmjs.com/package/svg-z-order)
* [GitHub](https://github.com/takamin/svg-z-order) ([gh-pages](https://takamin.github.io/svg-z-order/))

LICENSE
-------

This software is released under the MIT License, see [LICENSE](LICENSE)

