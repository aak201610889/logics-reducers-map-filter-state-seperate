// sort numbers 
const numbers2 = [3, 1, 4, 1, 5, 9, 2];

const asnc=[...numbers2].sort((a,b)=>a-b)
const desc=[...numbers2].sort((a,b)=>b-a)

// ***********************************************************

// sort words 
const names = ["Zoey", "alice", "Bob", "charlie"];

const ascNames=[...names].sort((a,b)=>a.localeCompare(b))
const descNames=[...names].sort((a,b)=>b.localeCompare(a))

// ***********************************************************

// sort by ort users by age (ascending). 
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 }
];

const sortUsers=users.sort((a,b)=>a.age-b.age)

// ***********************************************************

// Sort by price (ascending), then by rating (descending).

const products4 = [
  { name: "Laptop", price: 999, rating: 4.5 },
  { name: "Phone", price: 699, rating: 4.2 },
  { name: "Tablet", price: 699, rating: 4.8 }
];

const sortproducts=products4.sort((a,b)=>{
  
  if(a.price==b.price) return a.price-b.price
 return a.rating-b.rating
})

// ***********************************************************

const products2 = [
  { name: "Laptop", price: 999, rating: 4.5, inStock: true },
  { name: "Phone", price: 699, rating: 4.2, inStock: false },
  { name: "Tablet", price: 699, rating: 4.8, inStock: true }
];


const sorting=[...products2].sort((a,b)=>{

  if(a.inStock!==b.inStock) return a.inStock ? -1 : 1
  if(a.price!==b.price) return a.price-b.price
  if(a.rating!==b.rating) return b.rating-a.rating

})

// **************************************************************************************************************************************************************

const numbers = [5, 2, 9, 1, 5, 6];
// Your code here:
const sortedNumbers = [...numbers].sort((a,b)=>a-b)

console.log({sortedNumbers})

const products = [
  { name: "Laptop", price: 999, rating: 4.5 },
  { name: "Phone", price: 699, rating: 4.2 },
  { name: "Tablet", price: 699, rating: 4.8 }
];
// Your code here:
const sortedProducts = [...products].sort((a,b)=>{
  if(a.price!==b.price) return a.price-b.price
   return b.rating-a.rating
   
})

console.log({sortedProducts})

const users2 = [
  { id: 1, name: "Alice", status: "inactive", joined: "2023-01-15" },
  { id: 2, name: "bob", status: "active", joined: "2024-02-20" },
  { id: 3, name: "Charlie", status: "active", joined: "2023-05-10" }
];

const sortedUsers =[...users2].sort((a,b)=>{
  if (a.status !== b.status) return a.status === "active" ? -1 : 1;
  if(a.name!==b.name) a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
  if(a.joined!==b.joined) return new Date(b.joined) - new Date(a.joined); 
})

console.log({sortedUsers})