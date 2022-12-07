import React from "react";

function AddTodoForm({ todo, onAddFormSubmit, onAddInputChange }) {
  return (
    <div className="flex items-center justify-center mb-3">
      <form onSubmit={onAddFormSubmit}>
        <h2 className="text-[1.40rem] md:text-[2.0rem] font-bold text-gray-700 capitalize">
          Add Todo
        </h2>
        <label
          className="block mb-2 text-[0.90rem] text-[#101828]"
          htmlFor="todo"
        >
          Create todo:{" "}
        </label>
        <input
          className="block w-50 px-5 py-3 mt-1 text-gray-700 placeholder-[#98A2B3] bg-white border border-[#EAECF0] rounded-md focus:outline-none"
          name="todo"
          type="text"
          placeholder="Create new todo"
          value={todo}
          onChange={onAddInputChange}
        />
      </form>
    </div>
  );
}
export default AddTodoForm;
