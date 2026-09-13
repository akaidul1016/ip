// Array of student objects
const students = [
    { name: "Akaidul", marks: 85 },
    { name: "Rahim", marks: 72 },
    { name: "Karim", marks: 58 },
    { name: "Sadia", marks: 45 },
    { name: "Nadia", marks: 32 }
];


// Arrow function to calculate grade
const getGrade = (marks) => {

    if (marks >= 80) {
        return "A+";
    } 
    else if (marks >= 70) {
        return "A";
    } 
    else if (marks >= 60) {
        return "B";
    } 
    else if (marks >= 50) {
        return "C";
    } 
    else if (marks >= 40) {
        return "D";
    } 
    else {
        return "F";
    }
};


// Loop through students
for (const student of students) {

    const grade = getGrade(student.marks);

    console.log(
        `Name: ${student.name}, Marks: ${student.marks}, Grade: ${grade}`
    );
}