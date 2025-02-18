const students = [
    { id: 1, name: "Ali", age: 20, grade: "A" },
    { id: 2, name: "Sara", age: 22, grade: "B" },
    { id: 3, name: "Zain", age: 21, grade: "A" }
  ];
  
  // Using map() to extract names
  const studentNames = students.map(student => student.name);
  
  console.log(studentNames);