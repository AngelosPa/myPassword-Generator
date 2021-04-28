// Create a program that generate a random password with the length of 30 character, every time you call the function should give you a different password

const passGeneration = () => {
  let codicos = "";
  let possibleletters = "qazwsxedcrfvtgbyhnujmikolp1234567890!@#$%^&*".split(
    ""
  );
  for (let i = 0; i <= possibleletters.length; i++) {
    codicos +=
      i + possibleletters[Math.ceil(Math.random() * possibleletters.length)];
  }
  return codicos.substring(1, 31);
};
console.log(passGeneration());
// Examples you will have other passwords for sure
//passGeneration()  ➞ Y3mI9x7bvPY86T?oM§hIbgh!MLwA77N
// passGeneration()  ➞ Oy$tkBGoo5fg§mO4AdV&Kh8XXZR4d7K
// passGeneration()  ➞ v0ZwDrn@hfI€kOKWH§k6kqub6zfpuyP
