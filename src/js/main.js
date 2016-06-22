// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
var animate = require("./lib/animateScroll");
var qsa = require("./lib/qsa");
var items = qsa(".item");
qsa(".icon").forEach(function(i) {
  i.addEventListener("click", function(e) {
    var order = i.getElementsByClassName("order")[0];

    //This is the icon's order number.
    var pos = order.innerHTML;

    items.forEach(function(item) {
      if (item.dataset.order == pos) {
        console.log(item);
        animate(item);
      }
    });

  });
});
