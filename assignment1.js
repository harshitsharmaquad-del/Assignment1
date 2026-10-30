// ===== Marks Analyzer =====

// 1. Student details aur har subject ke marks
let studentName = "Mohit Kumar";
let rollNumber = 24;
let department = "Computer Science";
let marks_English = 84;
let marks_Science = 95;
let marks_Socialstudies = 96;
let marks_Hindi = 83;
let marks_Mathematics = 98;

// 2. Paanchon subjects ke marks array me
let marks = [84, 95, 96, 83, 98];

// 3. Total marks
function calculateTotal(marks) {
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  return total;
}

// 4. Percentage (har subject 100 marks ka maana gaya hai)
function calculatePercentage(marks) {
  return (calculateTotal(marks) / (marks.length * 100)) * 100;
}

// 5. Highest mark
function findHighest(marks) {
  return Math.max(...marks);
}

// 6. Lowest mark
function findLowest(marks) {
  return Math.min(...marks);
}

// 7. Kitne subjects me marks >= 40
function countAbove40(marks) {
  let count = 0;
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 40) {
      count++;
    }
  }
  return count;
}

// 8. Name uppercase me + characters ki ginti
function nameInfo(name) {
  console.log("Name in uppercase:", name.toUpperCase());
  console.log("Number of characters:", name.length);
}

// 9. Final report
function displayReport(marks) {
  const passingMarks = 33;
  let passed = 0;
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= passingMarks) {
      passed++;
    }
  }

  console.log("========== STUDENT REPORT ==========");
  console.log("Name :", studentName.toUpperCase());
  console.log("Roll Number:", rollNumber);
  console.log("Department :", department);
  console.log("Total Marks =", calculateTotal(marks));
  console.log("Percentage =", calculatePercentage(marks), "%");
  console.log("Highest Marks =", findHighest(marks));
  console.log("Lowest Marks =", findLowest(marks));
  console.log("Number of subject passed =", passed);
}

// Bonus: Performance remark
function performanceRemark(marks) {
  const percentage = calculatePercentage(marks);
  if (percentage >= 80) {
    return "Excellent";
  } else if (percentage >= 60) {
    return "Good";
  } else if (percentage >= 40) {
    return "Average";
  } else {
    return "Needs Improvement";
  }
}

// ===== Output =====
console.log("Total Marks =", calculateTotal(marks));
console.log("Percentage =", calculatePercentage(marks), "%");
console.log("Highest Marks =", findHighest(marks));
console.log("Lowest Marks =", findLowest(marks));
console.log("Number of subjects with marks >= 40 =", countAbove40(marks));
nameInfo("pratibha singh");
displayReport(marks);
console.log("Remark:", performanceRemark(marks));