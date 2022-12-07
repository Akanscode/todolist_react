import { useEffect, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import AddEdit from "./AddEdit";
import TodoItem from "./Todolist";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAddInputChange(e) {
    setTodo(e.target.value);
  }

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);
  }

  function handleAddFormSubmit(e) {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: new Date(),
          text: todo.trim(),
        },
      ]);
    }

    setTodo("");
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }

  function handleEditClick(todo) {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }

  return (
    <div className="App">
      <div className="flex items-center justify-center max-w-full my-20 ">
        <div className=" w-1/2 px-8 py-10 mx-auto  bg-white rounded-lg shadow-2xl lg:max-w-xl shadow-gray-400/50">
          {isEditing ? (
            <AddEdit
              currentTodo={currentTodo}
              setIsEditing={setIsEditing}
              onEditInputChange={handleEditInputChange}
              onEditFormSubmit={handleEditFormSubmit}
            />
          ) : (
            <AddTodoForm
              todo={todo}
              onAddInputChange={handleAddInputChange}
              onAddFormSubmit={handleAddFormSubmit}
            />
          )}

          <ul className="todo-list p-6 divide-y divide-slate-200 ">
            {todos.map((todo) => (
              <TodoItem
                todo={todo}
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteClick}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
