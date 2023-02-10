var Tasks = [];
function addTask(task) {
    Tasks.push(task);
    console.log("Task " + task + " add to the list");
    return Tasks.length;
}
console.log(addTask("Task"));
function listAllTasks() {
    for (var i = 0; i < Tasks.length; i++) {
        console.log(Tasks[i]);
    }
}
listAllTasks();
function deleteTask(task) {
    var indexArray = Tasks.indexOf(task);
    if (indexArray > -1) {
        Tasks.splice(indexArray, 1);
        console.log("Task " + task + " deleted from array");
    }
    else {
        console.log("Task " + task + " not found in array");
    }
    return Tasks.length;
}
addTask("Eat Lunch");
deleteTask("Eat Lunch");
