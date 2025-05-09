let products = [
"ahmad","sayed","ali","osame","gmal"
];


products.splice(1,1,"dd","ss")



const colors = ["red", "green", "blue", "yellow"];


colors.splice(1,1, "purple", "cyan")


const tasks = ["Design UI", "Write tests", "Fix bugs", "Deploy"];
tasks.splice(2,2, "Refactor Code")

console.log({ tasks})


const cart = [
  { id: 1, name: "Mouse" },
  { id: 2, name: "Keyboard" },
  { id: 3, name: "Monitor" },
  { id: 4, name: "USB Cable" }
];
cart.splice(2,1, { id: 5, name: "Webcam" })

console.log({ cart})
