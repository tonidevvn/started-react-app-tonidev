import React, { Component } from "react";

export class TodoItem extends Component {
  constructor(props) {
    super(props);
    let { todo } = this.props;
    console.log(
      "🚀 ~ file: TodoItem.js:7 ~ TodoItem ~ constructor ~ todo:",
      todo
    );

    this.state = {
      id: todo.id,
      desc: todo.desc,
      status: todo.status,
      editMode: false,
    };
  }

  render() {
    console.log("Re-render component!!!");

    let { todo, onRemove, onUpdate } = this.props;

    return (
      <li className="list-group-item d-flex justify-content-center">
        {!this.state.editMode ? (
          <span className="d-inline-block pe-2">{todo.desc}</span>
        ) : (
          <input
            type="text"
            className="d-inline-block pe-2"
            value={todo.desc}
            onChange={(event) => {
              this.setState({ desc: event.target.value });
              onUpdate({
                id: todo.id,
                desc: event.target.value,
                status: todo.status,
              });
            }}
          ></input>
        )}
        <div className="form-check form-switch d-inline-block">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onChange={() => {
              let newStatus = !this.state.status;
              this.setState({ status: newStatus });
              onUpdate({
                id: todo.id,
                desc: todo.desc,
                status: newStatus,
              });
            }}
            checked={!!this.state.status}
          />
        </div>
        {!this.state.editMode ? (
          <span
            className="d-inline-block px-1"
            style={{ cursor: "pointer" }}
            title="Edit"
            onClick={() => this.setState({ editMode: !this.state.editMode })}
          >
            ✏️
          </span>
        ) : (
          <span
            className="d-inline-block px-1"
            style={{ cursor: "pointer" }}
            title="Save"
            onClick={() => this.setState({ editMode: !this.state.editMode })}
          >
            📋
          </span>
        )}
        <span
          className="d-inline-block px-1"
          style={{ cursor: "pointer" }}
          onClick={() => onRemove(todo.id)}
          title="Delete"
        >
          ❌
        </span>
      </li>
    );
  }
}

export default TodoItem;
