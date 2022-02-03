let addBtn = document.getElementById("add-task-button");
let taskField = document.getElementById("input-task");
let delBtns = document.getElementsByClassName("delete-btn");
let ul = document.getElementById("task-list");

// Load database from local storage.
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];


// Add onclick handler fo "Add task" btn.
addBtn.onclick = function() {
    let taskName = taskField.value;
    taskField.value = "";
    taskList.push(taskName);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    showTask(taskName);
}


function showTask(taskName) {
    if (taskName !== "") {
        let li = document.createElement("li");

        // Adding checkbox.
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // Adding task
        let span = document.createElement("span");
        span.className = 'task';
        span.textContent = taskName;

        // Adding delete button.
        let delBut = document.createElement("button");
        delBut.className = "delete-btn";
        delBut.textContent = "X";

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(delBut);
        ul.appendChild(li);

        delBut.onclick = function () {
            let li = this.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
            taskList = taskList.filter(e => e !== taskName);
            localStorage.setItem("tasks", JSON.stringify(taskList));
        }
    }
}

for (const taskName of taskList) {
    console.log(taskName);
    showTask(taskName)
}