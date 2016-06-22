module.exports = function(fn, duration = 500) {
  var timeout;

  return function(...args) {
    if (timeout) return;
    timeout = setTimeout(function() {
      timeout = null;
      fn.apply(null, args);
    }, duration);
  }
};
