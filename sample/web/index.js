(function() {
    "use strict";
    var svgz = require("svg-z-order");
    var d3 = require("d3");
    var rootId = "#svg-z-order-sample";

    var appWnd = d3.select(rootId);
    appWnd.append("span").html("Click to invoke method: ");
    var select = appWnd.append("select");
    var methods = [ "toTop", "toBottom", "moveUp", "moveDown" ];
    methods.forEach(function (name, i) {
        select.append("option").attr("value", i).html(name + "()");
    });
    appWnd.append("br");
    var circle = function(svg, cx, cy, r, fillColor) {
        var g = svg.append("g")
            .attr("class", fillColor)
            .on("click", function() {
                var i = parseInt(appWnd.select("select").node().value);
                (svgz.element(g.node()))[methods[i]]();
            });
        g.append("circle")
            .attr("cx", cx).attr("cy", cy).attr("r", r)
            .attr("fill", fillColor);
        g.append("text")
            .attr("text-anchor", "middle")
            .attr("x", 150).attr("y", 100)
            .attr("fill", "white")
            .html(fillColor);
    }
    var svg = appWnd.append("svg");
    svg.attr("viewBox", "0 0 300 200")
        .attr("width", "300px")
        .attr("height", "200px");
    circle(svg, 175, 125, 70, "green");
    circle(svg, 125, 125, 70, "red");
    circle(svg, 150, 75, 70, "blue");
}());
