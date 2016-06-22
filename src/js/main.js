// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
var animate = require("./lib/animateScroll");
var qsa = require("./lib/qsa");
var items = qsa(".item");
var debounce = require("./lib/debounce");

var mapContainer = document.querySelector(".map");
var header = document.querySelector(".hed");
var legend = document.querySelector(".legend");
var icons = qsa(".icon");

window.addEventListener("scroll", debounce(function(e) {
  var bounds = legend.getBoundingClientRect();
  if (bounds.bottom < 0) {
    mapContainer.classList.add("after-scroll");
  } else {
    mapContainer.classList.remove("after-scroll");
  }
}));

var onClickIcon = function(e) {

  //This is the icon's order number.
  var pos = this.getAttribute("data-index");
console.log(icons);
  items.forEach(function(item) {
    if (item.dataset.order == pos) {
      console.log(item);
      animate(item);
      icon.classList.add("onclick");
    }
  });

}

qsa(".icon").forEach(i => i.addEventListener("click", onClickIcon));
