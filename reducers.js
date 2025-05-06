// sun of array
let numbers = [1, 2, 3, 4, 5];

const reduceNumber = numbers.reduce((acc, item) => acc + item, 0);

// ****************************************************************************************

//  maximum number

numbers = [10, 22, 5, 99, 34];

const maximum = numbers.reduce((acc, item) => Math.max(acc, item), 0);

// ****************************************************************************************

//  minimum number

const minimumNumber = numbers.reduce((acc, item) => Math.min(acc, item));

// ****************************************************************************************

//  Flatten an Array

const nested = [[1, 2], [3, 4], [5], 6];
const flattenArray = nested.reduce((acc, item) => {
  acc = acc.concat(item);

  return acc;
}, []);

// ****************************************************************************************

//  Count an items
const fruits = ["apple", "banana", "apple", "orange", "banana", "banana"];

const accoutFruite = fruits.reduce((acc, item) => {
  acc[item] = acc[item] ? acc[item] + 1 : 1;
  return acc;
}, {});

// ****************************************************************************************

//  grouped an items
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
];

const groupedPeople = people.reduce((acc, item) => {
  acc[item.age] = acc[item.age] || [];
  acc[item.age].push(item);
  return acc;
}, {});

// ****************************************************************************************

//  remove duplicates an items
const nums = [1, 2, 2, 3, 4, 4, 5];
const removingDuplicate = nums.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }

  return acc;
}, []);
// console.log(removingDuplicate);


// ****************************************************************************************

//  Convert Array to Object 

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

const convertUsers=users.reduce((acc,item)=>{

  acc[item.id]=item.name
  return acc
},{})


// ****************************************************************************************

//  Calculate Average

const scores = [80, 90, 100];

const average = scores.reduce((acc, curr, idx, arr) => {
  acc += curr;
  return idx === arr.length - 1 ? acc / arr.length : acc;
}, 0);

console.log(average); // 90



// ****************************************************************************************

//  Calculate Average

const words = ['Hello', 'world', '!'];
const sentence = words.reduce((acc, word) => acc + ' ' + word);
console.log(sentence);