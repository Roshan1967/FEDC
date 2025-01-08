
let students = [
    { 
      name: "Alice", 
      age: 20, 
      marks: { math: 85, science: 90, english: 88 }
    },
    { 
      name: "Bob", 
      age: 22, 
      marks: { math: 75, science: 80, english: 78 }
    },
    { 
      name: "Charlie", 
      age: 21, 
      marks: { math: 92, science: 89, english: 85 }
    }
  ];
  
  students.push({
    name: "David", 
    age: 23, 
    marks: { math: 88, science: 85, english: 90 }
  });
  
  function calculateAverage(marks) {
    const totalMarks = marks.math + marks.science + marks.english;
    return totalMarks / 3;
  }
    