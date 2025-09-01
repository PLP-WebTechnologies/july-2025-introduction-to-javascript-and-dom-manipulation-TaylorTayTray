// =====================
// Part 1: Variables & Conditionals
// =====================

// Declare variables
let age = 21;
let isStudent = true;
let outputDiv = document.getElementById("part1-output");

// Conditional statements
if (age >= 18) {
    outputDiv.textContent = "You are an adult.";
} else {
    outputDiv.textContent = "You are a minor.";
}

if (isStudent) {
    console.log("User is a student.");
} else {
    console.log("User is not a student.");
}

// =====================
// Part 2: Custom Functions
// =====================

// Function 1: Calculate sum of two numbers
function sum(a, b) {
    return a + b;
}

// Function 2: Greet user
function greet(name) {
    return `Hello, ${name}! Welcome to JS Mastery.`;
}

// Event listeners for buttons to demonstrate functions
document.getElementById("greetBtn").addEventListener("click", function() {
    alert(greet("Taylor"));
});

document.getElementById("sumBtn").addEventListener("click", function() {
    alert("Sum of 5 + 10 = " + sum(5, 10));
});

// =====================
// Part 3: Loop Examples
// =====================

// Loop Example 1: For loop to print numbers 1-5
for (let i = 1; i <= 5; i++) {
    console.log("For loop number: " + i);
}

// Loop Example 2: While loop to print numbers 1-3
let j = 1;
while (j <= 3) {
    console.log("While loop number: " + j);
    j++;
}

// =====================
// Part 4: DOM Interactions
// =====================

// DOM Interaction 1: Update text content
outputDiv.textContent += " Have fun learning JS!";

// DOM Interaction 2: Add click event to create a new list item
const itemList = document.getElementById("itemList");
const newTask = document.createElement("li");
newTask.textContent = "Task 3 added via JS";
itemList.appendChild(newTask);

// DOM Interaction 3: Toggle a class on button click
document.getElementById("greetBtn").addEventListener("click", function() {
    this.classList.toggle("active");
});

// Optional CSS for active class
const style = document.createElement('style');
style.textContent = `
    .active {
        background-color: #1d4ed8;
        color: white;
    }
`;
document.head.appendChild(style);
