// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(1, 3));
//
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Eddie', 'Crystal'];
// var groupB =['Kerin'];
// var final = [3, ...groupA, 6, ...groupB];
//
// console.log(final);

var person = ['Eddie', 20];
var personTwo = ['Kerin', 18];


//Hi Eddie, you are 20 etc.
function greet(name, age) {
  return ('Hi ' + name + ', you are ' + age);
};

console.log(greet(...person));
console.log(greet(...personTwo));


var name = ['Sokie', 'Tony'];
var final = ['Crystal', ...name];
//Hi Crystal etc.

final.forEach((person) => {
  console.log('Hi ' + person);
});
