#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.greenBright("\n\tWelcome To Currency Converter\t\n"));
let exchange_rates = {
    "USD": 1,
    "GBP": 0.8,
    "JPY": 155.65,
    "CAD": 1.3,
    "AUD": 1.493,
    "EUR": 0.92,
    "CNY": 7.223,
    "RUB": 91.05,
    "PKR": 278,
    "SAR": 3.75,
    "INR": 83.28,
    "KRW": 1352.31 //South Korean Won
};
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
let amount = user_answer.amount;
// formula to convert currency
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
console.log(`Converted Amount = ${chalk.greenBright(converted_amount.toFixed(2))}`);
