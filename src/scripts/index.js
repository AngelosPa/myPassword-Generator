// //LATER I RUINED IT I Created the function that gets the value from the user when he writes something
//LATER I RUINED IT
// const getTheDigitsFromUser = () => {
//   let numfromUser = document.querySelector(".weGetNums").value;
//   if (numfromUser > 60) {
//     alert("we can create a password with max 60digits");
//     numfromUser = 0;
//   }
//   console.log(numfromUser);
// };

//we create a js var to get our button with the class name choosecustom//LATER I RUINED IT
//choosecustom.addEventListener("click", getTheDigitsFromUser);
//const choosecustom = document.querySelector(".choosecustom");
//LATER I RUINED IT //choosecustom.addEventListener("click", boom);

//we make the same for the other buttons
const choose4 = document.querySelector(".choose4");
const choose8 = document.querySelector(".choose8");
const choose30 = document.querySelector(".choose30");
// we use this variable with addeventlistener to activate the getTheDigitsFromUser function with the word click, after that with every click we get the text that the user wrote by document.querySelector(".weGetNums").value;

const passGeneration = (n) => {
  let codicos = "";
  let possibleletters = "qazwsxedcrfvtgbyhnujmikolp1234567890!@#$%^&*".split(
    ""
  );
  for (let i = 0; i <= possibleletters.length; i++) {
    codicos +=
      i + possibleletters[Math.ceil(Math.random() * possibleletters.length)];
  }
  return codicos.substring(1, n + 1);
};

//i grab the passGeneration(n)-with the right argument always- and i assign it with the value of my resulti input
const boom1 = () => {
  document.querySelector(".resulti").value = Math.floor(Math.random() * 10000);
};
const boom2 = () => {
  document.querySelector(".resulti").value = passGeneration(8);
};
const boom3 = () => {
  //document.querySelector(".resulti").innerHTML = result3;
  //an other way to grab
  document.getElementById("gms").value = passGeneration(30);
};
//so every of my 3 buttons activates the right function who shows the 4, 8 or 30 result
choose4.addEventListener("click", boom1);
choose8.addEventListener("click", boom2);
choose30.addEventListener("click", boom3);

//for the copy button we make this function
const copy = () => {
  let copytext = document.querySelector("#gms");
  copytext.select();
  //
  document.execCommand("copy");
};
document.querySelector("#copia").addEventListener("click", copy);
