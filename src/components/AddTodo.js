import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export class AddTodo extends Component {
  state = {
    todoDesc: "",
  };

  handleTodoDescChangeEvent = (event) => {
    let desc = event.target.value;
    this.setState({ todoDesc: desc });
  };

  handleClickEvent = (event) => {
    event.preventDefault();

    if (!!this.state.todoDesc) {
      let { onSubmit } = this.props;
      let { todoDesc } = this.state;

      const date = new Date();
      let newTodoItem = { id: date.getTime(), desc: todoDesc, status: false };
      onSubmit(newTodoItem);

      this.setState({ todoDesc: "" });
    } else {
      alert("Input todo description");
    }
  };

  render() {
    console.log("Re-render component!!!");

    return (
      <div className="container">
        <form className="p-1">
          <label htmlFor="todoDesc"> Description:</label> <br />
          <input
            type="text"
            id="todoDesc"
            value={this.state.todoDesc}
            onChange={this.handleTodoDescChangeEvent}
          />
          <br />
          <Button variant="primary" onClick={this.handleClickEvent}>
            Add
          </Button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
