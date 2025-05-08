const Products= [
  { name: 'Tablet', price: 699, rating: 4.8 },
  { name: 'Phone', price: 699, rating: 4.2 },
  { name: 'Laptop', price: 999, rating: 4.5 }
]

const seperateProducts=[{ name: 'Laptop', price: 920, rating: 5 },...Products,{ name: 'Laptop', price: 1000, rating: 0.1 }]


const morning = ["🍳", "🥐"];
const evening = ["🍝", "🍰"];

const fullDayMeals=(arr1,arr2)=>{
  return ["☕",...arr1,...arr2,"🍷"]

}

console.log(fullDayMeals(morning,evening))


const user2 = {
  name: "John",
  age: 30,
  city: "New York"
};

const updates2 = {
  age: 31,
  city: "Los Angeles",
  occupation: "Engineer"
};

const updateProfile=(user,updates)=>{
  return {...user,updates}
}


const user = {
  name: "Alice",
  preferences: {
    theme: "dark",
    notifications: true
  },
  settings: {
    language: "English",
    timezone: "GMT"
  }
};

const updatese = {
  preferences: {
    theme: "light"
  },
  settings: {
    language: "Spanish"
  }
};

const deepUpdateProfile=(user,updatese)=>{
return {...user,preferences:{...user.preferences,...updatese.preferences},settings:{...user.settings,...updatese.settings}}
}
console.log(deepUpdateProfile(user,updatese))


