import { Component } from "react";
import { toast } from "react-toastify";
import AddTodo from "../../components/AddTodo";
import TodoItem from "../../components/TodoItem";
import withLoader from "../../components/LoadIndicator";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [
        { id: 19723849798, desc: "Do homework", status: false },
        { id: 28729372737, desc: "Exercise", status: false },
        { id: 31231231111, desc: "Practice English", status: false },
      ],
    };

    console.log("Under constructor!!!");
    console.log(this.state.todolist);
  }

  componentDidMount() {
    console.log("Did mount component!!!");
    console.log(this);
  }

  componentDidUpdate() {
    console.log("Did update component!!!");
    console.log(this.state.todolist);
  }

  handleAddEvent = (newItem) => {
    this.setState({ todolist: [...this.state.todolist, newItem] });
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

  handleRemoveEvent = (id) => {
    console.log(`handleRemoveEvent is called with id ${id}`);
    this.setState({
      todolist: this.state.todolist.filter((item) => item.id !== id),
    });

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

  handleUpdateEvent = (updatedItem) => {
    console.log(`handleUpdateEvent is called with id ${updatedItem.id}`);

    let updatedId = updatedItem.id;
    let elementsIndex = this.state.todolist.findIndex(
      (element) => [element.id] == updatedId
    );
    let copyList = [...this.state.todolist];

    copyList[elementsIndex] = updatedItem;
    this.setState({
      todolist: copyList,
    });

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

  render() {
    console.log("Re-render component!!!");
    console.log(this);

    let { todolist } = this.state;

    return (
      <>
        <div className="mt-4 p-5 bg-secondary text-white rounded">
          <div className="container">
            <h1 className="display-4">Todo App!</h1>
            <AddTodo onSubmit={this.handleAddEvent} />
            <ul className="list-group">
              {todolist.map((todo, index) => {
                return (
                  <TodoItem
                    key={index}
                    todo={todo}
                    onRemove={this.handleRemoveEvent}
                    onUpdate={this.handleUpdateEvent}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default withLoader(TodoList);
