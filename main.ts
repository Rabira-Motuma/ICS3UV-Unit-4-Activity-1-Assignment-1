/**
* @author Rabira Motuma
* @version 1.0.0
* @date 2025-12-24
* @fileoverview This program computes the average for a given number of marks
*/

// variables
let numberOfMarksString: string;
let numberOfMarksNumber: number;
let total: number = 0;
let average: number;

// inputs
numberOfMarksString = prompt("How many marks will you enter today?") || "0";
numberOfMarksNumber = parseInt(numberOfMarksString);

// for
for (let i = 1; i <= numberOfMarksNumber; i++) {
  let markAsString = prompt(`Enter mark ${i}:`) || "0";
  let markAsNumber = parseInt(markAsString);
  total += markAsNumber;
}

// calculations
average = (total / numberOfMarksNumber);

// output
console.log(`You have entered ${numberOfMarksNumber} marks. The student's average is ${average.toFixed(0)}%.`);

// if statements
if (average < 50) {
    console.log(`You are failing.`);
} else {
    if (average <= 69) {
        console.log(`Your performance is just under average.`);
  } else {
      if (average <=79) {
          console.log(`Your performance is average.`);
      } else {
        console.log(`You're on the honour roll!`);
      }
  }
}

console.log("\nDone.");
