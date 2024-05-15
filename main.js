#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
console.log(chalk.redBright.bold(`\n\t WELCOME-code-with-tooba-upgraded-to-do-app`));
let main = async () => {
    while (condition) {
        let selection = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: ("\nSelect an option you want\n"),
                choices: ["AddTask", "View-to-do-list", "DeleteTask", "UpdateTask", "Exit"]
            }
        ]);
        //add Task
        let addTask = async () => {
            let AddTask = await inquirer.prompt([
                {
                    name: "task",
                    type: "input",
                    message: "Enter your new task"
                }
            ]);
            todos.push(AddTask.task);
            console.log(`\n${AddTask.task}, task added successfully`);
        };
        // view Task
        let viewTask = () => {
            console.log("Your updated to-do-list is:");
            todos.forEach((task, index) => {
                console.log(`\n ${index}: ${task}`);
            });
        };
        // Delete Task
        let DeleteTask = async () => {
            await viewTask();
            let indexTask = await inquirer.prompt([
                {
                    name: "indexNo",
                    type: "number",
                    message: "Enter index num you want to delete:"
                }
            ]);
            todos.splice(indexTask.indexNo);
            console.log(`\n${indexTask.indexNo},task deleted successfully`);
        };
        // Updated Task
        let UpdateTask = async () => {
            await viewTask();
            let UpdateTask = await inquirer.prompt([
                {
                    name: "update",
                    type: "number",
                    message: "Enter index num you want to update:"
                },
                {
                    name: "new",
                    type: "input",
                    message: "Enter your update."
                }
            ]);
            todos[UpdateTask.update] = UpdateTask.new;
            console.log(`\n ${UpdateTask.update}, updated successfully.`);
        };
        if (selection.choice === "AddTask") {
            await addTask();
        }
        else if (selection.choice === "View-to-do-list") {
            await viewTask();
        }
        else if (selection.choice === "DeleteTask") {
            await DeleteTask();
        }
        else if (selection.choice === "UpdateTask") {
            await UpdateTask();
        }
        else if (selection.choice === "Exit") {
            condition = false;
        }
    }
};
main();
