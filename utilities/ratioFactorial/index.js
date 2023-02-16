const factor = require("../factorial/index");
const rat = require("../ratio/index");

const ratioAndFactorial = (n1, n2, n3) => {
  const ratio = rat(n1, n2);
  const factorial = factor(n3);

  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
