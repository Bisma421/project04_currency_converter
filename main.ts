#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.bold.greenBright("\n\tWelcome To Currency Converter\t\n"));

let exchange_rates : any = {
    "USD": 1, //Base currency
    "GBP": 0.8, //British Pound 
    "JPY": 155.65, //Japanese Yen
    "CAD": 1.3, //canadian Dollar
    "AUD": 1.493, //Australian Dollar
    "EUR": 0.92, //Euro
    "CNY": 7.223, //New Zealand Dollar
    "RUB": 91.05, //Russian Dollar
    "PKR": 278, //Pakistani Rupee
    "SAR": 3.75,// Saudi Arabian Riyal
    "INR": 83.28, //Indian Rupee
    "KRW": 1352.31 //South Korean Won
}

let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency you want to convert from: ",
        choices: ["USD", "GBP", "JPY", "CAD", "AUD", "EUR", "CNY", "RUB", "PKR", "SAR", "INR", "KRW"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency you want to convert to: ",
        choices: ["USD", "GBP", "JPY", "CAD", "AUD", "EUR", "CNY", "RUB", "PKR", "SAR", "INR", "KRW"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount you want to convert: "
    }
]);

let from_amount = exchange_rates[user_answer.from_currency];
let to_amount = exchange_rates[user_answer.to_currency];
let amount = user_answer.amount

// formula to convert currency

let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

console.log(`Converted Amount = ${chalk.greenBright(converted_amount.toFixed(2))}`);

