let todoList = [
  {
    item : 'JS',
    dueDate : '22/03/2025'
  },
  {
    item : 'CodeAndChai-JS',
    dueDate : '25/03/2025'
  },
];

function addClick(){
  let inputElement = document.querySelector('#todo-input');
  let inputDate = document.querySelector('#todo-date')
  let todoItem = inputElement.value;
  let todoDate = inputDate.value;
  todoList.push({item: todoItem, dueDate: todoDate });
  console.log(todoList)
  inputElement.value = '';
  inputDate.value = '';
}

