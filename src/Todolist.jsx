import React from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
function TodoItem({
  todo,

  onEditClick,

  onDeleteClick,
}) {
  return (
    <div>
      <li className="py-2" key={todo.id}>
        <div className="flex items-center justify-between ">
          <p className=" font-medium font-serif text-[0.78rem]">{todo.text}</p>
          <div className="flex space-x-6 items-center justify-center">
            <FaRegEdit
              className="text-blue-500 w-6 h-6 focus:outline-none"
              onClick={() => onEditClick(todo)}
            />

            <FaTrashAlt
              className="text-red-500 h-6 w-6 focus:outline-none"
              onClick={() => onDeleteClick(todo.id)}
            />
          </div>
        </div>
      </li>
    </div>
  );
}
export default TodoItem;
