let todoList = ["eat", "sleep", "code"];

console.log("📝 Welcome to the To-Do List App!");
console.log("Current List:", todoList);

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

let item = prompt("Enter your item:");
let operation = prompt("Enter your operation (add/remove):");
updateList(item, operation);

console.log("📋 Updated To-Do List:", todoList);

let doitagain = prompt("Wanna do it again? (yes/no):");
while (doitagain === "yes") {
    item = prompt("Enter your item:");
    operation = prompt("Enter your operation (add/remove):");
    updateList(item, operation);
    console.log("📋 Updated To-Do List:", todoList);
    doitagain = prompt("Wanna do it again? (yes/no):"); 
}

