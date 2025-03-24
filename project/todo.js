let todoList = [
  {
    item: 'JS',
    dueDate: '22/03/2025'
  },
  {
    item: 'Code-And-Chai-JS',
    dueDate: '25/03/2025'
  },
];
todoDisplay();

function addClick() {
  let inputElement = document.querySelector('#todo-input');
  let inputDate = document.querySelector('#todo-date')
  let todoItem = inputElement.value;
  let todoDate = inputDate.value;
  todoList.push({ item: todoItem, dueDate: todoDate });
  console.log(todoList)
  inputElement.value = '';
  inputDate.value = '';
  todoDisplay();
}

function todoDisplay() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `<span>${item}</span>
                  <span>${dueDate}</span>
                  <button id="btn-delete" onclick="todoList.splice(${i},1);
                  todoDisplay(); ">Delete</button>`;
  }
  containerElement.innerHTML = newHtml;
}