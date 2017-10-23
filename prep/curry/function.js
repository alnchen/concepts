const timesTwo = function() {
  return function(num) {
    return num * 2;
  };
};

// console.log(timesTwo);
// console.log(timesTwo()(2));

(function(num) {
  console.log(num * 3);
})(4);
