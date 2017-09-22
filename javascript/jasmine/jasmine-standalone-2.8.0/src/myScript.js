//function
function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  } else if (num % 3 === 0) {
    return 'Fizz';
  } else if (num % 5 === 0) {
    return 'Buzz';
  }
  return false;
}

//dom
document.addEventListener('DOMContentLoaded', function() {
  var body = document.getElementById('app');
  console.log(body);
  body.innerHTML = 'Jasmine Testing Session';
});
