
var TwoFer = function () {};


TwoFer.prototype.twoFer = function (who) {
  // your code goes here
  // You will have to use the parameter who
  // in some way. In this example, it is just
  // returned, but your solution will have to
  // use a conditional.





  return who;
};


const inquirer = require('inquirer');

inquirer.prompt([{
    name: 'name',
    type: 'input',
    message: 'What\'s your name?'
}]).then((answers) => {
    console.log(answers.name);
});

module.exports = TwoFer;
