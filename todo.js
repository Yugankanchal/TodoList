let TodoList = [];
const listItems = document.getElementById('list-items');
function getValue() {
    const inputFeild = document.getElementsByTagName('input');
    let value = inputFeild[0].value;
    inputFeild[0].value = "";
    return value;
}

function deleteTask(taskId) {
    let newTodo = TodoList.filter((task) => task.id != taskId);
    TodoList = newTodo;
    renderList();

}

function addTaskToDom(Todo) {

    const listElement = document.createElement('li');
    if (Todo.done) {
        listElement.innerHTML = `<i class="fa-solid fa-circle bullet"></i> <span>${Todo.todo}</span> <i class="fa-regular fa-circle-xmark cross"></i>`;
    } else {
        listElement.innerHTML = `<i class="fa-regular fa-circle bullet"></i> <span>${Todo.todo}</span> <i class="fa-regular fa-circle-xmark cross"></i>`;
    }
    listElement.setAttribute('id', Todo.id);
    listItems.append(listElement);

}

function renderList() {
    document.getElementById('list-items').innerHTML = '';
    for (let i = 0; i < TodoList.length; i++) {
        addTaskToDom(TodoList[i])
    }
    let newTodo = TodoList.filter((task) => task.done == false);
    document.getElementById('Total-todo').innerText = (newTodo.length) + ': tasks left';
}
function addTodo(task) {
    if (TodoList) {
        TodoList.push(task);
        renderList();
    }

}

document.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        const todoValue = getValue();
        if (todoValue != '') {
            const task = {
                todo: todoValue,
                id: Date.now().toString(),
                done: false
            }
            if (task) {
                addTodo(task);
            }
        }
    }

})
function markCompleted() {

}
document.addEventListener('click', (e) => {
    if (e.target.className == 'fa-regular fa-circle-xmark cross') {
        const taskId = e.target.parentNode.id;
        deleteTask(taskId);

    } else if (e.target.className == 'fa-regular fa-circle bullet') {
        const taskId = e.target.parentNode.id
        const taskDone = TodoList.filter((task) => task.id === taskId);
        if (taskDone[0].done == false) {
            taskDone[0].done = true;
            e.target.className = "fa-solid fa-circle bullet"
            renderList();
        }
        console.log('yes');
    }

})