// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', addTask);

    function addTask(event) {
        event.preventDefault();

        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            const actions = document.createElement('div');
            actions.classList.add('task-actions');

            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete';
            completeButton.addEventListener('click', completeTask);
            actions.appendChild(completeButton);

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', editTask);
            actions.appendChild(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', deleteTask);
            actions.appendChild(deleteButton);

            li.appendChild(actions);
            taskList.appendChild(li);

            taskInput.value = '';
        }
    }

    function completeTask(event) {
        const taskItem = event.target.parentElement.parentElement;
        taskItem.classList.toggle('completed');
    }

    function editTask(event) {
        const taskItem = event.target.parentElement.parentElement;
        const newTaskText = prompt('Edit your task', taskItem.firstChild.textContent);
        if (newTaskText !== null) {
            taskItem.firstChild.textContent = newTaskText.trim();
        }
    }

    function deleteTask(event) {
        const taskItem = event.target.parentElement.parentElement;
        taskList.removeChild(taskItem);
    }
});
