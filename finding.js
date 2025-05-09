const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Zain" },
];

const findUser = users.find((user) => user.id === 2);

console.log(findUser);

const books = [
  { title: "Clean Code", author: "Robert C. Martin", available: true },
  { title: "You Don't Know JS", author: "Kyle Simpson", available: false },
  { title: "Eloquent JavaScript", author: "Marijn Haverbeke", available: true }
];

const findBooks = books.find((book) => !book.available);

console.log(findBooks);


const employees = [
  { id: 1, name: "Amir", department: { name: "HR", active: true } },
  { id: 2, name: "Laila", department: { name: "Finance", active: false } },
  { id: 3, name: "Hassan", department: { name: "IT", active: true } },
  { id: 4, name: "Noor", department: { name: "Finance", active: true } }
];

const findEmployee = employees.find((employee) => employee.department.active&&employee.department.name==='Finance');

console.log(findEmployee);
