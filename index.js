let balance = 10000;
const game = () => {
  const userBet = parseInt(prompt(`Choose number between 1-10000`));

  const userValue = Math.floor(Math.random() * 6 + 1);
  const comValue = Math.floor(Math.random() * 6 + 1);

  if (userValue === comValue) {
    console.log("tentslee");
    balance = balance - userBet;
  } else if (userValue > comValue) {
    console.log("user win");
    balance = balance + userBet * 2;
  } else if (userValue < comValue) {
    console.log("com win");
    balance = balance + userBet;
  }

  const playAgain = parseInt(prompt("Dahin togloh uu toglohoor bol 1 ugui 0"));

  console.log(balance);
  if (playAgain === 1 && balance !== 0) {
    game();
  } else {
    return;
  }
};

game();
