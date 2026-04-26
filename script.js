let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${task}
            <button class="delete-btn" onclick="deleteTask(${index})">X</button>
        `;

        taskList.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if (task === "") {
        alert("Enter a task");
        return;
    }

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

// Load tasks on page load
renderTasks();