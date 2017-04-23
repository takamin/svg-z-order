SVG-Z-ORDER
===========

A module to manipulate the Z-Order of a SVG element.

Sample
------

### Overview

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

### Sample on the WEB

#### APIs to Change Z-Order: `toTop`/`toBottom`/`moveUp`/`moveDown` ([Code](sample/web/index.js))

<div id="svg-z-order-sample"></div>
<script src="sample/web/sample-index.js"></script>



APIs
----

* svgz.element(domElement) - Creates SVGZElement instance referencing a dom element.
* SVGZElement.toTop() - Brings up the element to top of the all sibling elements.
* SVGZElement.toBottom() - Brings down the element to bottom of the all sibling elements.
* SVGZElement.moveUp(element/n) - Moves up the element to the front of specified target element or n-times.
* SVGZElement.moveDown(element/n) - Moves down the element to behind of the specified target element or n-times.

LICENSE
-------

This software is released under the MIT License, see [LICENSE](LICENSE)

