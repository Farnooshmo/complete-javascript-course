// "use strict";
// console.log("hello");

// function juiceMaker(apple, orange) {
//   const juice = `juice from ${apple} appels & juice from ${orange} oranges`;

//   return juice;
// }
// const mixAppleJuiceWithMoreLittleOrange = juiceMaker(20, 3);
// console.log(mixAppleJuiceWithMoreLittleOrange);
// const mixOrangeJuiceWithLittleApple = juiceMaker(2, 30);
// console.log(mixOrangeJuiceWithLittleApple);

function calcAverage(n1, n2, n3) {
  const average = (n1 + n2 + n3) / 3;
  return average;
}

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(
      `team dolphins win with score average ${avgDolphins} in compare with ${avgKoalas}`
    );
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(
      `team koalas win with score average ${avgKoalas} in compare with ${avgDolphins}`
    );
  } else {
    console.log("no team wins");
  }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(9, 50);
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);

const calTip = () => {
  const bills = [125, 555, 44];
  const tips = [];
  for (let bill of bills) {
    // bill >= 50 && bill <= 300
    // ? console.log(
    //     `Your bill is £ ${bill}, The tip £ ${
    //       bill * 0.15
    //     } and the final bill value is £ ${bill + bill * 0.15}`
    //   )
    // : console.log(
    //     `Your bill is £ ${bill}, The tip £ ${
    //       bill * 0.2
    //     } and the final bill value is £ ${bill + bill * 0.2}`
    //   );
    const tip =
      bill >= 50 && bill <= 300
        ? tips.push(Math.round(bill * 0.15))
        : tips.push(Math.round(bill * 0.2));
    console.log(tip, tips);
  }
};
calTip();
