const numbers = [1, 2, 3, 4, 5];
const index = numbers.findIndex((num) => num === 3);
console.log("Index of 3:", index);
// **********************************************

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
const userIdToFind = 2;

const userindex = users.findIndex((num) => num.id === userIdToFind);
console.log({ userindex });
// *************************************************

const items = [
  { id: 1, details: { type: "A", count: 10 } },
  { id: 2, details: { type: "B", count: 20 } },
  { id: 3, details: { type: "C", count: 30 } },
];

const itemindex = items.findIndex(
  (num) => num.details.type === "B" && num.details.count > 15
);
console.log({ itemindex });

console.log("Index of item with type B and count > 15:", itemindex);

// ********************************************************

// You are given the following array of numbers:

const nums = [3, 7, 9, 12, 15];

const div3Greater10 = () => {
  const data = nums.findIndex((item) => item % 3 === 0 && item > 10);

  return data > -1 ? data : -1;
};
console.log(div3Greater10());

const users2 = [
  { id: 1, name: "Alice", age: 17 },
  { id: 2, name: "Bob", age: 20 },
  { id: 3, name: "Charlie", age: 16 },
  { id: 4, name: "David", age: 22 },
];

const Atleast18StartD=(users)=>{
  const success=users.findIndex((item)=>item.age>=18&&item.name.startsWith('D'))
  return success>-1? success : -1
}

console.log(Atleast18StartD(users2))

const products = [
  { id: 101, info: { category: 'food', inStock: true, price: 9.99 } },
  { id: 102, info: { category: 'tech', inStock: false, price: 299.99 } },
  { id: 103, info: { category: 'food', inStock: false, price: 4.99 } },
  { id: 104, info: { category: 'tech', inStock: true, price: 199.99 } }
];

const categoryTechInStockPrice200=(products)=>{
  const success=products.findIndex((item)=>item.info.category==='tech'&&item.info.inStock&&item.info.price>200)
  return success>-1? success : -1
}

console.log("=================>",categoryTechInStockPrice200(products))