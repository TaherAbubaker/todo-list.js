// Simple To-Do List Manager (JavaScript)
// Author: [Your Name]
// Description: A basic script to add or remove items from a to-do list using prompt inputs.

let todoList = ["eat", "sleep", "code"];

console.log("📝 Welcome to the To-Do List App!");
console.log("Current List:", todoList);

// Get user input
let item = prompt("Enter your item:");
let operation = prompt("Enter your operation (add/remove):");

// Function to update the to-do list
function updateList(item, operation) {
    if (operation === "add") {
        todoList.push(item);
        console.log(`✅ "${item}" added to the list.`);
    } 
    else if (operation === "remove") {
        if (todoList.includes(item)) {
            todoList.splice(todoList.indexOf(item), 1);
            console.log(`❌ "${item}" removed from the list.`);
        } else {
            console.log(`⚠️ Item "${item}" not found in the list.`);
        }
    } 
    else {
        console.log("❌ Invalid operation. Use 'add' or 'remove'.");
    }
}

// Call the function
updateList(item, operation);

// Print the updated list
console.log("📋 Updated To-Do List:", todoList);
