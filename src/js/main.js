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
var lastinview = items[0];

window.addEventListener("scroll", debounce(function(e) {
  var bounds = header.getBoundingClientRect();
  if (bounds.bottom < 0) {
    mapContainer.classList.add("after-scroll");
  } else {
    mapContainer.classList.remove("after-scroll");
  };

  items.forEach(function(item) {
    var itembounds = item.getBoundingClientRect();
    if (itembounds.top < window.innerHeight * 0.5) {
      lastinview = item;
    }

  });

  icons.forEach(function(icon) {
    if (lastinview.dataset.id == icon.dataset.id) {
      var focused = document.querySelector(".focused");

      var bold = document.querySelector(".bold");
      if (focused) {
        focused.classList.remove("focused");
      }
      if (bold) {
        bold.classList.remove("bold")
      }
        icon.classList.add("focused");
        lastinview.classList.add("bold");

    }
  });

}));

var onClickIcon = function(e) {
  var pos = this.getAttribute("data-id");
  console.log(this);
  items.forEach(function(item) {
    if (item.dataset.id == pos) {
      animate(item);
    }
  });

};

qsa(".icon").forEach(i => i.addEventListener("click", onClickIcon));
