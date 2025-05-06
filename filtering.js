// Filter an array of products to only show those with price greater than 20.
const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 699 },
  { id: 3, name: 'Tablet', price: 199 },
  { id: 4, name: 'Mouse', price: 19 }
];

const greaterTwenty=products.filter((item)=>item.price>20)


// *********************************************************************************************************

// Filter users who are both active and have a premium account.

const users = [
  { id: 1, name: 'Alice', isActive: true, isPremium: false },
  { id: 2, name: 'Bob', isActive: true, isPremium: true },
  { id: 3, name: 'Charlie', isActive: false, isPremium: true },
  { id: 4, name: 'Diana', isActive: true, isPremium: false }
];


const activeAndPrimers=users.filter(item=>(item.isActive&&item.isPremium))



// *********************************************************************************************************

// Filter books that belong to specific genres Fantasy


const books = [
  { title: 'Book 1', genres: ['Fantasy', 'Adventure'] },
  { title: 'Book 2', genres: ['Sci-Fi', 'Dystopian'] },
  { title: 'Book 3', genres: ['Fantasy', 'Mystery'] },
  { title: 'Book 4', genres: ['Romance'] }
];

const FantesyFiltering=books.filter(item=>item.genres.includes('Fantasy'))



// *********************************************************************************************************

// Filter orders that are shipped and have a total over $100 or contain a specific product.

const orders = [
  { id: 1, status: 'shipped', total: 150, products: ['A', 'B'] },
  { id: 2, status: 'processing', total: 200, products: ['B', 'C'] },
  { id: 3, status: 'shipped', total: 80, products: ['A', 'D'] },
  { id: 4, status: 'shipped', total: 120, products: ['C'] }
];
const filteringOrder=orders.filter(item=>((item.status==="shipped"&&item.total>100)&&item.products.includes('A')))


// *********************************************************************************************************

// Filter events that occur in the future.
const events = [
  { name: 'Conference', date: new Date('2023-12-15') },
  { name: 'Workshop', date: new Date('2025-06-20') },
  { name: 'Meetup', date: new Date('2023-11-30') },
  { name: 'Webinar', date: new Date('2023-05-10') }
];
const today=Date.now()

const filterFuture=events.filter(item=>item.date>today)



// 1. Filtering with Dynamic Conditions (User Input)
const products2 = [
  { id: 1, name: "Laptop", price: 999, category: "tech", inStock: true },
  { id: 2, name: "Desk", price: 199, category: "furniture", inStock: false },
  { id: 3, name: "Mouse", price: 25, category: "tech", inStock: true }
];

const minimItem = Math.min(...products2.map(p => p.price));


const filters=products2.filter(item=>item.price==minimItem&&item.category==='tech'&&item.inStock)
console.log({filters})



const users2 = [
  { 
    id: 1, 
    name: "Alice", 
    isPremium: true, 
    address: { state: "CA", city: "SF" } 
  },
  { 
    id: 2, 
    name: "Bob", 
    isPremium: false, 
    address: { state: "NY", city: "NYC" } 
  }
];

const caliPremiumUsers =users2.filter(item=>item.isPremium&&item?.address?.state==='CA')

// console.log({caliPremiumUsers})


// 3. Chained Filtering & Transformation

const users3 = [
  { id: 1, name: "Alice", email: "alice@test.com", isActive: true },
  { id: 2, name: "Bob", email: "bob@test.com", isActive: false }
];

const activeUserData=users3.filter(item=>item.isActive).map(({name,email,isActive})=>{

    return {name,email}
  
}) 


// 4. Fuzzy Search (Partial Matching)
const orders2 = [
  { id: 1, date: new Date("2023-01-15"), total: 100 },
  { id: 2, date: new Date("2023-02-20"), total: 200 }
];

const startDate = new Date("2023-01-01");
const endDate = new Date("2023-01-31");

const janOrders = orders2.filter(item=>item?.date>=startDate&&item?.date<=endDate)

console.log(janOrders)




const numbers = [1, 2, 3, 4, 5];

function customFilter(arr, condition) {
  return arr.filter(condition);  // Simply pass the condition function to filter
}

const evenNumbers = customFilter(numbers, (num) => num % 2 === 0);
console.log(evenNumbers);


const bigData = Array(1_000_000).fill(0).map((_, i) => ({ id: i, value: i % 100 }));
for (let i = 0; i < bigData.length; i++) {
  if (bigData[i].value > 50) {
    console.log(bigData[i]);
  }
}


console.log( {filteredData} )




const products4 = [
  { id: 1, name: "Laptop", price: 999, rating: 4.5, inStock: true },
  { id: 2, name: "Phone", price: 699, rating: 3.8, inStock: false }
];

const userFilters = {
  maxPrice: 1000,
  minRating: 4,
  inStockOnly: true
};



const applyFilters = (products, filters) => {
 return products.filter(item=>item?.inStock===filters?.inStockOnly&&item?.price<=filters?.maxPrice&&item?.rating>=filters?.minRating)


};

const results = applyFilters(products4, userFilters);

console.log({results})