function Calculator() {
  return {
    add: function(num1, num2) {
      return num1 + num2;
    }
  };
}

var add2 = Calculator();
console.log(add2.add(3,4));
console.log(add2.add(10,20));

var anon = function(){
  console.log('anonymous');
};

// (function(item) {
//   console.log(`${item} is for sale`);
// })('my car');



class Car {
  constructor(name) {
    this.name = name;
  }

  rev() {
    console.log(this.name + ' revs the engine up');
  }
}

var acura = new Car('TL');

acura.rev();


/*
make this work
add(2)(5) => 7
add(2, 5) => 7
*/
