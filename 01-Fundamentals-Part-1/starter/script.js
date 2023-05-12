// let js = "amazing";
// console.log(48 + 8 + 23 - 10);
let massMark = 78;
let heightMark = 1.69;

let BMIMark = massMark / (heightMark * heightMark);

let massJohn = 92;
let heightJohn = 1.95;
let BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIMark, BMIJohn);
if (BMIMark > BMIJohn) {
  console.log(
    `(Mark's BMI(${Math.floor(BMIMark)}) is higher than John's BMI(${Math.floor(
      BMIJohn
    )})!`
  );
} else {
  console.log(
    `(John's BMI(${Math.floor(BMIJohn)}) is higher than Mark's BMI(${Math.floor(
      BMIMark
    )})!`
  );
}

const dolphinsOne = 97;
const dolphinsTwo = 112;
const dolphinsThree = 101;

const koalasOne = 97;
const koalasTwo = 112;
const koalasThree = 101;

const averageDolphinsScore = (dolphinsOne + dolphinsTwo + dolphinsThree) / 3;
console.log(averageDolphinsScore);
const averageKoalasScore = (koalasOne + koalasTwo + koalasThree) / 3;
console.log(averageKoalasScore);
if (averageDolphinsScore >= 100 || averageKoalasScore >= 100) {
  if (averageDolphinsScore > averageKoalasScore) {
    console.log(
      `team Dolphins has win with average score of ${averageDolphinsScore}`
    );
  } else if (averageKoalasScore > averageDolphinsScore) {
    console.log(
      `team Koalas has win with average score of ${averageKoalasScore}`
    );
  } else {
    console.log("win = win");
  }
} else {
  console.log("non of the teams meet the minimum score");
}

let day = "wednesday";
switch (day) {
  case "monday":
    console.log("today is a monday");
    break;
  case "tuesday":
    console.log("today is tuesday");
    break;
  case "wednesday":
  case "thursday":
    if ("wednesday") {
      console.log("tomorrow is Thursday");
    } else {
      console.log(" yesterday was wednesday");
    }

    break;
  case "friday":
    console.log("you have two days in row as a weekend");
    break;
  default:
    console.log("it was not a day, input a day");
}

const bill = 40;
const tip =
  bill <= 49
    ? console.log("you should not pay any tip")
    : bill >= 50 && bill <= 300
    ? console.log(
        `Your bill is £ ${bill}, The tip £ ${
          bill * 0.15
        } and the final bill value is £ ${bill + bill * 0.15}`
      )
    : console.log(
        `Your bill is £ ${bill}, The tip £ ${
          bill * 0.2
        } and the final bill value is £ ${bill + bill * 0.2}`
      );
const tips = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(tips);
