import React from "react";
import { HiArchiveBoxXMark, HiArrowUpTray } from "react-icons/hi2";
function EditForm({
  currentTodo,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit,
}) {
  return (
    <div className="">
      <h2 className="text-[1.40rem] md:text-[2.0rem] font-bold text-gray-700 capitalize">
        Edit Todo
      </h2>
      <form onSubmit={onEditFormSubmit}>
        <div className="flex items-center justify-between p-6">
          <div>
            <label
              className="block mb-2 text-[0.90rem] text-[#101828]"
              htmlFor="updateTodo"
            >
              Update todo:{" "}
            </label>
            <input
              className="block w-50 px-5 py-3 text-gray-700 placeholder-[#98A2B3] bg-white border border-[#EAECF0] rounded-md focus:outline-none"
              name="updateTodo"
              type="text"
              placeholder="Update todo"
              value={currentTodo.text}
              onChange={onEditInputChange}
            />
          </div>
          <div className="flex gap-4 items-center justify-center">
            <HiArrowUpTray
              className="text-green-500 w-6 h-6 focus:outline-none"
              type="submit"
              onClick={onEditFormSubmit}
            />

            <HiArchiveBoxXMark
              className="text-red-500 w-6 h-6 focus:outline-none"
              onClick={() => setIsEditing(false)}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
export default EditForm;
