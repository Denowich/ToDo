import {TodoList} from "./TodoList.jsx";
import {AddTaskForm} from "./AddTaskForm.jsx";
import {SearchTaskForm} from "./SearchTaskForm.jsx";
import {TodoInfo} from "./TodoInfo.jsx";

export const Todo = () => {
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo />
      <TodoList />
    </div>
  )
}