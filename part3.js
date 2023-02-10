var Todo = /** @class */ (function () {
    function Todo() {
        this.Tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.Tasks.push(task);
        console.log("Task " + task + " add to the list.");
        return this.Tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        for (var i = 0; i < this.Tasks.length; i++) {
            console.log(this.Tasks[i]);
        }
    };
    Todo.prototype.deleteTask = function (task) {
        var indexArray = this.Tasks.indexOf(task);
        if (indexArray > -1) {
            this.Tasks.splice(indexArray, 1);
            console.log("Task " + task + " deleted from array");
        }
        else {
            console.log("Task " + task + " not found in array");
        }
        return this.Tasks.length;
    };
    return Todo;
}());
var myTodos = new Todo();
myTodos.addTask("Eat");
myTodos.addTask("Work");
myTodos.addTask("Sleep");
myTodos.listAllTasks();
myTodos.deleteTask("Eat");
myTodos.listAllTasks();
