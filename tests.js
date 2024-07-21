const assert = require("chai").assert;

// Function to add a task (to be tested)
function addTask(taskText) {
  if (taskText) {
    return taskText;
  }
  return null;
}

// Tests for addTask function
describe("addTask", function () {
  it("should return task text when valid text is provided", function () {
    assert.equal(addTask("Buy groceries"), "Buy groceries");
  });
  it("should return null when empty string is provided", function () {
    assert.isNull(addTask(""));
  });
  it("should return null when null is provided", function () {
    assert.isNull(addTask(null));
  });
});

module.exports = addTask;
