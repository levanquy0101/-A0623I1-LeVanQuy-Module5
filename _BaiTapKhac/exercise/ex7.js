//7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person"
const people = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
  ];
  
  // Sử dụng destructuring để trích xuất "name" và "age" từ mỗi đối tượng trong mảng
//   for (const { name, age } of people) {
//     console.log(`${name} is ${age} years old`);
//   }
  
  let [a,b] = people;
  console.log(a.name, a.age);
  console.log(b.name, b.age);