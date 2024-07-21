// Function to add a task (to be tested)
function addTask(taskText) {
  if (taskText) {
    return taskText;
  }
  return null;
}

// Tests for addTask function
console.assert(
  addTask("Buy groceries") === "Buy groceries",
  'Test Failed: Task should be "Buy groceries"'
);
console.assert(addTask("") === null, "Test Failed: Task should be null");
console.assert(addTask(null) === null, "Test Failed: Task should be null");
