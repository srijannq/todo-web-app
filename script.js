document.addEventListener('DOMContentLoaded', () => {
  const todoInput = document.getElementById('todo-input')
  const addTaskButton = document.getElementById('add-task-btn')
  const taskList = document.getElementById('todo-list')

  let tasks = JSON.parse(localStorage.getItem('tasks')) || []
  tasks.forEach(task => renderTasks(task))
  addTaskButton.addEventListener('click', () => {
    const taskText = todoInput.value.trim()
    if (taskText === '') {
      return
    }
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    }
    tasks.push(newTask)
    saveItem()
    renderTasks(newTask)
    todoInput.value = ''
  })
  function renderTasks(task) {
    const li = document.createElement('li')
    if (task.completed) {
      li.classList.add('completed')
    }
    li.innerHTML = `<span>${task.text} </span>
    <button>Delete</button>`
    li.setAttribute('data-id', task.id)
    li.addEventListener('click', e => {
      if (e.target.tagName === 'BUTTON') {
        return
      }
      tasks.completed = !task.completed
      li.classList.toggle('completed')
      saveItem()
    })
    li.querySelector('button').addEventListener('click', e => {
      e.stopPropagation() //prevent event bubbling
      tasks = tasks.filter(t => t.id !== task.id)
      li.remove()
      saveItem()
    })
    taskList.appendChild(li)
  }

  function saveItem() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
  // create a retreive function from the local storage
})
