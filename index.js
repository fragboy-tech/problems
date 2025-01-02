const userWinableValues = [1, 2, 0];

const results = [];

const convertToString = (value) => {
  let result;

  switch (value) {
    case 0:
      result = "chuluu";
      break;

    case 1:
      result = "haich";
      break;

    case 2:
      result = "daawuu";
      break;
  }

  return result;
};

const resultAlert = (message, userValue, compValue) => {
  const userString = convertToString(userValue);
  const comString = convertToString(compValue);

  const result = `${message} useriin gargasan utga =  ${userString} computer iin gargasan utga = ${comString}`;

  results.push(result);

  return window.alert(result);
};

const game = () => {
  let userValue = prompt("Yu gargah we (haich/chuluu/daawuu)");

  const userStrings = {
    chuluu: 0,
    haich: 1,
    daawuu: 2,
  };

  userValue = userStrings[userValue];

  if (userValue) {
    const compValue = Math.floor(Math.random() * 3 + 0);
    if (userValue === compValue) {
      resultAlert("Draw", userValue, compValue);
    } else if (userWinableValues[userValue] === compValue) {
      resultAlert("User win", userValue, compValue);
    } else {
      resultAlert("Com win", userValue, compValue);
    }
  } else {
    window.alert("Buruu utga!!!!");
  }

  const playAgain = parseInt(prompt("Dahin togloh uu toglohoor 1 ugui 0"));

  if (playAgain === 1) {
    game();
  } else {
    return;
  }
};

game();

console.log(results);
