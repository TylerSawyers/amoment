const chalk = require('chalk');
var moment = require("moment");


console.log(chalk.underline(chalk.blue(moment().format("dddd"))))
hour = moment().format("k");

if (hour > 12 && hour < 17){
    greeting = "good afternoon";
} else if (hour > 0 && hour > 12){
    greeting = "good morning";
}else if (hour > 5){
    greeting = "good evening";
}
console.log(chalk.underline(chalk.blue(greeting)))