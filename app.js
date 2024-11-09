
let addTodoBtn = document.querySelector('.add')
let input = document.querySelector('#new-todo')
let todosWrapper = document.querySelector('#todo-list')



addTodoBtn.addEventListener("click", function () {
  const todoItem = todosWrapper.appendChild(document.createElement("li"))

  console.log(todoItem);

  todoItem.classList.add("todo-item")
  todoItem.innerHTML = '<span class="span">' + input.value + '</span><button class="complete-btn">✔️</button><button class="edit-btn">✏️</button><button class="delete-btn">🗑️</button>'

  const deleteBtn = todoItem.querySelector(".delete-btn")
  const completeBtn = todoItem.querySelector(".complete-btn")
  const editBtn = todoItem.querySelector(".edit-btn")

  const todoTitle = todoItem.querySelector(".span")

  editBtn.addEventListener("click", function () {
    const updatedTodoText = prompt("متن جایگزین را وارد کنید", todoTitle.textContent)
    if (updatedTodoText)
      todoTitle.textContent = updatedTodoText
  })

  completeBtn.addEventListener('click', function () {
    todoItem.classList.toggle('completed')
  })

  deleteBtn.addEventListener('click', function (event) {
    event.target.parentElement.remove()
  })
})
