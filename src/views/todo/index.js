import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { selectTodos, add, remove, update } from "../../utils/todos/todosSlice";
import AddTodo from "../../components/AddTodo";
import TodoItem from "../../components/TodoItem";
import withLoader from "../../components/LoadIndicator";

export function TodoList() {
  const todolist = useSelector(selectTodos);
  const dispatch = useDispatch();

  const handleAddEvent = (newItem) => {
    dispatch(add(newItem));
    toast.success(`${newItem.desc} was added 👌`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleRemoveEvent = (id) => {
    console.log(`handleRemoveEvent is called with id ${id}`);
    dispatch(remove(id));

    toast.warn(`Item number ${id} was removed 👌`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleUpdateEvent = (updatedItem) => {
    console.log(`handleUpdateEvent is called with id ${updatedItem.id}`);

    let updatedId = updatedItem.id;
    dispatch(update(updatedItem));

    toast.success(`Item number ${updatedId} was updated 👌`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <div className="mt-4 p-5 bg-secondary text-white rounded">
        <div className="container">
          <h1 className="display-4">Todo App!</h1>
          <AddTodo onSubmit={handleAddEvent} />
          <ul className="list-group">
            {todolist.map((todo, index) => {
              return (
                <TodoItem
                  key={index}
                  todo={todo}
                  onRemove={handleRemoveEvent}
                  onUpdate={handleUpdateEvent}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default withLoader(TodoList);
