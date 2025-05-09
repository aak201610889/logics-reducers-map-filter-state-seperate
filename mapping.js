const nums = [2, 4, 6, 8];


const   multiby2= nums.map(item=>item*2)

const names = ["alice", "BOB", "ChArLie"];

// TODO: Return ["Alice", "Bob", "Charlie"]

const upperFirstLitter=(name)=>{

  return name.slice(0,1).toUpperCase()+name.slice(1,name.length).toLowerCase()
}


const capitalize=(names)=>{
return  names.map(item=>upperFirstLitter(item))
}



const products = [
  { name: "Book", price: 12.99, taxRate: 0.1 },
  { name: "Laptop", price: 999.99, taxRate: 0.2 },
  { name: "Pen", price: 1.5, taxRate: 0.05 }
];

// TODO: Return [14.29, 1199.99, 1.58]


const newMapping=products.map(item=>{
  const taxed =item.taxRate*item.price
  return parseFloat(taxed.toFixed(2));
})



const orders = [
  {
    customerId: 1,
    items: [
      { name: "Apple", quantity: 2 },
      { name: "Banana", quantity: 3 }
    ]
  },
  {
    customerId: 2,
    items: [
      { name: "Orange", quantity: 1 },
      { name: "Kiwi", quantity: 4 },
      { name: "Peach", quantity: 2 }
    ]
  }
];

const numberOfItem=(items)=>{
  let sum=0
  for (const element of items) {
    
    sum+=element.quantity
  }
  return sum
}

const orderMapping=orders.map(item=>{
  return {customerId:item.customerId,totalItems:numberOfItem(item.items)}
})

console.log(orderMapping)

const students = [
  {
    name: "Alice",
    courses: [
      { name: "Math", score: 78 },
      { name: "Science", score: 82 },
      { name: "Art", score: 95 }
    ]
  },
  
  {
    name: "Bob",
    courses: [
      { name: "Math", score: 59 },
      { name: "Science", score: 61 }
    ]
  },
  {
    name: "Charlie",
    courses: [
      { name: "History", score: 88 },
      { name: "Math", score: 92 }
    ]
  }
];

const checkPasses = (courses) => {
  // Check if ALL courses have score >= 60
  return courses.every(course => course.score >= 60);
}

const studentsMapping = students.map(student => {
  const totalScore = student.courses.reduce((sum, course) => sum + course.score, 0);
  
  return {
    name: student.name,
    passedAll: checkPasses(student.courses),
    totalScore: totalScore
  };
});

console.log(studentsMapping);