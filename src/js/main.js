// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
var animate = require("./lib/animateScroll");
var qsa = require("./lib/qsa");
var items = qsa(".item");
var debounce = require("./lib/debounce");
var icons = qsa(".icon");


var mapContainer = document.querySelector(".map");
var header = document.querySelector(".hed");
var legend = document.querySelector(".legend");
//This is the icon's order number.
var lastinview;

window.addEventListener("scroll", debounce(function(e) {
  var bounds = legend.getBoundingClientRect();
  if (bounds.bottom < 0) {
    mapContainer.classList.add("after-scroll");
  } else {
    mapContainer.classList.remove("after-scroll");
  };

  items.forEach(function(item) {
    var itembounds = item.getBoundingClientRect();
    if (itembounds.top < window.innerHeight) {
      lastinview = item;
    }

  });

  icons.forEach(function(icon){
    if (lastinview.dataset.id == icon.dataset.id) {
      var focused = document.querySelector(".focused");

      if (focused) {
        focused.classList.remove("focused");
      }
        icon.classList.add("focused");
    }
  });

}));
console.log(lastinview);
var onClickIcon = function(e) {
  var pos = this.getAttribute("data-id");

  items.forEach(function(item) {
    console.log(item.dataset.id, pos);
    if (item.dataset.id == pos) {
      animate(item);
    }
  });

}

qsa(".icon").forEach(i => i.addEventListener("click", onClickIcon));
