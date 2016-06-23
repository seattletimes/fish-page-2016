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

window.addEventListener("scroll", debounce(function(e) {
  var bounds = header.getBoundingClientRect();
  if (bounds.bottom < 0) {
    mapContainer.classList.add("after-scroll");
  } else {
    mapContainer.classList.remove("after-scroll");
  };

  var lastInView = null;

  items.forEach(function(item) {
    var itemBounds = item.getBoundingClientRect();

    if (itemBounds.top < window.innerHeight * 0.5) {
      lastInView = item;
    }
  });

  var focused = document.querySelector(".focused");
  var bold = document.querySelector(".bold");
  if (focused) {
    focused.classList.remove("focused");
  }
  if (bold) {
    bold.classList.remove("bold")
  }

  if (!lastInView) return;

  lastInView.classList.add("bold");
  var index = lastInView.getAttribute("data-id");
  var icon = document.querySelector(`.icon[data-id="${index}"]`);
  if (icon) {
    icon.classList.add("focused");
  }

}));

var onClickIcon = function(e) {
  var pos = this.getAttribute("data-id");
  var item = document.querySelector(`.item[data-id="${pos}"]`);
  animate(item);
};

qsa(".icon").forEach(i => i.addEventListener("click", onClickIcon));
