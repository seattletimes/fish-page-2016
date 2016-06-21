// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
var animate= require("./lib/animateScroll");
var qsa = require("./lib/qsa");
var items = qsa(".item");
qsa(".icon").forEach(function(i) {

  i.addEventListener("click", function(e) {
    console.log("hi");
    var order = i.getAttribute("data-order");
    items.forEach(function(item) {
      if (item.getAttribute("data-order") == order) {
        animateScroll(item);
        console.log(item);
      }
    });

  });
});




document.querySelector(".map").addEventListener("click", function(e) {
  console.log(e.target);
});

console.log(document.querySelector(".map"));
