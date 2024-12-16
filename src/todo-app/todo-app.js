function createTodoApp() {
  return {
    items: [],
  };
}

function createTodo(newTodo, currentState) {
  const newState = {
    ...currentState,
    items: [...currentState.items, newTodo]
  };
  
  return newState;
}

let state = createTodoApp();
