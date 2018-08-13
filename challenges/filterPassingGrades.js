// Define a function named filterPassingGrades that takes in one argument.
//     grades (array of numbers)
//
// Return a new array with any grade less than 70 filtered out. For example,
// given [88, 67, 70, 92, 53], then return [88, 70, 92].



let grades = [80, 85, 0, 70, 20, 22, 23, 90, 100, 120]
function filterPassingGrades(grades) {
  return grades.filter(function(val) {
    return val > 70;
  })
}
console.log(filterPassingGrades(grades));


//ORRRRR

let gradesReal = [80, 85, 0, 70, 20, 22, 23, 90, 100, 120]
function filterPassingGrades(grades) {
  return grades.filter(grade => grade > 70)
}
console.log(filterPassingGrades(gradesReal));
