import inquirer from "inquirer";
const Currency = {
    USD: 5,
    EUR: 0.71,
    GBP: 0.50,
    INR: 90.88,
    PKR: 20
};
let user_answer = await inquirer.prompt([{
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    }, {
        name: "amount",
        message: "Enter from Amount",
        type: "number",
    },
]);
// let fromAmount = Currency[user_answer.from]
// let toAmount = Currency[user_answer.to]
// let amount = Currency.user_answer.from
let fromAmount = Currency[user_answer.from];
let toAmount = Currency[user_answer.to];
let amount = user_answer.amount; // Use the amount directly from user input
let baseAmount = amount / fromAmount;
console.log(fromAmount);
console.log(toAmount);
console.log(amount);
