const inquirer = require('inquirer');

var TwoFer = function () {};


TwoFer.prototype.twoFer = function (who) {
  // your code goes here
  // You will have to use the parameter who
  // in some way. In this example, it is just
  // returned, but your solution will have to
  // use a conditional.
    //
    // var userName = grabName();

  return who;
};


function grabName () {

    //code that grabs a person's name

    inquirer.prompt([{
        name: 'name',
        type: 'input',
        message: 'What\'s your name?'
    }])
        .then((answers) => {
            var response = answers.name;
        })

.then(function(){
            return answer.name
    });

}

grabName();

module.exports = TwoFer;
