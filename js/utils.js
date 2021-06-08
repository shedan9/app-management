function isType(type) {
  return function (target) {
    return Object.prototype.toString.call(target) === '[object ' + type + ']';
  }
}

var isArray = isType('Array');

var isFunction = isType('Function');

function findArray(arr, callback) {
  if (isArray(arr) && isFunction(callback)) {
    var len = arr.length;
    var target;
    for (var i = 0; i < len; i++) {
      var cur = arr[i];
      if (callback(cur, i)) {
        target = cur;
      }
    }
    return target;
  }
}

function filterArray(arr, callback) {
  if (isArray(arr) && isFunction(callback)) {
    var len = arr.length;
    var target = [];
    for (var i = 0; i < len; i++) {
      var cur = arr[i];
      if (callback(cur, i)) {
        target.push(cur);
      }
    }
    return target;
  }
}