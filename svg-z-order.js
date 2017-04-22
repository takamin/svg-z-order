(function() {
    "use strict";

    module.exports = {
        element : function(svgElement) {
            if(!svgElement) {
                throw new Error("a null element specified.");
            }
            var svgz = new SVGZElement();
            svgzSetElement(svgz, svgElement);
            return svgz;
        }
    };

    function SVGZElement() {
        this._element = null;
    }

    SVGZElement.prototype.toTop = function() {
        try {
            var parentNode = parentNodeOf(this._element);
            parentNode.insertBefore(this._element, null);
            return this;
        } catch(err) {
            throw err;
        }
    };
    SVGZElement.prototype.toBottom = function() {
        try {
            var parentNode = parentNodeOf(this._element);
            var childElements = childElementsOf(parentNode);
            parentNode.insertBefore(this._element, childElements[0]);
            return this;
        } catch(err) {
            throw err;
        }
    };

    SVGZElement.prototype.moveUp = function(n) {
        try {
            if(n == null) {
                n = 1;
            } else if(typeof(n) !== "number") {
                n = getRelDist(this._element, n);
                if(n <= 0) {
                    return;//Already at front
                }
            } else if(n <= 0) {
                throw new Error(
                        "Invalid number for n that must be positive.");
            }
            return this.moveRelative(n);
        } catch(err) {
            throw err;
        }
    };
    SVGZElement.prototype.moveDown = function(n) {
        try {
            if(n == null) {
                n = -1;
            } else if(typeof(n) !== "number") {
                n = getRelDist(this._element, n);
                if(n >= 0) {
                    return;//Already at back
                }
            } else if(n <= 0) {
                throw new Error(
                        "Invalid number for n that must be positive.");
            } else {
                n = -n;
            }
            return this.moveRelative(n);
        } catch(err) {
            throw err;
        }
    };

    SVGZElement.prototype.moveRelative = function(n) {
        try {
            if(n == null) {
                throw new Error("Invalid number for n of null.");
            } else if(typeof(n) !== "number") {
                throw new Error("Invalid number for n.");
            }
            var parentNode = parentNodeOf(this._element);
            var target = getRelInsTarget(this._element, n);
            parentNode.insertBefore(this._element, target);
            return this;
        } catch(err) {
            throw err;
        }
    };

    function svgzSetElement(svgz, svgElement) {
        svgz._element = svgElement;
    }

    function parentNodeOf(element) {
        if(!("parentNode" in element)) {
            throw new Error("There is not parentNode");
        }
        var parentNode = element.parentNode;
        if(!parentNode) {
            throw new Error("parentNode is undefined");
        }
        return parentNode;
    };

    function getRelInsTarget(baseElement, m) {
        var parentNode = parentNodeOf(baseElement);
        var siblings = childElementsOf(parentNode);
        var n = siblings.length;
        var baseIndex = siblings.indexOf(baseElement);
        var targetIndex = baseIndex + m;

        if(targetIndex > baseIndex) {
            targetIndex += 1;
        }

        if(targetIndex < 0) {
            targetIndex = 0;
        } else if(targetIndex >= n) {
            targetIndex = n;
        }

        var actualTarget = (function() {
            if(targetIndex < n) {
                return siblings[targetIndex];
            }
            return null;
        }());

        if(actualTarget && parentNodeOf(actualTarget) !== parentNode) {
            throw new Error("parentNode is different for target.");
        }
        return actualTarget;
    }

    function getRelDist(from, to) {
        var parentNode = parentNodeOf(from);
        var siblings = childElementsOf(parentNode);
        var indexFrom = siblings.indexOf(from);
        var indexTo = siblings.indexOf(to);
        if(indexTo < 0) {
            throw new Error("parentNode is different for target.");
        }
        return indexTo - indexFrom;
    }

    function childElementsOf(parentNode) {
        var childElements = [];
        Array.from(parentNode.childNodes).map(function(node) {
            if(node.nodeType == 1) {
                childElements.push(node);
            }
        });
        return childElements;
    }
}());
