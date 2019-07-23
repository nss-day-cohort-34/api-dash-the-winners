const whereToPutTodo = document.querySelector("#todo-list");

const todoFetcher = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(todo => todo.json())
    .then(arrayofTodos => {
      for (let index = 0; index < 30; index++) {
        const firstThirty = arrayofTodos[index];
        const convertedTodo = todoConverter(arrayofTodos[index]);
        displayTodoInDOM(convertedTodo);
        console.log(firstThirty);
      }
    });
};

const todoConverter = todoObject => {
  return `
        <section class="todo">
        <h1 class="todo__title">${todoObject.title}</h1>
        <input type="checkbox" name="${todoObject.completed}" id="checkbox" checked>
        </section>
        `;
};

const displayTodoInDOM = todoHTMLRepresent => {
  whereToPutTodo.innerHTML += todoHTMLRepresent;
};

todoFetcher();
