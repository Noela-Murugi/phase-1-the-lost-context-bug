const messageConfig = {
  frontContent: "Happy Birthday, Odin One-Eye!",
  insideContent: "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
  closing: {
      "Thor": "Admiration, respect, and love",
      "Loki": "Your son"
  },
  signatories: [
      "Thor",
      "Loki"
  ]
};
// const printCard = function () {
//   console.log(this.frontContent);
//   console.log(this.insideContent);

//   console.log("Debug Before forEach: " + this);
//   this.signatories.forEach(function (signatory) {
//     console.log("Debug Inside: " + this);
//     // const message = `${this.closing[signatory]}, ${signatory}`
//     // console.log(message)
//   });
// };

// printCard.call(messageConfig);


// thisArg
const printCard = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);

  this.signatories.forEach(function (signatory) {
    const message = `${this.closing[signatory]}, ${signatory}`;
    console.log(message);
  }, this);
};

printCard.call(messageConfig);

//
const greeter = function (nameToGreet) {
  const message = `Good morning ${nameToGreet}`;
  console.log(message);
  return "Greeted: " + nameToGreet;
}.bind(this);
const result = greeter("Max Again");
