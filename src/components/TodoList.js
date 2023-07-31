import { Component } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [
        { id: 1, desc: "Do homework", status: false },
        { id: 2, desc: "Exercise", status: false },
        { id: 3, desc: "Practice English", status: false },
      ],
    };
  }

  handleAddEvent = (newItem) => {
    this.setState({ todolist: [...this.state.todolist, newItem] });
  };

  handleRemoveEvent = (id) => {
    console.log("🚀 ~ file: TodoList.js:22 ~ TodoList ~ id:", id);

    console.log(
      "🚀 ~ file: TodoList.js:25 ~ TodoList ~ this.state.todolist:",
      this.state.todolist
    );
    this.setState({
      todolist: this.state.todolist.filter((x) => x.id !== id),
    });
  };

  handleUpdateEvent = (updatedItem) => {
    const elementsIndex = this.state.todolist.findIndex(
      (element) => [element.id] == updatedItem.id
    );
    let copyList = [...this.state.todolist];

    copyList[elementsIndex] = updatedItem;
    this.setState({
      todolist: copyList,
    });
  };

  render() {
    console.log("Re-render component!!!");

    let { todolist } = this.state;
    console.log(
      "🚀 ~ file: TodoList.js:52 ~ TodoList ~ render ~ todolist:",
      todolist
    );

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
