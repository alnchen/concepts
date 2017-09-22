//function testing
describe("FizzBuzz", function() {
  it("should return Fizz for numbers only divisible by 3", function() {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it("should return Buzz for numbers only divisible by 5", function() {
    expect(fizzBuzz(10)).toBe('Buzz');
  });

  it("should return FizzBuzz for numbers divisible by 3 and 5", function() {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return False for numbers not divisible by 3 or 5", function() {
    expect(fizzBuzz(16)).toBe(false);
  });
});

//for DOM testing
describe("DOMContentLoaded", function() {
  it("should append a title to the page on successful load", function() {
    var body = document.getElementById('app');
    expect(body.innerHTML).toBe('Jasmine Testing Session');
  });
});
